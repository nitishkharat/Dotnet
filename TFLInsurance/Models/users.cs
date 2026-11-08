
namespace TFLInsurance.Models
{
    public class Users
    {
        public long userId { get; set; }

        public string username { get; set; }

        public string email { get; set; }

        public string password_hash { get; set; }

        public string status { get; set; } = "Active";

        public DateTime created_at { get; set; }

        public DateTime? updated_at { get; set; }
    }
}
