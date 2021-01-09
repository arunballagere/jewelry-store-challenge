using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.DependencyInjection;
using jewelry_store_challenge.Models;

namespace jewelry_store_challenge
{
    public class Program
    {
        public static void Main(string[] args)
        {
          var host =  CreateHostBuilder(args).Build();

            using (var scope=host.Services.CreateScope())
            {
                var service = scope.ServiceProvider;

                try
                {
                    SeedData.Initialize(service);
                }
                catch (Exception)
                {
                    throw;
                }
            }

            host.Run();
        }
        
        public static IHostBuilder CreateHostBuilder(string[] args) =>
            Host.CreateDefaultBuilder(args)
                .ConfigureWebHostDefaults(webBuilder =>
                {
                    webBuilder.UseStartup<Startup>();
                });
    }
}
