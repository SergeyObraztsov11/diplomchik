using Microsoft.EntityFrameworkCore;
using DiplomApi.Models.Entities;

namespace DiplomApi.Repositories;

public class ProductRepository(DbContext context, DbSet<Product> dbSet) : BaseRepository<Product>(context, dbSet)
{
    public override void Insert(Product entity)
    {
        var productType = _context.Set<ProductType>().Find(entity.TypeId) ?? throw new ArgumentException("Product type does not exist.");
        base.Insert(entity);
    }
}
