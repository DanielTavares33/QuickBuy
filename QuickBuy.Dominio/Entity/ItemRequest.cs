using System;
using System.Collections.Generic;
using System.Text;

namespace QuickBuy.Dominio.Entity
{
	public class ItemRequest
	{
		public int Id { get; set; }
		public int ProductId { get; set; }
		public int Quantity { get; set; }
	}
}
