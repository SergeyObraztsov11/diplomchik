using Mapster;
using Microsoft.AspNetCore.Mvc;
using DiplomApi.Interfaces;
using DiplomApi.Models.DTOs;
using DiplomApi.Models.DTOs.Mission;
using DiplomApi.Models.Entities;

namespace DiplomApi.Controllers
{
    [ApiController]
    [Route("api/mission")]
    public class MissionController(IRepository<Mission> missionRepository) : ControllerBase
    {
        [HttpGet]
        public IActionResult GetAllMissions()
        {
            var missions = missionRepository.GetAll();

            return Ok(missions);
        }

        [HttpGet("{id:int}")]
        public IActionResult GetMissionById(int id)
        {
            var mission = missionRepository.GetById(id);

            return Ok(mission);
        }

        [HttpPost]
        public IActionResult AddMission([FromBody] MissionCreationDto missionDto)
        {
            var mission = missionDto.Adapt<Mission>();
            
            missionRepository.Insert(mission);
            return CreatedAtAction(nameof(GetMissionById), new { id = mission.Id }, mission);
        }

        [HttpPut("{id:int}")]
        public IActionResult UpdateMission(int id, [FromBody] MissionUpdateDto missionDto)
        {

            var mission = missionDto.Adapt<Mission>();
            mission.Id = id;
            
            missionRepository.Update(mission);
            return NoContent();
        }

        [HttpDelete("{id:int}")]
        public IActionResult DeleteMission(int id)
        {
            missionRepository.Delete(id);
            return NoContent();
        }
    }
}