
 namespace TFLInsurance.Models
{
    public class Notification
    {
        public long NotificationId { get; set; }

        public long UserId { get; set; }

        public string NotificationType { get; set; }

        public string? Subject { get; set; }

        public string Message { get; set; }

        public string Channel { get; set; }

        public string Status { get; set; } = "Pending";

        public DateTime CreatedAt { get; set; }

        public DateTime? SentAt { get; set; }
    }
}
