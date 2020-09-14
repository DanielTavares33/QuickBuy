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

		public abstract void Validate();
		protected bool IsValid
		{
			get { return !validationMessage.Any(); }
		}
	}
}
