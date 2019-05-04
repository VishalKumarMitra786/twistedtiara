using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TwistedTiara.Web.Models.Globals
{
    public class Constants
    {
        public const string superAdmin = "SuperAdmin";
        public const string admin = "Admin";
        public const string moderator = "Moderator";
        public const string member = "Member";

        public static readonly string[] Roles = { superAdmin, admin, moderator, member };
    }
}
