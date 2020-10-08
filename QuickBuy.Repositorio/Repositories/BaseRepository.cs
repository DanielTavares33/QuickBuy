using QuickBuy.Dominio.Contracts;
using QuickBuy.Repositorio.Contexto;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace QuickBuy.Repositorio.Repositories
{
	public class BaseRepository<TEntity> : IBaseRepository<TEntity> where TEntity : class
	{
		private readonly QuickBuyContext _quickBuyContext;

		public BaseRepository(QuickBuyContext quickBuyContext)
		{
			_quickBuyContext = quickBuyContext;
		}

		public void Add(TEntity entity)
		{
			_quickBuyContext.Set<TEntity>().Add(entity);
		}

		public IEnumerable<TEntity> GetAll()
		{
			return _quickBuyContext.Set<TEntity>().ToList();
		}

		public TEntity GetById(int id)
		{
			throw new NotImplementedException();
		}

		public void Remove(TEntity entity)
		{
			throw new NotImplementedException();
		}

		public void Update(TEntity entity)
		{
			throw new NotImplementedException();
		}

		public void Dispose()
		{
			throw new NotImplementedException();
		}
	}
}
