using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using CRUDAPP.DATA.Repository.Command;
using CRUDAPP.DATA.Repository.Queries;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

namespace CRUDAPP.API.Extension
{
    public static class ServiceCollectionExtensions
    {
        public static IServiceCollection AddServices(this IServiceCollection services, IConfiguration configuration)
        {

            services.AddScoped<IEmployeeCommand, EmployeeCommand>();
            services.AddScoped<IEmployeeQueries, EmployeeQueries>();

            return services;
        }
    }
}
