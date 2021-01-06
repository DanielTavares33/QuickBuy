using Microsoft.AspNetCore.Mvc;
using QuickBuy.Dominio.Contracts;
using QuickBuy.Dominio.Entity;
using System;

namespace QuickBuy.Web.Controllers
{
	[Route("api/[Controller]")]
	public class UserController : Controller
	{
		private readonly IUserRepository _userRepository;

		public UserController(IUserRepository userRepository)
		{
			_userRepository = userRepository;
		}

		[HttpPost]
		public ActionResult Post([FromBody] User user)
		{
			try
			{
				var registeredUser = _userRepository.Get(user.Email);

				if (registeredUser != null)
				{
					return BadRequest("User already exists");
				}

				//user.IsAdmin = true;
				_userRepository.Add(user);
				return Ok();

			}
			catch (Exception ex)
			{
				return BadRequest(ex.ToString());
			}
		}

		[HttpGet]
		public ActionResult Get()
		{
			try
			{
				return Ok();
			}
			catch (Exception ex)
			{
				return BadRequest(ex.ToString());
			}
		}

		[HttpPost("VerifyUser")]
		public ActionResult VerifyUser([FromBody] User user)
		{
			try
			{
				var userReturn = _userRepository.Get(user.Email, user.Password);

				if (userReturn != null)
				{
					return Ok(userReturn);
				}
				return BadRequest("User or password is not valid");
			}
			catch (Exception ex)
			{
				return BadRequest(ex.ToString());
			}
		}
	}
}
