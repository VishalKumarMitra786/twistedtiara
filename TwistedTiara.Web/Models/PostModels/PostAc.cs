using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TwistedTiara.Web.Models.PostModels
{
    public class PostAc : ModelBaseAc
    {
        public string Title { get; set; }
        public string Content { get; set; }
        public string UserId { get; set; }
        public bool IsInReview { get; set; }
        public ApplicationUser Author { get; set; }
    }
}
