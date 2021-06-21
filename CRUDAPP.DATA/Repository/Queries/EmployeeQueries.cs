using CRUDAPP.ENTITIES.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using CRUDAPP.DATA.Gateway;
using Microsoft.EntityFrameworkCore;

namespace CRUDAPP.DATA.Repository.Queries
{
    public class EmployeeQueries : IEmployeeQueries
    {
        private readonly AppDbContext _context;

        public EmployeeQueries(AppDbContext context)
        {
            _context = context;
        }



        public async Task<EmployeeModel> GetById(long? id)
        {
            try
            {
                return await _context.EmployeeEntity.FindAsync(id);
            }
            catch (Exception exc)
            {
                throw exc;
            }
        }

        public async Task<IEnumerable<EmployeeModel>> GetEmployeeList()
        {
            try
            {
               return  await _context.EmployeeEntity.ToListAsync();
            }
            catch (Exception exc)
            {
                throw exc;
            }
        }
    }
}
