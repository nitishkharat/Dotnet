
namespace TFLInsurance.Models
{
    public class Proposal
    {
        public long ProposalId { get; set; }

        public string ProposalNumber { get; set; }

        public long CustomerId { get; set; }

        public long? AgentId { get; set; }

        public long ProductId { get; set; }

        public decimal SumAssured { get; set; }

        public int PolicyTerm { get; set; }

        public decimal PremiumAmount { get; set; }

        public string PremiumFrequency { get; set; }

        public string Status { get; set; } = "Draft";

        public DateTime CreatedAt { get; set; }

        public DateTime? SubmittedAt { get; set; }

        public DateTime? ApprovedAt { get; set; }

        public DateTime? RejectedAt { get; set; }
    }
}
