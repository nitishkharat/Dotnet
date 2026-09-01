namespace BankApplication.Services
{
    public class BankService : IBankService
    {
        private decimal balance = 50000;

        public string Withdraw(decimal amount)
        {
            if (amount > balance)
            {
                return "Insufficient balance";
            }

            balance = balance - amount;

            return $"₹{amount} withdrawn successfully";
        }

        public decimal GetBalance()
        {
            return balance;
        }
    }
}