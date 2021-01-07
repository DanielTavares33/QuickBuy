using Microsoft.AspNetCore.Mvc;
using QuickBuy.Dominio.Contracts;
using QuickBuy.Dominio.Entity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace QuickBuy.Web.Controllers
{
	[Route("api/[Controller]")]
	public class RequestController : Controller
	{
		private readonly IRequestRepository _requestRepository;

		public RequestController(IRequestRepository requestRepository)
		{
			this._requestRepository = requestRepository;
		}

		[HttpPost]
		public IActionResult Post([FromBody] Request request)
		{
			try
			{
				_requestRepository.Add(request);

				return Ok(request.Id);
			}
			catch (Exception ex)
			{
				return BadRequest(ex.ToString());
			}
		}
	}
}
