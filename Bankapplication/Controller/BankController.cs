using BankApplication.Services;
using Microsoft.AspNetCore.Mvc;

namespace BankApplication.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class BankController : ControllerBase
    {
                private readonly IBankService _bankService;

        public BankController(IBankService bankService)
        {
            _bankService = bankService;
        }

        [HttpPost("withdraw")]
        public IActionResult Withdraw(decimal amount)
        {
            string result = _bankService.Withdraw(amount);

            return Ok(result);
        }

        [HttpGet("balance")]
        public IActionResult Balance()
        {
            decimal balance = _bankService.GetBalance();

            return Ok(balance);
        }
    }
}