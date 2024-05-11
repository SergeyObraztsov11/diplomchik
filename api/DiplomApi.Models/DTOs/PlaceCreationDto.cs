using System;
using System.Collections.Generic;

namespace DiplomApi.Models.DTOs;

public class PlaceCreationDto
{
    public string? Title { get; set; }

    public int TypeId { get; set; }

    public string? Address { get; set; }

    public decimal Latitude { get; set; }

    public decimal Longitude { get; set; }

    public string? PhotoPath { get; set; }
}
