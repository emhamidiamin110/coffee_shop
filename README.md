# کافه نور (Noor Coffee)

یک پروژه‌ی مونورپو برای وب‌سایت کافی‌شاپ، شامل فرانت‌اند و بک‌اند:

```
coffee_shop/
├── frontend/    # Next.js + TypeScript + Tailwind + next-intl (fa/en)
├── backend/     # ASP.NET Core (.NET 10) + EF Core + PostgreSQL, Clean Architecture
└── docker-compose.yml
```

## اجرای همه‌چیز با Docker (پیشنهادی)

نیاز: [Docker](https://www.docker.com/) و Docker Compose.

```bash
docker compose up --build
```

سرویس‌هایی که بالا میان:

| سرویس     | آدرس                              | توضیح                          |
|-----------|-----------------------------------|---------------------------------|
| frontend  | http://localhost:3000             | صفحه‌ی سایت (Next.js dev server)|
| backend   | http://localhost:5080/api/menuitems | REST API (.NET)              |
| postgres  | localhost:5432                    | دیتابیس PostgreSQL              |
| pgadmin   | http://localhost:5050             | مدیریت گرافیکی دیتابیس         |

اطلاعات ورود pgAdmin: `admin@coffeeshop.local` / `admin` — بعد از ورود یک Server جدید با Host `postgres`، Port `5432`، User `postgres`، Password `postgres` اضافه کن.

برای توقف:

```bash
docker compose down
# یا برای پاک کردن دیتای دیتابیس هم:
docker compose down -v
```

## اجرای جدا (بدون Docker)

- فرانت‌اند: به [`frontend/README.md`](frontend/README.md) نگاه کن.
- بک‌اند: به [`backend/README.md`](backend/README.md) نگاه کن.

## معماری بک‌اند

بک‌اند با **Clean Architecture** نوشته شده (چهار لایه‌ی مجزا در `backend/src/`):

- `CoffeeShop.Domain` — Entity ها (بدون وابستگی به چیز دیگه‌ای)
- `CoffeeShop.Application` — DTO ها، اینترفیس‌ها، منطق کاربردی (Service ها)
- `CoffeeShop.Infrastructure` — پیاده‌سازی EF Core / PostgreSQL
- `CoffeeShop.Api` — Controller ها و `Program.cs` (نقطه‌ی ورود)

جهت وابستگی همیشه به‌سمت `Domain` هست: `Api → Infrastructure/Application → Application → Domain`.
