namespace TFLInsurance.Models
{
    public class Agents
    {
        public long agent_id { get; set; }

        public long user_id { get; set; }

        public string agent_code { get; set; } = string.Empty;

        public string license_number { get; set; } = string.Empty;

        public DateTime? joining_date { get; set; }

        public string status { get; set; } = "Active";

        public DateTime created_at { get; set; }
    }
}