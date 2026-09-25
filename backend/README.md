# CoffeeShop.Api (Backend)

ASP.NET Core Web API با .NET 10، EF Core و PostgreSQL، در قالب Clean Architecture.

## اجرای محلی (بدون Docker)

نیاز: [.NET 10 SDK](https://dotnet.microsoft.com/download) و یک PostgreSQL در دسترس (مثلاً همون که با `docker compose up postgres` بالا میاد).

```bash
cd backend
dotnet restore
dotnet run --project src/CoffeeShop.Api
```

API روی `http://localhost:5080` بالا میاد و مسیر `GET /api/menuitems` باید لیست نمونه‌ی منو رو برگردونه.

## Migration های EF Core

فعلاً پروژه از `EnsureCreated()` برای ساخت اسکیمای دیتابیس در حالت dev استفاده می‌کنه (توی `ApplicationDbContextSeed.cs`) تا بدون نیاز به migration از قبل ساخته‌شده هم کار کنه. برای اینکه به روش استاندارد EF Core Migrations سوییچ کنی:

```bash
cd backend
dotnet tool install --global dotnet-ef   # اگر نصب نیست
dotnet ef migrations add InitialCreate --project src/CoffeeShop.Infrastructure --startup-project src/CoffeeShop.Api
```

بعد از اون، داخل `ApplicationDbContextSeed.cs` خط `EnsureCreatedAsync()` رو با `MigrateAsync()` جایگزین کن.

## اندپوینت‌ها

| Method | Route                  | توضیح                  |
|--------|-------------------------|--------------------------|
| GET    | `/api/menuitems`        | لیست همه‌ی آیتم‌های منو |
| GET    | `/api/menuitems/{id}`   | یک آیتم                 |
| POST   | `/api/menuitems`        | ساخت آیتم جدید          |
| PUT    | `/api/menuitems/{id}`   | ویرایش آیتم             |
| DELETE | `/api/menuitems/{id}`   | حذف آیتم                |

در حالت Development مستندات OpenAPI روی `/openapi/v1.json` در دسترسه.
