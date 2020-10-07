using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using QuickBuy.Dominio.Entity;

namespace QuickBuy.Repositorio.Config
{
	public class UserConfiguration : IEntityTypeConfiguration<User>
	{
		public void Configure(EntityTypeBuilder<User> builder)
		{
			builder.HasKey(u => u.Id);

			// Builder uses the Fluent pattern
			builder
				.Property(u => u.Email)
				.IsRequired()
				.HasMaxLength(50);

			builder
				.Property(u => u.Password)
				.IsRequired()
				.HasMaxLength(400);

			builder
				.Property(u => u.Name)
				.IsRequired()
				.HasMaxLength(50);

			builder
				.Property(u => u.LastName)
				.IsRequired()
				.HasMaxLength(50);

			// Only one User can have multiple requests.
			builder
				.HasMany(u => u.Requests)
				.WithOne(p => p.User);
		}
	}
}
