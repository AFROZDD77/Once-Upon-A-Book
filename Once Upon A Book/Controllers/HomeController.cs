using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Once_Upon_A_Book.Models;
//using Once_Upon_A_Book.Repository;
using System.Diagnostics;

namespace Once_Upon_A_Book.Controllers
{
    [Route("api/[controller]")]
    public class HomeController : Controller
    {

        private readonly ILogger<HomeController> _logger;
        //private readonly UserRepo _userRepo;
        private readonly UserDbContext _userDbContext;

        public HomeController(ILogger<HomeController> logger, UserDbContext userDbContext)
        {
            _logger = logger;
            //_userRepo = userRepo;
            _userDbContext = userDbContext;
        }

        [HttpGet]
        [Route("[action]")]
        public IActionResult Index()
        {
            return View();
        }

        [HttpGet]
        [Route("[action]")]
        public IActionResult Privacy()
        {
            return View();
        }

        [HttpGet]
        [Route("getPP")]
        public IActionResult GetPP()
        {
            return Ok(true);
        }

        [HttpPost]
        [Route("saveUser")]
        public async Task<IActionResult> SaveUser([FromBody] UserModal userModal)
        {
            if (userModal == null) 
            {
                return BadRequest();
            } else
            {
                try
                {
                    _userDbContext.Users.Add(userModal);
                    var result = await _userDbContext.SaveChangesAsync();
                    return Ok(result > 0);
                }
                catch (Exception ex) {
                    throw ex;
                }
            }
        }


        [HttpGet]
        [Route("getCredentails")]
        public async Task<IActionResult> GetCredentials()
        {
            try
            {
                var credentials = await _userDbContext.Users.Select(x => new { x.Email, x.Username }).ToListAsync();
                return Ok(credentials);
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        [HttpGet]
        [Route("getAllUsers")]
        public async Task<IActionResult> GetAllUsers()
        {
            var users = await _userDbContext.Users.ToListAsync();
            return Ok(users);
        }

        [HttpGet]
        [Route("[action]")]
        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
