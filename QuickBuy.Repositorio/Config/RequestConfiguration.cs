using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using QuickBuy.Dominio.Entity;

namespace QuickBuy.Repositorio.Config
{
	public class RequestConfiguration : IEntityTypeConfiguration<Request>
	{
		public void Configure(EntityTypeBuilder<Request> builder)
		{
			builder.HasKey(r => r.Id);

			builder
				.Property(r => r.RequestDate)
				.IsRequired();

			builder
				.Property(r => r.DeliveryDateForecast)
				.IsRequired();

			builder
				.Property(r => r.PostalCode)
				.IsRequired()
				.HasMaxLength(10);

			builder
				.Property(r => r.City)
				.IsRequired()
				.HasMaxLength(100);

			builder
				.Property(r => r.Distric)
				.IsRequired()
				.HasMaxLength(100);

			builder
				.Property(r => r.Address)
				.IsRequired()
				.HasMaxLength(100);

			builder
				.Property(r => r.AddressNumber)
				.IsRequired()
				.HasMaxLength(50);
		}
	}
}
