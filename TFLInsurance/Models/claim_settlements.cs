namespace TFLInsurance.Models
{
    public class Claim_settlements
    {
        public long SettlementId { get; set; }

        public long ClaimId { get; set; }

        public decimal ApprovedAmount { get; set; }

        public decimal SettlementAmount { get; set; }

        public string? PaymentReference { get; set; }

        public DateTime? SettlementDate { get; set; }

        public string Status { get; set; } = "Pending";

        public long? ProcessedBy { get; set; }
    }
}
