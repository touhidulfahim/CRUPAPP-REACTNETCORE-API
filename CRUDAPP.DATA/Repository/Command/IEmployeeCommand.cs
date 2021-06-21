using CRUDAPP.ENTITIES.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CRUDAPP.DATA.Repository.Command
{
    public interface IEmployeeCommand
    {
        void Insert(EmployeeModel employee);
        void Update(EmployeeModel employee);
        void Delete(EmployeeModel employee);
        Task<bool> Commit();
    }
}
