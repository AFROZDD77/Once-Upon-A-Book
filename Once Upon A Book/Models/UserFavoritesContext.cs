using Microsoft.EntityFrameworkCore;

namespace Once_Upon_A_Book.Models
{
    public class UserFavoritesDbContext : DbContext
    {
        public UserFavoritesDbContext(DbContextOptions<UserFavoritesDbContext> options) : base(options) { }
        public DbSet<UserFavoritesModal> UserFavorites { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
        }
    }
}
