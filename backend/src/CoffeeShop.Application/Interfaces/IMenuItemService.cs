using CoffeeShop.Application.DTOs;

namespace CoffeeShop.Application.Interfaces;

public interface IMenuItemService
{
    Task<IReadOnlyList<MenuItemDto>> GetAllAsync(CancellationToken cancellationToken = default);
    Task<MenuItemDto?> GetByIdAsync(Guid id, CancellationToken cancellationToken = default);
    Task<MenuItemDto> CreateAsync(CreateMenuItemDto dto, CancellationToken cancellationToken = default);
    Task<MenuItemDto?> UpdateAsync(Guid id, UpdateMenuItemDto dto, CancellationToken cancellationToken = default);
    Task<bool> DeleteAsync(Guid id, CancellationToken cancellationToken = default);
}
