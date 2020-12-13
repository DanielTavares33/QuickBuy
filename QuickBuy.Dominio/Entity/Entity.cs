using System.Collections.Generic;
using System.Linq;

namespace QuickBuy.Dominio.Entity
{
	public abstract class Entity
	{
		private List<string> _validationMessages { get; set; }
		private List<string> validationMessage 
		{ 
			get { return _validationMessages ?? (_validationMessages = new List<string>()); }
		}

		protected void ClearValidationMessages()
		{
			validationMessage.Clear();
		}

		protected void AddValidationMessages(string message)
		{
			validationMessage.Add(message);
		}

		public string GetValidationMessages()
		{
			return string.Join(".\r\n", validationMessage);
		}

		public abstract void Validate();
		public bool IsValid
		{
			get { return !validationMessage.Any(); }
		}
	}
}
