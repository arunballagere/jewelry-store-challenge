using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using jewelry_store_challenge.Data;
using jewelry_store_challenge.Models;

namespace jewelry_store_challenge.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class LoginController : ControllerBase
    {
        private readonly JewelryStoreContext _context;

        public LoginController(JewelryStoreContext context)
        {
            _context = context;
        }

       
        [HttpPost]
        public LoginDetails post(User loginDetails)
        {
            LoginDetails loginDetails1 = new LoginDetails();

            var user = _context.User.Where(x => x.UserName.ToLower() == loginDetails.UserName && x.Password == loginDetails.Password).FirstOrDefault();
            if (user == null)
            {
                loginDetails1.IsLoggedIn = false;
            }
            else
            {
                loginDetails1.IsLoggedIn = true;
                loginDetails1.user = user;
            }

            return loginDetails1;
        }
    }
}
