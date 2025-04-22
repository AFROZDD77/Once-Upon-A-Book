using Microsoft.EntityFrameworkCore;

namespace Once_Upon_A_Book.Models
{
    public class GenreDbContext : DbContext
    {
        public DbSet<GenreModal> Genres { get; set; }
        public GenreDbContext(DbContextOptions<GenreDbContext> dbContext) : base(dbContext) { }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
        }
    }
}
