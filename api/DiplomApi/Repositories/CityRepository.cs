using Microsoft.CodeAnalysis.Elfie.Extensions;
using Microsoft.EntityFrameworkCore;
using DiplomApi.Models.Entities;

namespace DiplomApi.Repositories;

public class CityRepository(DbContext context, DbSet<City> dbSet) : BaseRepository<City>(context, dbSet)
{
}