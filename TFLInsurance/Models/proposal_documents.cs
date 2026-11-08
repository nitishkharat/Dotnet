
namespace TFLInsurance.Models
{
    public class Proposal_document
    {
        public long ProposalDocumentId { get; set; }

        public long ProposalId { get; set; }

        public string DocumentType { get; set; }

        public string FileName { get; set; }

        public string FileUrl { get; set; }

        public string VerificationStatus { get; set; } = "Pending";

        public DateTime UploadedAt { get; set; }

        public DateTime? VerifiedAt { get; set; }
    }
}
