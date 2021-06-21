using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using CRUDAPP.ENTITIES.Models;
using Microsoft.EntityFrameworkCore;

namespace CRUDAPP.DATA.Gateway
{
    public class AppDbContext:DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext>options):base(options)
        {
            
        }
        
        public DbSet<EmployeeModel> EmployeeEntity { get; set; }


        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
            modelBuilder.Entity<EmployeeModel>().ToTable("tb_Employee");
        }

    }
}
