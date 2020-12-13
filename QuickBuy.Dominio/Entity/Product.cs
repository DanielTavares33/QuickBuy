using System;
using System.Collections.Generic;
using System.Text;

namespace QuickBuy.Dominio.Entity
{
	public class Product : Entity
	{
		public int Id { get; set; }
		public string Name { get; set; }
		public string Description { get; set; }
		public decimal Price { get; set; }

		public string FileName { get; set; }

		public override void Validate()
		{
			if (string.IsNullOrEmpty(Name))
			{
				AddValidationMessages("Product name was not informed");
			}

			if (string.IsNullOrEmpty(Description))
			{
				AddValidationMessages("Description was not informed");
			}
		}
	}
}
