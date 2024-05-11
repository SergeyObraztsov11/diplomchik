using System.ComponentModel.DataAnnotations;

namespace DiplomApi.Models.DTOs;

public sealed class RegistrationDto
{
    [Required]
    public string Login { get; set; } = string.Empty;

    [Required]
    public string DisplayName { get; set; } = string.Empty;

    [Required]
    public string Email { get; set; } = string.Empty;

    public int CityId { get; set; } = 1;
    
    [Required]
    public string Password { get; set; } = string.Empty;
    
    [Required]
    public string ConfirmPassword { get; set; } = string.Empty;
}