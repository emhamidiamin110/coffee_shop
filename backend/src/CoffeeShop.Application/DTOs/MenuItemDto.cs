using CoffeeShop.Domain.Enums;

namespace CoffeeShop.Application.DTOs;

public record MenuItemDto(
    Guid Id,
    string NameFa,
    string NameEn,
    string DescriptionFa,
    string DescriptionEn,
    decimal PriceToman,
    MenuCategory Category,
    string Icon,
    bool IsFeatured
);

public record CreateMenuItemDto(
    string NameFa,
    string NameEn,
    string DescriptionFa,
    string DescriptionEn,
    decimal PriceToman,
    MenuCategory Category,
    string Icon,
    bool IsFeatured
);

public record UpdateMenuItemDto(
    string NameFa,
    string NameEn,
    string DescriptionFa,
    string DescriptionEn,
    decimal PriceToman,
    MenuCategory Category,
    string Icon,
    bool IsFeatured
);
