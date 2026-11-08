namespace TFLInsurance.DTOs.Request
{
    public class UpdateAgentRequest
    {
        public string agent_code { get; set; } = string.Empty;

        public string license_number { get; set; } = string.Empty;

        public DateTime? joining_date { get; set; }

        public string status { get; set; } = "Active";
    }
}