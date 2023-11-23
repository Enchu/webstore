using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.AspNetCore.Mvc;
using ShopAPI.Dtos.Requests;
using ShopAPI.Entities;
using ShopAPI.Helpers;
using ShopAPI.Repositories.Interface;

namespace ShopAPI.Controllers;

[Route("api")]
[ApiController]
public class AuthentificateController: Controller
{
    private readonly IUserRepository _userRepository;
    private readonly JwtService _jwtService;

    public AuthentificateController(IUserRepository userRepository, JwtService jwtService)
    {
        _userRepository = userRepository;
        _jwtService = jwtService;
    }

    [HttpPost("register")]
    public IActionResult Register(UserRegistrationRequest dto)
    {
        var check = _userRepository.GetByEmail(dto.Email);
        if (check != null)
        {
            return BadRequest(new { message = "A user with the same email already exists" });
        }
        
        var user = new User
        {
            Username = dto.Name,
            Email = dto.Email,
            Password = BCrypt.Net.BCrypt.HashPassword(dto.Password)
        };

        return Created("success", _userRepository.Create(user));
    }
    
    [HttpPost("login")]
    public IActionResult Login(UserLoginRequest dto)
    {
        var user = _userRepository.GetByEmail(dto.Email);

        if (user == null)
        {
            return BadRequest(new { message = "Invalid Credentials" });
        }

        if (!BCrypt.Net.BCrypt.Verify(dto.Password, user.Password))
        {
            return BadRequest(new { message = "Invalid Credentials" });
        }

        var jwt = _jwtService.Generate(user.Id);
        
        Response.Cookies.Append("jwt", jwt, new CookieOptions
        {
            HttpOnly = true
        });

        return Ok(new
        {
            message = "success",
            token = jwt,
            user = dto.Email
        });
    }

    [HttpGet("user")]
    public IActionResult User()
    {
        try
        {
            string jwt = Request.Cookies["jwt"];

            var token = _jwtService.Verify(jwt);

            var userId = new Guid(token.Issuer);

            var user = _userRepository.GetById(userId);

            return Ok(user);
        }
        catch (Exception ex)
        {
            return Unauthorized();
        }
    }

    [HttpPost("logout")]
    public IActionResult Logout()
    {
        Response.Cookies.Delete("jwt");
        
        return Ok(new
        {
            message = "success"
        });
    }
    
}