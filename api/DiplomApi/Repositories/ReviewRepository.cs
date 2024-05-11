using Microsoft.EntityFrameworkCore;
using DiplomApi.Models.Entities;

namespace DiplomApi.Repositories;

public class ReviewRepository(DbContext context, DbSet<Review> dbSet) : BaseRepository<Review>(context, dbSet)
{
    public override void Insert(Review entity)
    {
        var place = _context.Set<Place>().Find(entity.PlaceId) ?? throw new ArgumentException("Place does not exist.");
        var user = _context.Set<User>().Find(entity.UserId) ?? throw new ArgumentException("User does not exist.");
        base.Insert(entity);
    }
}
