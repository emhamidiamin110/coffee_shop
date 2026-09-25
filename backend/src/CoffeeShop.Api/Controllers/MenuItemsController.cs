using CoffeeShop.Application.DTOs;
using CoffeeShop.Application.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace CoffeeShop.Api.Controllers;

[ApiController]
[Route("api/[controller]")]
public class MenuItemsController(IMenuItemService menuItemService) : ControllerBase
{
    [HttpGet]
    public async Task<ActionResult<IReadOnlyList<MenuItemDto>>> GetAll(CancellationToken cancellationToken)
    {
        var items = await menuItemService.GetAllAsync(cancellationToken);
        return Ok(items);
    }

    [HttpGet("{id:guid}")]
    public async Task<ActionResult<MenuItemDto>> GetById(Guid id, CancellationToken cancellationToken)
    {
        var item = await menuItemService.GetByIdAsync(id, cancellationToken);
        return item is null ? NotFound() : Ok(item);
    }

    [HttpPost]
    public async Task<ActionResult<MenuItemDto>> Create(CreateMenuItemDto dto, CancellationToken cancellationToken)
    {
        var created = await menuItemService.CreateAsync(dto, cancellationToken);
        return CreatedAtAction(nameof(GetById), new { id = created.Id }, created);
    }

    [HttpPut("{id:guid}")]
    public async Task<ActionResult<MenuItemDto>> Update(Guid id, UpdateMenuItemDto dto, CancellationToken cancellationToken)
    {
        var updated = await menuItemService.UpdateAsync(id, dto, cancellationToken);
        return updated is null ? NotFound() : Ok(updated);
    }

    [HttpDelete("{id:guid}")]
    public async Task<IActionResult> Delete(Guid id, CancellationToken cancellationToken)
    {
        var deleted = await menuItemService.DeleteAsync(id, cancellationToken);
        return deleted ? NoContent() : NotFound();
    }
}
