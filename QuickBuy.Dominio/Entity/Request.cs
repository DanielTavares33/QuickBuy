﻿using QuickBuy.Dominio.ObjectValeu;
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
		public  DateTime DeliveryDateForecast { get; set; }
		public string PostalCode { get; set; }
		public string City { get; set; }
		public string Distric { get; set; }
		public string Address { get; set; }
		public int AddressNumber { get; set; }

		public int PaymentMethodId { get; set; }
		public PaymentMethod PaymentMethod { get; set; }

		/// <summary>
		/// Request can have one or multiple items.
		/// </summary>
		public ICollection<ItemRequest> ItemsRequest { get; set; }
	}
}
