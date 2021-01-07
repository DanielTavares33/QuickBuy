using QuickBuy.Dominio.ObjectValue;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace QuickBuy.Dominio.Entity
{
	public class Request : Entity
	{
		public int Id { get; set; }
		public DateTime RequestDate { get; set; }
		public int UserId { get; set; }
		public virtual User User { get; set; }
		public  DateTime DeliveryDateForecast { get; set; }
		public string PostalCode { get; set; }
		public string City { get; set; }
		public string District { get; set; }
		public string Address { get; set; }
		public int AddressNumber { get; set; }

		public int PaymentMethodId { get; set; }
		public virtual PaymentMethod PaymentMethod { get; set; }

		/// <summary>
		/// Request can have one or multiple items.
		/// </summary>
		public virtual ICollection<ItemRequest> ItemsRequest { get; set; }

		public override void Validate()
		{
			ClearValidationMessages();

			if (!ItemsRequest.Any())
				AddValidationMessages("Crítica - Pedido não pode ficar sem item de pedido");

			if (string.IsNullOrEmpty(PostalCode))
				AddValidationMessages("Crítica - Código Postal tem que estar preenchido");

			if (PaymentMethodId == 0)
				AddValidationMessages("Crítica - A forma de pagamento não foi informada");
		}
	}
}
