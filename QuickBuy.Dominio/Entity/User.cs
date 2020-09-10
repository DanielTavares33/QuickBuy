using System.Collections.Generic;

namespace QuickBuy.Dominio.Entity
{
	public class User : Entity
	{
		public int Id { get; set; }
		public string Email { get; set; }
		public string Password { get; set; }
		public string Name { get; set; }
		public string LastName { get; set; }

		/// <summary>
		/// One User can have multiple requests.
		/// </summary>
		public ICollection<Request> Requests { get; set; }

		public override void Validate()
		{
			if (string.IsNullOrEmpty(Email))
				AddValidationMessages("Email não foi informado");

			if (string.IsNullOrEmpty(Password))
				AddValidationMessages("Password não foi informada");
		}
	}
}
