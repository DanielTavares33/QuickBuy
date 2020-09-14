using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using QuickBuy.Dominio.Entity;

namespace QuickBuy.Repositorio.Config
{
	public class ItemRequestConfiguration : IEntityTypeConfiguration<ItemRequest>
	{
		public void Configure(EntityTypeBuilder<ItemRequest> builder)
		{
			throw new System.NotImplementedException();
		}
	}
}
