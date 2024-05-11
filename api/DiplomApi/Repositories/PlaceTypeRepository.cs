using Microsoft.EntityFrameworkCore;
using DiplomApi.Models.Entities;

namespace DiplomApi.Repositories;

public class PlaceTypeRepository(DbContext context, DbSet<PlaceType> dbSet) : BaseRepository<PlaceType>(context, dbSet)
{
}
