using CoffeeShop.Domain.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace CoffeeShop.Infrastructure.Persistence.Configurations;

public class MenuItemConfiguration : IEntityTypeConfiguration<MenuItem>
{
    public void Configure(EntityTypeBuilder<MenuItem> builder)
    {
        builder.ToTable("MenuItems");

        builder.HasKey(item => item.Id);

        builder.Property(item => item.NameFa).IsRequired().HasMaxLength(200);
        builder.Property(item => item.NameEn).IsRequired().HasMaxLength(200);
        builder.Property(item => item.DescriptionFa).HasMaxLength(500);
        builder.Property(item => item.DescriptionEn).HasMaxLength(500);
        builder.Property(item => item.PriceToman).HasColumnType("numeric(10,0)");
        builder.Property(item => item.Icon).HasMaxLength(10);
        builder.Property(item => item.Category).HasConversion<string>().HasMaxLength(30);
    }
}
