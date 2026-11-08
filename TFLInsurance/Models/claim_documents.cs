
namespace TFLInsurance.Models
{
    public class Claim_documents
    {
        public long ClaimDocumentId { get; set; }

        public long ClaimId { get; set; }

        public long  DocumentType { get; set; }

        public string FileName { get; set; }

        public string FileUrl { get; set; }

        public string VerificationStatus { get; set; } = "Pending";

        public DateTime UploadedAt { get; set; }

        public DateTime? VerifiedAt { get; set; }
    }
}
