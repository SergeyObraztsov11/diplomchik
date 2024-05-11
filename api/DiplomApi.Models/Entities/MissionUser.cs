using System;
using System.Collections.Generic;

namespace DiplomApi.Models.Entities;

public class MissionUser
{
    public int MissionId { get; set; }

    public int UserId { get; set; }

    public int StatusId { get; set; }

    public virtual Mission Mission { get; set; } = null!;

    public virtual Status Status { get; set; } = null!;

    public virtual User User { get; set; } = null!;
}
