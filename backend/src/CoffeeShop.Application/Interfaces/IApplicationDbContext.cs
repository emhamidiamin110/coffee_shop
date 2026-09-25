using CoffeeShop.Domain.Entities;
using Microsoft.EntityFrameworkCore;

namespace CoffeeShop.Application.Interfaces;

public interface IApplicationDbContext
{
    DbSet<MenuItem> MenuItems { get; }

    Task<int> SaveChangesAsync(CancellationToken cancellationToken = default);
}
