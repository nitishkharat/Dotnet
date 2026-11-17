import os
from datetime import datetime

import pytest
from playwright.sync_api import Page, expect


BASE_URL = os.getenv("BASE_URL", "http://localhost:8081")
SME_CONTACT = os.getenv("SME_CONTACT", "7972542628")
SME_PASSWORD = os.getenv("SME_PASSWORD", "12345")
SME_ROLE = os.getenv("SME_ROLE", "SME")

def slow_down(page: Page):
    page.wait_for_timeout(1500)


def choose_radix_option(page: Page, field_label: str, option_text: str) -> None:
    """Choose one of the three Radix dropdowns on Question Setup."""
    field_order = {"Question Type": 0, "Skill Level": 1, "Status": 2}
    page.get_by_role("combobox").nth(field_order[field_label]).click()
    page.get_by_role("option", name=option_text, exact=True).click()


def test_sme_login_and_select_question(page: Page) -> None:
    """Login as SME, reach Question Setup, select one question, and stop."""
    page.set_default_timeout(20000)

    # 1. Login
    # page.goto(f"{BASE_URL}/models/membership/Login")
    # expect(page.get_by_role("heading", name="Login")).to_be_visible()
    # page.locator("#username").fill(SME_CONTACT)
    # page.get_by_text("Select your role").click()
    # page.get_by_role("option", name=SME_ROLE, exact=True).click()
    # page.locator("#password").fill(SME_PASSWORD)
    # page.get_by_role("button", name="Login", exact=True).click()

    # page.wait_for_url("**/models/membership/dashboard", timeout=25000)
    # expect(page.get_by_text("SME Dashboard", exact=True)).to_be_visible()


# 1. Login
    page.goto(f"{BASE_URL}/models/membership/Login")
    slow_down(page)

    expect(page.get_by_role("heading", name="Login")).to_be_visible()

    page.locator("#username").fill(SME_CONTACT)
    slow_down(page)

    page.get_by_text("Select your role").click()
    slow_down(page)

    page.get_by_role("option", name=SME_ROLE, exact=True).click()
    slow_down(page)

    page.locator("#password").fill(SME_PASSWORD)
    slow_down(page)

    page.get_by_role("button", name="Login", exact=True).click()
    slow_down(page)

    # 2. Open Tests Created and start a test draft
    page.get_by_text("Tests Created", exact=True).click()
    expect(page.get_by_role("heading", name="Tests Created")).to_be_visible()
    page.get_by_role("button", name="+ Create Test").click()
    expect(page.get_by_role("heading", name="Create New Test")).to_be_visible()

    test_title = "Playwright SME Test " + datetime.now().strftime("%Y%m%d_%H%M%S")
    page.get_by_placeholder("Enter test name").fill(test_title)
    page.locator('select[name="difficultyLevel"]').select_option("BEGINNER")
    page.get_by_placeholder("Enter description").fill(
        "Temporary test details entered by Playwright automation. Not submitted."
    )
    page.get_by_placeholder("Enter duration").fill("30")
    page.get_by_role("button", name="Create New Test").click()

    # 3. Filter existing questions
    expect(page.get_by_role("heading", name="Question Setup")).to_be_visible()
    choose_radix_option(page, "Question Type", "MCQ")
    choose_radix_option(page, "Skill Level", "Beginner")
    choose_radix_option(page, "Status", "Approved")

    # 4. Display questions and wait for the API-backed list
    page.get_by_role("button", name="Select Questions").click()
    checkboxes = page.locator('input[type="checkbox"]')
    try:
        expect(checkboxes.first).to_be_visible(timeout=35000)
    except AssertionError:
        visible_error = page.locator("p.text-red-500").all_text_contents()
        detail = " | ".join(visible_error) if visible_error else "No checkbox appeared."
        pytest.fail(
            "Questions did not load for MCQ + Beginner + Approved. "
            f"Visible page error: {detail}"
        )

    # 5. Select one question only. Do NOT click the final Create Test button.
    checkboxes.first.check()
    expect(checkboxes.first).to_be_checked()
    print("SUCCESS: SME login completed; Question Setup opened; one question selected.")
    print("STOPPED BEFORE FINAL 'Create Test' BUTTON. No test was submitted.")
