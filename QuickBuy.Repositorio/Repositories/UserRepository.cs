using QuickBuy.Dominio.Contracts;
using QuickBuy.Dominio.Entity;
using QuickBuy.Repositorio.Contexto;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace QuickBuy.Repositorio.Repositories
{
	public class UserRepository : BaseRepository<User>, IUserRepository
	{

		public UserRepository(QuickBuyContext quickBuyContext) : base(quickBuyContext)
		{

		}

		public User Get(string email, string password)
		{
			return QuickBuyContext.Users.FirstOrDefault(u => u.Email == email && u.Password == password);
		}

		public User Get(string email)
		{
			return QuickBuyContext.Users.FirstOrDefault(u => u.Email == email);
		}
	}
}
