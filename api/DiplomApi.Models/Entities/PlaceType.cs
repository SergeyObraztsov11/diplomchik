using System;
using System.Collections.Generic;

namespace DiplomApi.Models.Entities;

public class PlaceType
{
    public int Id { get; set; }

    public string Name { get; set; } = null!;

    public virtual ICollection<Place> Places { get; set; } = new List<Place>();
}
