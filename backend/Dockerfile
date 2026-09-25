FROM mcr.microsoft.com/dotnet/sdk:10.0 AS build
WORKDIR /src

COPY src/CoffeeShop.Domain/CoffeeShop.Domain.csproj CoffeeShop.Domain/
COPY src/CoffeeShop.Application/CoffeeShop.Application.csproj CoffeeShop.Application/
COPY src/CoffeeShop.Infrastructure/CoffeeShop.Infrastructure.csproj CoffeeShop.Infrastructure/
COPY src/CoffeeShop.Api/CoffeeShop.Api.csproj CoffeeShop.Api/
RUN dotnet restore CoffeeShop.Api/CoffeeShop.Api.csproj

COPY src/ .
RUN dotnet publish CoffeeShop.Api/CoffeeShop.Api.csproj -c Release -o /app --no-restore

FROM mcr.microsoft.com/dotnet/aspnet:10.0 AS runtime
WORKDIR /app
COPY --from=build /app .

ENV ASPNETCORE_URLS=http://+:8080
EXPOSE 8080

ENTRYPOINT ["dotnet", "CoffeeShop.Api.dll"]
