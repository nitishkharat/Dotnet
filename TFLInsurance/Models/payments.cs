
namespace TFLInsurance.Models
{
    public class Payments
    {
        public long PaymentId { get; set; }

        public long PremiumId { get; set; }

        public long PolicyId { get; set; }

        public string TransactionReference { get; set; }

        public string? IdempotencyKey { get; set; }

        public decimal Amount { get; set; }

        public string? PaymentMethod { get; set; }

        public DateTime? PaymentDate { get; set; }

        public string Status { get; set; } = "Initiated";

        public string? GatewayResponse { get; set; }

        public DateTime CreatedAt { get; set; }
    }
}