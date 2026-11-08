
namespace TFLInsurance.Models
{
    public class Claim
    {
        public long ClaimId { get; set; }

        public string ClaimNumber { get; set; }

        public long PolicyId { get; set; }

        public long ClaimantId { get; set; }

        public string ClaimType { get; set; }

        public decimal? ClaimAmount { get; set; }

        public string Status { get; set; } = "Registered";

        public DateTime RaisedAt { get; set; }

        public DateTime? ApprovedAt { get; set; }

        public DateTime? RejectedAt { get; set; }

        public DateTime? SettledAt { get; set; }
    }
}
