namespace TFLInsurance.Models
{
    public class AuditLog
    {
        public long AuditLogId { get; set; }

        public long? UserId { get; set; }

        public string EntityName { get; set; }

        public long EntityId { get; set; }

        public string Action { get; set; }

        public string? OldValue { get; set; }

        public string? NewValue { get; set; }

        public string? IpAddress { get; set; }

        public DateTime CreatedAt { get; set; }
    }
}