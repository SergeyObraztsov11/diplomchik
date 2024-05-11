using Microsoft.EntityFrameworkCore;
using DiplomApi.Models.Entities;

namespace DiplomApi.Repositories;

public class ProductTypeRepository(DbContext context, DbSet<ProductType> dbSet) : BaseRepository<ProductType>(context, dbSet)
{
}
