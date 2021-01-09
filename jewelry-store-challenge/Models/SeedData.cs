using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using jewelry_store_challenge.Data;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;

namespace jewelry_store_challenge.Models
{
    public static class SeedData
    {
        public static void Initialize(IServiceProvider serviceProvider)
        {
            using (var context = new JewelryStoreContext(serviceProvider.GetRequiredService<DbContextOptions<JewelryStoreContext>>()))
            {
                if (context.User.Any())
                {
                    return;
                }

                context.User.AddRange(
                    new User
                    {
                        //Id = 1,
                        FirstName = "Arunkumar",
                        LastName = "B",
                        UserName = "User1",
                        Password = "password1",
                        IsPrevilaged = true

                    },
                    new User
                    {

                        //Id = 2,
                        FirstName = "Kiran",
                        LastName = "B",
                        UserName = "User2",
                        Password = "password2",
                        IsPrevilaged = false
                    }

                    );

                context.SaveChanges();
            }
        }
    }
}
