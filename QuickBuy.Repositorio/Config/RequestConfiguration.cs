using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using QuickBuy.Dominio.Entity;

namespace QuickBuy.Repositorio.Config
{
	public class RequestConfiguration : IEntityTypeConfiguration<Request>
	{
		public void Configure(EntityTypeBuilder<Request> builder)
		{
			throw new System.NotImplementedException();
		}
	}
}
