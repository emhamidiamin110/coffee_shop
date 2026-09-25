export type MenuItem = {
  id: string;
  nameFa: string;
  nameEn: string;
  descriptionFa: string;
  descriptionEn: string;
  priceToman: number;
  category: number;
  icon: string;
  isFeatured: boolean;
};

const API_URL = process.env.API_URL ?? "http://localhost:5080";

export async function getMenuItems(): Promise<MenuItem[]> {
  try {
    const res = await fetch(`${API_URL}/api/menuitems`, {
      next: { revalidate: 60 },
    });

    if (!res.ok) {
      throw new Error(`Backend responded with ${res.status}`);
    }

    return (await res.json()) as MenuItem[];
  } catch (error) {
    console.error("Failed to fetch menu items from backend:", error);
    return [];
  }
}
