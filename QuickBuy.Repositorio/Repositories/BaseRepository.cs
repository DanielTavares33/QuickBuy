﻿using QuickBuy.Dominio.Contracts;
using QuickBuy.Repositorio.Contexto;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace QuickBuy.Repositorio.Repositories
{
	public class BaseRepository<TEntity> : IBaseRepository<TEntity> where TEntity : class
	{
		protected readonly QuickBuyContext QuickBuyContext;

		public BaseRepository(QuickBuyContext quickBuyContext)
		{
			QuickBuyContext = quickBuyContext;
		}

		public void Add(TEntity entity)
		{
			QuickBuyContext.Set<TEntity>().Add(entity);
			QuickBuyContext.SaveChanges();
		}

		public IEnumerable<TEntity> GetAll()
		{
			return QuickBuyContext.Set<TEntity>().ToList();
		}

		public TEntity GetById(int id)
		{
			return QuickBuyContext.Set<TEntity>().Find(id);
		}

		public void Remove(TEntity entity)
		{
			QuickBuyContext.Set<TEntity>().Remove(entity);
			QuickBuyContext.SaveChanges();
		}

		public void Update(TEntity entity)
		{
			QuickBuyContext.Set<TEntity>().Update(entity);
			QuickBuyContext.SaveChanges();
		}

		public void Dispose()
		{
			// Remove de context object from memory
			QuickBuyContext.Dispose();
		}
	}
}
