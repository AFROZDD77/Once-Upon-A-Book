using Microsoft.EntityFrameworkCore;

namespace Once_Upon_A_Book.Models
{
    public class UserDbContext : DbContext
    {
        public UserDbContext(DbContextOptions<UserDbContext> options): base(options) { }

        public DbSet<UserModal> Users {  get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<UserModal>().OwnsOne(p => p.SecurityQuestions, b => b.ToJson());

            base.OnModelCreating(modelBuilder);
        }

    }
}
