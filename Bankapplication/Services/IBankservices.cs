namespace BankApplication.Services
{
    public interface IBankService
    {
        string Withdraw(decimal amount);
        decimal GetBalance();
    }
}