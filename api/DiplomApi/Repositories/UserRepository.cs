using Microsoft.EntityFrameworkCore;
using DiplomApi.Models.Entities;

namespace DiplomApi.Repositories;

public class UserRepository(DbContext context, DbSet<User> dbSet) : BaseRepository<User>(context, dbSet)
{
    public override void Insert(User entity)
    {
        var city = _context.Set<City>().Find(entity.CityId) ?? throw new ArgumentException("City does not exist.");
        var theme = _context.Set<Theme>().Find(entity.ThemeId) ?? throw new ArgumentException("Theme does not exist.");
        base.Insert(entity);
    }
}