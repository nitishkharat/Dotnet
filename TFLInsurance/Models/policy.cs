
namespace TFLInsurance.Models
{
    public class Policy
    {
        public long PolicyId { get; set; }

        public string PolicyNumber { get; set; }

        public long ProposalId { get; set; }

        public long CustomerId { get; set; }

        public long ProductId { get; set; }

        public long? AgentId { get; set; }

        public decimal SumAssured { get; set; }

        public decimal PremiumAmount { get; set; }

        public string PremiumFrequency { get; set; }

        public DateTime StartDate { get; set; }

        public DateTime MaturityDate { get; set; }

        public string Status { get; set; } = "Issued";

        public DateTime IssuedAt { get; set; }

        public DateTime CreatedAt { get; set; }

        public DateTime? UpdatedAt { get; set; }
    }
}