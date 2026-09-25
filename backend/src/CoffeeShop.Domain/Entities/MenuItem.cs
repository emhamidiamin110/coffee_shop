using CoffeeShop.Domain.Enums;

namespace CoffeeShop.Domain.Entities;

public class MenuItem
{
    public Guid Id { get; set; }
    public string NameFa { get; set; } = string.Empty;
    public string NameEn { get; set; } = string.Empty;
    public string DescriptionFa { get; set; } = string.Empty;
    public string DescriptionEn { get; set; } = string.Empty;
    public decimal PriceToman { get; set; }
    public MenuCategory Category { get; set; }
    public string Icon { get; set; } = "☕";
    public bool IsFeatured { get; set; }
    public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
}
