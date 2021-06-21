using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using CRUDAPP.ENTITIES.Models;

namespace CRUDAPP.DATA.Repository.Queries
{
    public interface IEmployeeQueries
    {
        Task<IEnumerable<EmployeeModel>> GetEmployeeList();
        Task<EmployeeModel> GetById(long? id);
    }
}
