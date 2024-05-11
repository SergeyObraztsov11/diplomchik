using Microsoft.EntityFrameworkCore;
using DiplomApi.Models.Entities;

namespace DiplomApi.Repositories;

public class StatusRepository(DbContext context, DbSet<Status> dbSet) : BaseRepository<Status>(context, dbSet)
{
}
