using Microsoft.EntityFrameworkCore;
using QuickBuy.Dominio.Entity;
using QuickBuy.Dominio.ObjectValue;
using QuickBuy.Repositorio.Config;

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

		protected override void OnModelCreating(ModelBuilder modelBuilder)
		{
			/// Map classes here...
			modelBuilder.ApplyConfiguration(new UserConfiguration());
			modelBuilder.ApplyConfiguration(new RequestConfiguration());
			modelBuilder.ApplyConfiguration(new ProductConfiguration());
			modelBuilder.ApplyConfiguration(new PaymentMethodConfiguration());
			modelBuilder.ApplyConfiguration(new ItemRequestConfiguration());

			base.OnModelCreating(modelBuilder);	
		}
	}
}
