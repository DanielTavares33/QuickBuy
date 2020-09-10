using Microsoft.EntityFrameworkCore;
using QuickBuy.Dominio.Entity;
using QuickBuy.Dominio.ObjectValue;

namespace QuickBuy.Repositorio.Contexto
{
	public class QuickBuyContext : DbContext
	{
		public DbSet<User> Users { get; set; }
		public DbSet<Request> Requests { get; set; }
		public DbSet<Product> Products { get; set; }
		public DbSet<ItemRequest> ItemsRequests { get; set; }
		public DbSet<PaymentMethod> PaymentMethod { get; set; }

		public QuickBuyContext(DbContextOptions options) : base(options)
		{

		}
	}
}
