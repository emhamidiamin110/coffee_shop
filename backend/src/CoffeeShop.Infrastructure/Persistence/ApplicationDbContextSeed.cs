using CoffeeShop.Domain.Entities;
using CoffeeShop.Domain.Enums;
using Microsoft.EntityFrameworkCore;

namespace CoffeeShop.Infrastructure.Persistence;

public static class ApplicationDbContextSeed
{
    public static async Task SeedAsync(ApplicationDbContext context)
    {
        // No EF Core migrations have been generated yet (see backend/README.md for the
        // `dotnet ef migrations add InitialCreate` step). Until then, EnsureCreated
        // builds the schema straight from the model so `docker compose up` works out
        // of the box. Once real migrations exist, swap this for `MigrateAsync()`.
        await context.Database.EnsureCreatedAsync();

        if (await context.MenuItems.AnyAsync())
        {
            return;
        }

        context.MenuItems.AddRange(
            new MenuItem
            {
                Id = Guid.NewGuid(),
                NameFa = "اسپرسو",
                NameEn = "Espresso",
                DescriptionFa = "دانه‌ی عربیکا، تلخی متعادل و کرمای غنی",
                DescriptionEn = "Arabica beans, balanced bitterness, rich crema",
                PriceToman = 45000,
                Category = MenuCategory.HotDrinks,
                Icon = "☕",
                IsFeatured = true,
            },
            new MenuItem
            {
                Id = Guid.NewGuid(),
                NameFa = "کافه لاته",
                NameEn = "Latte",
                DescriptionFa = "اسپرسو با شیر بخاردیده‌ی مخملی",
                DescriptionEn = "Espresso with velvety steamed milk",
                PriceToman = 60000,
                Category = MenuCategory.HotDrinks,
                Icon = "🥛",
                IsFeatured = true,
            },
            new MenuItem
            {
                Id = Guid.NewGuid(),
                NameFa = "کاپوچینو",
                NameEn = "Cappuccino",
                DescriptionFa = "تعادل کلاسیک بین قهوه، شیر و فوم",
                DescriptionEn = "A classic balance of coffee, milk and foam",
                PriceToman = 55000,
                Category = MenuCategory.HotDrinks,
                Icon = "🍮",
                IsFeatured = true,
            },
            new MenuItem
            {
                Id = Guid.NewGuid(),
                NameFa = "کلد برو",
                NameEn = "Cold Brew",
                DescriptionFa = "دم‌آوری سرد ۱۸ ساعته، طعمی نرم و شیرین",
                DescriptionEn = "18-hour cold steep, smooth and naturally sweet",
                PriceToman = 65000,
                Category = MenuCategory.ColdDrinks,
                Icon = "🧊",
                IsFeatured = true,
            },
            new MenuItem
            {
                Id = Guid.NewGuid(),
                NameFa = "کروسان کره‌ای",
                NameEn = "Butter Croissant",
                DescriptionFa = "تازه‌پخته هر روز صبح",
                DescriptionEn = "Baked fresh every morning",
                PriceToman = 40000,
                Category = MenuCategory.Pastries,
                Icon = "🥐",
                IsFeatured = true,
            },
            new MenuItem
            {
                Id = Guid.NewGuid(),
                NameFa = "چیزکیک کارامل",
                NameEn = "Caramel Cheesecake",
                DescriptionFa = "خامه‌ای و نرم با سس کارامل خانگی",
                DescriptionEn = "Creamy and soft with homemade caramel sauce",
                PriceToman = 75000,
                Category = MenuCategory.Desserts,
                Icon = "🍰",
                IsFeatured = true,
            }
        );

        await context.SaveChangesAsync();
    }
}
