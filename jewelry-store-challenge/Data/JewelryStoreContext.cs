using jewelry_store_challenge.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace jewelry_store_challenge.Data
{
    public class JewelryStoreContext : DbContext
    {
        public JewelryStoreContext(DbContextOptions<JewelryStoreContext> options) : base(options)
        {

        }

        public DbSet<User> User{get;set;}

    }
}
