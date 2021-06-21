using CRUDAPP.ENTITIES.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using CRUDAPP.DATA.Gateway;
using Microsoft.EntityFrameworkCore;

namespace CRUDAPP.DATA.Repository.Command
{
    public class EmployeeCommand : IEmployeeCommand
    {
        private readonly AppDbContext _context;

        public EmployeeCommand(AppDbContext context)
        {
            _context = context;
        }
        
        public async Task<bool> Commit()
        {
            try
            {
                await _context.SaveChangesAsync();
                return true;
            }
            catch (Exception exc)
            {
                throw exc;
            }
        }

        public void Delete(EmployeeModel employee)
        {
            try
            {
                _context.EmployeeEntity.Remove(employee);
            }
            catch (Exception exc)
            {
                throw exc;
            }
        }

        public void Insert(EmployeeModel employee)
        {
            try
            {
                _context.EmployeeEntity.Add(employee);
            }
            catch (Exception exc)
            {
                throw exc;
            }
        }

        public void Update(EmployeeModel employee)
        {
            try
            {
                _context.Entry(employee).State = EntityState.Modified;
            }
            catch (Exception exc)
            {
                throw exc;
            }
        }
    }
}
