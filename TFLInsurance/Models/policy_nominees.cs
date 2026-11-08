
namespace TFLInsurance.Models
{
    public class Policy_nominees
    {
        public long PolicyNomineeId { get; set; }

        public long PolicyId { get; set; }

        public string Name { get; set; }

        public string? Relationship { get; set; }

        public DateTime? DateOfBirth { get; set; }

        public decimal? PercentageShare { get; set; }

        public string? Phone { get; set; }

        public string? Address { get; set; }

        public string Status { get; set; } = "Active";
    }
}