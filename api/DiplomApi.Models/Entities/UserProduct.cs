using System;
using System.Collections.Generic;

namespace DiplomApi.Models.Entities;

public class UserProduct
{
    public int UserId { get; set; }

    public int ProductId { get; set; }

    public ulong Active { get; set; }

    public virtual Product Product { get; set; } = null!;

    public virtual User User { get; set; } = null!;
}
