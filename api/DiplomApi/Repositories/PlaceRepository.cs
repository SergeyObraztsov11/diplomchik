using Microsoft.EntityFrameworkCore;
using DiplomApi.Models.Entities;

namespace DiplomApi.Repositories;

public class PlaceRepository(DbContext context, DbSet<Place> dbSet) : BaseRepository<Place>(context, dbSet)
{
    public override void Insert(Place entity)
    {
        var placeType = _context.Set<PlaceType>().Find(entity.TypeId) ?? throw new ArgumentException("Place type does not exist.");
        base.Insert(entity);
    }
}
