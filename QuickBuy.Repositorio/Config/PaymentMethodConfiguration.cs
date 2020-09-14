using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using QuickBuy.Dominio.ObjectValue;

namespace QuickBuy.Repositorio.Config
{
	public class PaymentMethodConfiguration : IEntityTypeConfiguration<PaymentMethod>
	{
		public void Configure(EntityTypeBuilder<PaymentMethod> builder)
		{
			builder.HasKey(pm => pm.Id);

			builder
				.Property(pm => pm.Name)
				.IsRequired()
				.HasMaxLength(50);

			builder
				.Property(pm => pm.Description)
				.IsRequired()
				.HasMaxLength(100);
		}
	}
}
