using CoffeeShop.Application.DTOs;
using CoffeeShop.Application.Interfaces;
using CoffeeShop.Domain.Entities;
using Microsoft.EntityFrameworkCore;

namespace CoffeeShop.Application.Services;

public class MenuItemService(IApplicationDbContext context) : IMenuItemService
{
    public async Task<IReadOnlyList<MenuItemDto>> GetAllAsync(CancellationToken cancellationToken = default)
    {
        return await context.MenuItems
            .OrderBy(item => item.Category)
            .ThenBy(item => item.NameEn)
            .Select(item => ToDto(item))
            .ToListAsync(cancellationToken);
    }

    public async Task<MenuItemDto?> GetByIdAsync(Guid id, CancellationToken cancellationToken = default)
    {
        var item = await context.MenuItems.FindAsync([id], cancellationToken);
        return item is null ? null : ToDto(item);
    }

    public async Task<MenuItemDto> CreateAsync(CreateMenuItemDto dto, CancellationToken cancellationToken = default)
    {
        var item = new MenuItem
        {
            Id = Guid.NewGuid(),
            NameFa = dto.NameFa,
            NameEn = dto.NameEn,
            DescriptionFa = dto.DescriptionFa,
            DescriptionEn = dto.DescriptionEn,
            PriceToman = dto.PriceToman,
            Category = dto.Category,
            Icon = dto.Icon,
            IsFeatured = dto.IsFeatured,
            CreatedAt = DateTime.UtcNow,
        };

        context.MenuItems.Add(item);
        await context.SaveChangesAsync(cancellationToken);

        return ToDto(item);
    }

    public async Task<MenuItemDto?> UpdateAsync(Guid id, UpdateMenuItemDto dto, CancellationToken cancellationToken = default)
    {
        var item = await context.MenuItems.FindAsync([id], cancellationToken);
        if (item is null)
        {
            return null;
        }

        item.NameFa = dto.NameFa;
        item.NameEn = dto.NameEn;
        item.DescriptionFa = dto.DescriptionFa;
        item.DescriptionEn = dto.DescriptionEn;
        item.PriceToman = dto.PriceToman;
        item.Category = dto.Category;
        item.Icon = dto.Icon;
        item.IsFeatured = dto.IsFeatured;

        await context.SaveChangesAsync(cancellationToken);

        return ToDto(item);
    }

    public async Task<bool> DeleteAsync(Guid id, CancellationToken cancellationToken = default)
    {
        var item = await context.MenuItems.FindAsync([id], cancellationToken);
        if (item is null)
        {
            return false;
        }

        context.MenuItems.Remove(item);
        await context.SaveChangesAsync(cancellationToken);

        return true;
    }

    private static MenuItemDto ToDto(MenuItem item) => new(
        item.Id,
        item.NameFa,
        item.NameEn,
        item.DescriptionFa,
        item.DescriptionEn,
        item.PriceToman,
        item.Category,
        item.Icon,
        item.IsFeatured
    );
}
