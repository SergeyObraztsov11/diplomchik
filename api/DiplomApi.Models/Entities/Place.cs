using System;
using System.Collections.Generic;

namespace DiplomApi.Models.Entities;

public class Place
{
    public int Id { get; set; }

    public string? Title { get; set; }

    public int TypeId { get; set; }

    public string? Address { get; set; }

    public decimal Latitude { get; set; }

    public decimal Longitude { get; set; }

    public string? PhotoPath { get; set; }

    public virtual ICollection<Review> Reviews { get; set; } = new List<Review>();

    public virtual PlaceType Type { get; set; } = null!;
}
