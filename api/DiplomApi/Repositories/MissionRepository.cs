using Microsoft.EntityFrameworkCore;
using DiplomApi.Models.Entities;

namespace DiplomApi.Repositories;

public class MissionRepository(DbContext context, DbSet<Mission> dbSet) : BaseRepository<Mission>(context, dbSet)
{
}
