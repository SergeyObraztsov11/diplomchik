using System;
using System.Collections.Generic;

namespace DiplomApi.Models.Entities;

public class Status
{
    public int Id { get; set; }

    public string Name { get; set; } = null!;

    public string? Description { get; set; }

    public virtual ICollection<MissionUser> MissionsUsers { get; set; } = new List<MissionUser>();
}
