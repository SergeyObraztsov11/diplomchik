using System;
using System.Collections.Generic;

namespace DiplomApi.Models.DTOs;

public class StatusCreationDto
{
    public string Name { get; set; } = null!;

    public string? Description { get; set; }
}
