using System;
using System.Collections.Generic;
using System.Text;

namespace QuickBuy.Dominio.Entity
{
	public class Request
	{
		public int Id { get; set; }
		public DateTime RequestDate { get; set; }
		public int UserId { get; set; }

		/// <summary>
		/// Request can have one or multiple requests.
		/// </summary>
		public ICollection<ItemRequest> ItemsRequest { get; set; }
	}
}
