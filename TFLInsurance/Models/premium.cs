
namespace TFLInsurance.Models
{
    public class Premium
    {
        public long PremiumId { get; set; }

        public long PolicyId { get; set; }

        public int InstallmentNumber { get; set; }

        public DateTime DueDate { get; set; }

        public decimal Amount { get; set; }

        public decimal PaidAmount { get; set; } = 0.00m;

        public DateTime? PaidDate { get; set; }

        public decimal LateFee { get; set; } = 0.00m;

        public string Status { get; set; } = "Due";
    }
}