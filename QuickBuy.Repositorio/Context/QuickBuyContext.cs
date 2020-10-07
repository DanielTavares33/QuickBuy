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

			modelBuilder.Entity<PaymentMethod>().HasData(
				new PaymentMethod() { 
					Id = 1, 
					Name = "Cartão de Crédito", 
					Description = "Forma de Pagamento Cartão de Crédito"
				},
				new PaymentMethod()
				{
					Id = 2,
					Name = "Deposito",
					Description = "Forma de Pagamento Deposito"
				},
				new PaymentMethod()
				{
					Id = 3,
					Name = "MbWay",
					Description = "Forma de Pagamento MbWay"
				});

			base.OnModelCreating(modelBuilder);	
		}
	}
}
