using Mapster;
using Microsoft.AspNetCore.Mvc;
using DiplomApi.Interfaces;
using DiplomApi.Models.DTOs;
using DiplomApi.Models.DTOs.Status;
using DiplomApi.Models.Entities;

namespace DiplomApi.Controllers
{
    [ApiController]
    [Route("api/status")]
    public class StatusController(IRepository<Status> statusRepository) : ControllerBase
    {
        [HttpGet]
        public IActionResult GetAllStatuses()
        {
            var statuses = statusRepository.GetAll();

            return Ok(statuses);
        }

        [HttpGet("{id:int}")]
        public IActionResult GetStatusById(int id)
        {
            var status = statusRepository.GetById(id);

            return Ok(status);
        }

        [HttpPost]
        public IActionResult AddStatus([FromBody] StatusCreationDto statusDto)
        {
            var status = statusDto.Adapt<Status>();

            statusRepository.Insert(status);
            return CreatedAtAction(nameof(GetStatusById), new { id = status.Id }, status);
        }

        [HttpPut("{id:int}")]
        public IActionResult UpdateStatus(int id, StatusUpdateDto statusDto)
        {

            var status = statusDto.Adapt<Status>();
            status.Id = id;

            statusRepository.Update(status);
            return NoContent();
        }

        [HttpDelete("{id:int}")]
        public IActionResult DeleteStatus(int id)
        {
            statusRepository.Delete(id);
            return NoContent();
        }
    }
}