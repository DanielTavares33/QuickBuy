using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using QuickBuy.Dominio.ObjectValue;

namespace QuickBuy.Repositorio.Config
{
	public class PaymentMethodConfiguration : IEntityTypeConfiguration<PaymentMethod>
	{
		public void Configure(EntityTypeBuilder<PaymentMethod> builder)
		{
			throw new System.NotImplementedException();
		}
	}
}
