using Form.Model;
using Microsoft.EntityFrameworkCore;

namespace Form.Data
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) :base(options) { }

        public DbSet<Student> Students { get; set; }

    }
}
