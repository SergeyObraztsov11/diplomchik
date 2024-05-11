using System;
using System.Collections.Generic;

namespace DiplomApi.Models.Entities;

public class Mission
{
    public int Id { get; set; }

    public string Title { get; set; } = null!;

    public string? Description { get; set; }

    public string? IconPath { get; set; }

    public int ExpAward { get; set; }

    public virtual ICollection<MissionUser> MissionsUsers { get; set; } = new List<MissionUser>();
}
