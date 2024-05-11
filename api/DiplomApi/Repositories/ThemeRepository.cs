using Microsoft.EntityFrameworkCore;
using DiplomApi.Models.Entities;

namespace DiplomApi.Repositories;

public class ThemeRepository(DbContext context, DbSet<Theme> dbSet) : BaseRepository<Theme>(context, dbSet)
{
}
