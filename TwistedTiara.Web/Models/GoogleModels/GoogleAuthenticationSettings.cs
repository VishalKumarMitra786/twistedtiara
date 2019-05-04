using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TwistedTiara.Web.Models.GoogleModels
{
    public class GoogleAuthenticationSettings
    {
        public string SuperAdminEmailId { get; set; }
        public string ClientId { get; set; }
        public string ClientSecretKey { get; set; }
    }
}
