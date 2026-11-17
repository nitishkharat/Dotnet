
namespace TFLInsurance.DTOs.Request
{
    public class UpdatePolicyRequest
    {
        public string PolicyNumber { get; set; } = string.Empty;

        public long ProposalId { get; set; }

        public long CustomerId { get; set; }

        public long ProductId { get; set; }

        public long? AgentId { get; set; }

        public decimal SumAssured { get; set; }

        public decimal PremiumAmount { get; set; }

        public string? PremiumFrequency { get; set; }

        public DateTime StartDate { get; set; }

        public DateTime MaturityDate { get; set; }

        public string Status { get; set; } = "Issued";
    }
}
