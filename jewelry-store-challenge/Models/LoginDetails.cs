using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using jewelry_store_challenge.Data;

namespace jewelry_store_challenge.Models
{
    public class LoginDetails
    {
        public User user { get; set; }
        public bool IsLoggedIn { get; set; }

    }
}
