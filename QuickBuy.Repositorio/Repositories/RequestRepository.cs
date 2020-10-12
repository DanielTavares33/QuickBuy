using QuickBuy.Dominio.Contracts;
using QuickBuy.Dominio.Entity;
using QuickBuy.Repositorio.Contexto;
using System;
using System.Collections.Generic;
using System.Text;

namespace QuickBuy.Repositorio.Repositories
{
	public class RequestRepository : BaseRepository<Request>, IRequestRepository
	{
		public RequestRepository(QuickBuyContext quickBuyContext) : base(quickBuyContext)
		{
		}
	}
}
