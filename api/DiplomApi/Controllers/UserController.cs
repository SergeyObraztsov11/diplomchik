using Mapster;
using Microsoft.AspNetCore.Mvc;
using DiplomApi.Interfaces;
using DiplomApi.Models.DTOs;
using DiplomApi.Models.DTOs.User;
using DiplomApi.Models.Entities;
using DiplomApi.Repositories;

namespace DiplomApi.Controllers
{
    [ApiController]
    [Route("api/user")]
    public class UserController(IRepository<User> userRepository) : ControllerBase
    {
        [HttpGet]
        public IActionResult GetAllUsers()
        {
            var users = userRepository.GetAll();

            return Ok(users);
        }

        [HttpGet("{id:int}")]
        public IActionResult GetUserById(int id)
        {
            var user = userRepository.GetById(id);

            return Ok(user);
        }

        [HttpPut("{id:int}")]
        public IActionResult UpdateUser(int id, UserUpdateDto userDto)
        {
            var user = userDto.Adapt<User>();
            user.Id = id;

            userRepository.Update(user);
            return NoContent();
        }

        [HttpDelete("{id:int}")]
        public IActionResult DeleteUser(int id)
        {
            userRepository.Delete(id);
            return NoContent();
        }
    }
}