using Microsoft.AspNetCore.Mvc;
using QuickBuy.Dominio.Entity;
using System;

namespace QuickBuy.Web.Controllers
{
	[Route("api/[Controller]")]
	public class UserController : Controller
	{
		[HttpPost]
		public ActionResult Post()
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
				if (user.Email == "dantavper@hotmail.com" && user.Password == "123")
				{
					return Ok(user);
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
