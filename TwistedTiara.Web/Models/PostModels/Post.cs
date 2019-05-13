using System.ComponentModel.DataAnnotations.Schema;

namespace TwistedTiara.Web.Models.PostModels
{
    public class Post : ModelBase
    {
        public string Title { get; set; }
        public string Content { get; set; }
        public string UserId { get; set; }
        public bool IsInReview { get; set; }
        [ForeignKey("UserId")]
        public virtual ApplicationUser Author { get; set; }
    }
}
