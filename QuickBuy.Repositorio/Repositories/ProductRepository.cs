using QuickBuy.Dominio.Contracts;
using QuickBuy.Dominio.Entity;
using QuickBuy.Repositorio.Contexto;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading;

namespace QuickBuy.Repositorio.Repositories
{
	public class ProductRepository : BaseRepository<Product>, IProductRepository
	{
		public ProductRepository(QuickBuyContext quickBuyContext) : base(quickBuyContext)
		{
		}
	}
}
