namespace BankApplication.Models
{
    public class BankAccount
    {
        public int AccountNumber { get; set; }

        public string? CustomerName { get; set; }

        public decimal Balance { get; set; }
    }
}