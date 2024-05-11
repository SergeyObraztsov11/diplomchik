using Microsoft.AspNetCore.Mvc;
using DiplomApi.Interfaces;
using Mapster;
using DiplomApi.Models.DTOs;
using DiplomApi.Models.Entities;

namespace DiplomApi.Controllers
{
    [ApiController]
    [Route("api/registration")]
    public class RegistrationController(IRepository<User> userRepository) : ControllerBase
    {
        [HttpPost]
        public IActionResult RegisterUser([FromBody] RegistrationDto registrationDto)
        {
            if (registrationDto.Password != registrationDto.ConfirmPassword)
                return BadRequest("Passwords does not match");

            var newUser = registrationDto.Adapt<User>();
            newUser.PasswordHash = registrationDto.Password; // TODO: хеширование
            userRepository.Insert(newUser);

            return Ok(new
            {
                newUser.Id,
                newUser.Login,
                newUser.DisplayName,
                newUser.Email,
                newUser.CityId
            });
        }
    }
}