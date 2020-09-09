using System;
using System.Collections.Generic;
using System.Text;

namespace QuickBuy.Dominio.Entity
{
	public class ItemRequest : Entity
	{
		public int Id { get; set; }
		public int ProductId { get; set; }
		public int Quantity { get; set; }

		public override void Validate()
		{
			throw new NotImplementedException();
		}
	}
}
