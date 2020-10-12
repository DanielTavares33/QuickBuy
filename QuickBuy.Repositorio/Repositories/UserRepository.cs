using QuickBuy.Dominio.Contracts;
using QuickBuy.Dominio.Entity;
using QuickBuy.Repositorio.Contexto;
using System;
using System.Collections.Generic;
using System.Text;

namespace QuickBuy.Repositorio.Repositories
{
	public class UserRepository : BaseRepository<User>, IUserRepository
	{

		public UserRepository(QuickBuyContext quickBuyContext) : base(quickBuyContext)
		{

		}
	}
}
