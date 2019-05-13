using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TwistedTiara.Web.Models
{
    public class ModelBaseAc
    {
        public Guid Id { get; set; }
        public DateTime CreatedAt { get; set; }
        public DateTime UpdatedAt { get; set; }
        public DateTime DeletedAt { get; set; }
        public bool IsDeleted { get; set; }
        public bool IsActive { get; set; }
    }
}
