using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using Once_Upon_A_Book.Models;
//using Once_Upon_A_Book.Repository;
using System.Diagnostics;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace Once_Upon_A_Book.Controllers
{
    [Route("api/[controller]")]
    public class HomeController : Controller
    {

        private readonly ILogger<HomeController> _logger;
        //private readonly UserRepo _userRepo;
        private readonly UserDbContext _userDbContext;
        private readonly GenreDbContext _genreDbContext;
        private readonly IConfiguration _configuration;

        public HomeController(ILogger<HomeController> logger, UserDbContext userDbContext, IConfiguration configuration, GenreDbContext genreDbContext)
        {
            _logger = logger;
            //_userRepo = userRepo;
            _userDbContext = userDbContext;
            _configuration = configuration;
            _genreDbContext = genreDbContext;
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
        [Route("login")]
        public async Task<IActionResult> loginUser([FromBody] UserCredentialsModel userModel)
        {
            if (userModel.Username == null || userModel.Password == null)
            {
                return BadRequest();
            }

            var user = _userDbContext.Users.FirstOrDefaultAsync(u => u.Username == userModel.Username);

            if (user.Result == null)
            {
                return BadRequest(user);
            }
            else if (user.Result.Password != userModel.Password)
            {
                return BadRequest(user.Result.Password);
            }
            else
            {
                var token = GenerateJwtToken(user.Result.Username);
                return Ok(new { token });
            }
        }

        private string GenerateJwtToken(string username)
        {
            var claims = new[]
            {
            new Claim(JwtRegisteredClaimNames.Sub, username),
            new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString())
        };

            var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_configuration.GetValue<string>("JwtTokenSecret")));
            var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);

            var token = new JwtSecurityToken(
                issuer: "http://localhost:4200",
                audience: "http://localhost:4200",
                claims: claims,
                expires: DateTime.Now.AddMinutes(30),
                signingCredentials: creds);

            return new JwtSecurityTokenHandler().WriteToken(token);
        }

        [HttpPost]
        [Route("saveUser")]
        public async Task<IActionResult> SaveUser([FromBody] UserModal userModal)
        {
            if (userModal == null)
            {
                return BadRequest();
            }
            else
            {
                try
                {
                    _userDbContext.Users.Add(userModal);
                    var result = await _userDbContext.SaveChangesAsync();
                    return Ok(result > 0);
                }
                catch (Exception ex)
                {
                    throw ex;
                }
            }
        }

        [Authorize()]
        [HttpGet]
        [Route("testJWT")]
        public IActionResult TestJwt()
        {
            return Ok(true);
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

        [HttpPost]
        [Route("insertGenre")]
        public async Task<IActionResult> insertGenre([FromBody] string genre)
        {
            var genreModal = new GenreModal()
            {
                Genre = genre
            };
            try
            {
                _genreDbContext.Genres.Add(genreModal);
                var result = await _genreDbContext.SaveChangesAsync();
                return Ok(result > 0);
            }
            catch (Exception ex)
            {
                throw ex;
            }

        }

        [HttpGet]
        [Route("getGenres")]
        public async Task<IActionResult> getGenres()
        {
            try
            {
                var result = await _genreDbContext.Genres.ToListAsync();
                return Ok(result);

            }
            catch (Exception ex) { throw ex; }
        }

        //[HttpPost]
        //[Route("saveFavoriteGenres")]
        //public async Task<IActionResult> saveFavoriteGenres([FromBody] List<int> favGenres)
        //{

        //}
    }
}
