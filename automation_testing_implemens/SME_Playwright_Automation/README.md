# SME Browser Automation - Python + Playwright

This automation covers the SME flow up to selecting an existing question:

1. Open the React frontend and login as SME.
2. Open SME Dashboard -> Tests Created -> Create Test.
3. Enter test details and open Question Setup.
4. Select MCQ + Beginner + Approved.
5. Click Select Questions and select the first matching question.
6. Stop before clicking the final **Create Test** button.

**The final Create Test button is not clicked. The test is not submitted to the backend.**
The test details are entered as a draft to reach Question Setup.

## Requirements

- Frontend running at `http://localhost:8081`
- Node.js backend running (login uses the Node API)
- .NET backend running (questions are loaded from the .NET API)
- MySQL running and reachable by the .NET backend
- A valid SME account
- At least one question for that SME matching MCQ + BEGINNER + APPROVED

## Install (Windows PowerShell)

Open PowerShell in this folder and run:

```powershell
py -m venv .venv
py -m pip install -r requirements.txt
py -m playwright install chromium
```

## Run with browser visible

```powershell
py -m pytest -v --headed
```

## If credentials differ

```powershell
$env:SME_CONTACT="your-sme-contact"
$env:SME_PASSWORD="your-sme-password"
$env:SME_ROLE="SME"
py -m pytest -v --headed
```

## If frontend URL differs

```powershell
$env:BASE_URL="http://localhost:8081"
py -m pytest -v --headed
```

A successful run prints that one question was selected and that it stopped before the final Create Test button. If it fails, share the full pytest output.
