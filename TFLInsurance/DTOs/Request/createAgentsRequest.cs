namespace TFLInsurance.DTOs.Request
{
    public class CreateAgentRequest
    {
        public long user_id { get; set; }

        public string agent_code { get; set; } = string.Empty;

        public string license_number { get; set; } = string.Empty;

        public DateTime? joining_date { get; set; }
    }
}