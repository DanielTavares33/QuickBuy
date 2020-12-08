using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using QuickBuy.Dominio.Contracts;
using QuickBuy.Dominio.Entity;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;

namespace QuickBuy.Web.Controllers
{
	[Route("api/[controller]")]
	public class ProductController : Controller
	{
		private readonly IProductRepository _productRepository;
		private IHttpContextAccessor _httpContextAccessor;
		private IHostingEnvironment _hostingEnvironment;

		public ProductController(IProductRepository productRepository, IHttpContextAccessor httpContextAccessor, IHostingEnvironment hostingEnvironment)
		{
			_productRepository = productRepository;
			_httpContextAccessor = httpContextAccessor;
			_hostingEnvironment = hostingEnvironment;
		}

		[HttpGet]
		public IActionResult Get()
		{
			try
			{
				return Ok(_productRepository.GetAll());
			}
			catch (Exception ex)
			{

				return BadRequest(ex.ToString());
			}
		}

		[HttpPost]
		public IActionResult Post([FromBody]Product product)
		{
			try
			{
				_productRepository.Add(product);

				return Created("api/product", product);
			}
			catch (Exception ex)
			{
				return BadRequest(ex.ToString());
			}
		}

		[HttpPost("SendFile")]
		public IActionResult SendFile()
		{
			try
			{
				var formFile = _httpContextAccessor.HttpContext.Request.Form.Files["sendFile"];
				var fileName = formFile.FileName;
				var extension = fileName.Split(".").Last();
				var arrayFileName = Path.GetFileNameWithoutExtension(fileName).Take(10).ToArray();
				var newFileName = new string(arrayFileName).Replace(" ", "-") + "." + extension;
				var filesFolder = _hostingEnvironment.WebRootPath + "\\files\\";
				var fullName = filesFolder + newFileName;

				using (var streamFile = new FileStream(fullName , FileMode.Create))
				{
					formFile.CopyTo(streamFile);
				}

				return Ok("File send with success");
			}
			catch (Exception ex)
			{
				return BadRequest(ex.ToString());
			}
		}

	}
}
