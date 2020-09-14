using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using QuickBuy.Dominio.Entity;

namespace QuickBuy.Repositorio.Config
{
	public class ItemRequestConfiguration : IEntityTypeConfiguration<ItemRequest>
	{
		public void Configure(EntityTypeBuilder<ItemRequest> builder)
		{
			builder.HasKey(itemRequest => itemRequest.Id);

			builder
				.Property(itemRequest => itemRequest.ProductId)
				.IsRequired();

			builder
				.Property(itemRequest => itemRequest.Quantity)
				.IsRequired();
		}
	}
}
