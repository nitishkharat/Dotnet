namespace TFLInsurance.Models
{
    public class Policy
    {
        public long policy_id { get; set; }

        public string policy_number { get; set; } = string.Empty;

        public long proposal_id { get; set; }

        public long customer_id { get; set; }

        public long product_id { get; set; }

        public long? agent_id { get; set; }

        public decimal sum_assured { get; set; }

        public decimal premium_amount { get; set; }

        public string premium_frequency { get; set; } = string.Empty;

        public DateTime start_date { get; set; }

        public DateTime maturity_date { get; set; }

        public string status { get; set; } = "Issued";

        public DateTime issued_at { get; set; }

        public DateTime created_at { get; set; }

        public DateTime? updated_at { get; set; }
    }
}