using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using CRUDAPP.DATA.Repository.Command;
using CRUDAPP.DATA.Repository.Queries;
using CRUDAPP.ENTITIES.Models;

namespace CRUDAPP.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EmployeeController : ControllerBase
    {
        private readonly IEmployeeQueries _queries;
        private readonly IEmployeeCommand _command;

        public EmployeeController(IEmployeeQueries queries, IEmployeeCommand command)
        {
            _queries = queries;
            _command = command;
        }



        [HttpGet]
        public async Task<IEnumerable<EmployeeModel>> EmployeeList()
        {
            return await _queries.GetEmployeeList();
        }



        [HttpGet]
        [Route("GetById")]
        public async Task<IActionResult> GetById(long? id)
        {
            if (id == null)
            {
                return NotFound();
            }
            EmployeeModel employee = await _queries.GetById(id);
            if (employee == null)
            {
                return NotFound();
            }
            return Ok(employee);
        }

        [HttpPost]
        public async Task<ActionResult> Create(EmployeeModel employee)
        {
            _command.Insert(employee);
            if (await _command.Commit())
            {
                return CreatedAtAction("EmployeeList", new { id = employee.SysId }, employee);
            }
            return StatusCode(StatusCodes.Status500InternalServerError, "Something Went Wrong");

        }


        [HttpPut("{id}")]
        public async Task<ActionResult> Edit(int id, EmployeeModel employee)
        {
            employee.SysId = id;
            _command.Update(employee);
            if (await _command.Commit())
            {
                return CreatedAtAction("EmployeeList", new { id = employee.SysId }, employee);
            }
            return StatusCode(StatusCodes.Status500InternalServerError, "Something Went Wrong");
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult> Delete(int id)
        {
            var employee = await _queries.GetById(id);
            if (employee == null)
            {
                return NotFound();
            }
            _command.Delete(employee);
            await _command.Commit();
            return Ok();
        }








    }
}
