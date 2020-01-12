using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using IdentityServer4.EntityFramework.Options;
using Microsoft.AspNetCore.ApiAuthorization.IdentityServer;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Options;
using hugo.Models;

namespace hugo.Data
{
    public class HugogoContext : ApiAuthorizationDbContext<User>
    {
        public HugogoContext (DbContextOptions<HugogoContext> options,
            IOptions<OperationalStoreOptions> operationalStoreOptions) : base(options, operationalStoreOptions)
        {
        }

        public DbSet<hugo.Models.Programme> Programme { get; set; }
        public DbSet<hugo.Models.Article> Article { get; set; }
        public DbSet<hugo.Models.User> User { get; set; }
        public DbSet<hugo.Models.Image> Image { get; set; }
    }
}
