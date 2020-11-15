using Microsoft.AspNetCore.Mvc;
using QuickBuy.Dominio.Entity;
using System;

namespace QuickBuy.Web.Controllers
{
	public class UserController : Controller
	{
		[HttpPost]
		public ActionResult Post()
		{
			try
			{

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
				if (user.Email == "danpertav@gmail.com" && user.Password == "123")
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
