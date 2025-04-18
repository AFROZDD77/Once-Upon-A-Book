
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Once_Upon_A_Book.Models
{
    public class UserModal
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }
        [Required]
        public string Username { get; set; } = string.Empty;
        [Required]
        public string Email { get; set; } = string.Empty;
        [Required]
        public string Password { get; set; } = string.Empty;

        public bool EmailConfirmed { get; set; } = false;

        public SecurityQuestionsModal SecurityQuestions { get; set; } = null!;
    }
}
