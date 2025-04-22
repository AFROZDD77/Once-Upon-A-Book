using System.ComponentModel.DataAnnotations;

namespace Once_Upon_A_Book.Models
{
    public class UserFavoritesModal
    {
        [Key]
        public int UserId { get; set; }
        public List<int> FavoriteGenres { get; set; } = new List<int>();
        public List<string> FavoriteBooks { get; set; } = new List<string>();
        public List<string> FavoriteAuthors { get; set; } = new List<string>();
    }
}
