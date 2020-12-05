using QuickBuy.Dominio.Entity;
using System;
using System.Collections.Generic;
using System.Text;

namespace QuickBuy.Dominio.Contracts
{
	public interface IUserRepository : IBaseRepository<User>
	{
		User Get(string email, string password);
	}
}
