using QuickBuy.Dominio.Contracts;
using QuickBuy.Dominio.Entity;
using System;
using System.Collections.Generic;
using System.Text;

namespace QuickBuy.Repositorio.Repositories
{
	public class UserRepository : BaseRepository<User>, IUserRepository
	{
		public UserRepository()
		{

		}
	}
}
