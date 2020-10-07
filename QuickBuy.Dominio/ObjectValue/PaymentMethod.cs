using QuickBuy.Dominio.Enums;
using System;
using System.Collections.Generic;
using System.Text;

namespace QuickBuy.Dominio.ObjectValue
{
	public class PaymentMethod
	{
		public int Id { get; set; }
		public string Name { get; set; }
		public string Description { get; set; }

		public bool IsNotDefined 
		{
			get { return Id == (int)PaymentMethodEnum.NotDefined; }
		}

		public bool IsCreditCard
		{
			get { return Id == (int)PaymentMethodEnum.CreditCard; }
		}

		public bool IsDeposit
		{
			get { return Id == (int)PaymentMethodEnum.Deposit; }
		}

		public bool IsMbWay
		{
			get { return Id == (int)PaymentMethodEnum.MbWay; }
		}
	}
}
