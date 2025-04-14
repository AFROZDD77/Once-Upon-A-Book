//using Microsoft.EntityFrameworkCore;
//using Once_Upon_A_Book.Models;

//namespace Once_Upon_A_Book.Repository
//{
//    public partial class UserRepo
//    {
//        private readonly UserDbContext _userDbContext;
//        public UserRepo(UserDbContext userDbContext)
//        {
//            _userDbContext = userDbContext;
//        }

//        public async Task<IEnumerable<UserModal>> GetAllUsers()
//        {
//            return await _userDbContext.Users.ToListAsync();
//        }

//        public async Task<bool> saveUser(UserModal userModal)
//        {
//            _userDbContext.Add(userModal);
//            var result = await _userDbContext.SaveChangesAsync();
//            return result > 0;
//        }
//    }
//}   
