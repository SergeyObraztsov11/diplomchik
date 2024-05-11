using Mapster;
using Microsoft.AspNetCore.Mvc;
using DiplomApi.Interfaces;
using DiplomApi.Models.DTOs;
using DiplomApi.Models.DTOs.PlaceType;
using DiplomApi.Models.Entities;

namespace DiplomApi.Controllers
{
    [ApiController]
    [Route("api/placeType")]
    public class PlaceTypeController(IRepository<PlaceType> placeTypeRepository) : ControllerBase
    {
        [HttpGet]
        public IActionResult GetAllPlaceTypes()
        {
            var placeTypes = placeTypeRepository.GetAll();

            return Ok(placeTypes);
        }

        [HttpGet("{id:int}")]
        public IActionResult GetPlaceTypeById(int id)
        {
            var placeType = placeTypeRepository.GetById(id);

            return Ok(placeType);
        }

        [HttpPost]
        public IActionResult AddPlaceType([FromBody] PlaceTypeCreationDto placeTypeDto)
        {
            var placeType = placeTypeDto.Adapt<PlaceType>();

            placeTypeRepository.Insert(placeType);
            return CreatedAtAction(nameof(GetPlaceTypeById), new { id = placeType.Id }, placeType);
        }

        [HttpPut("{id:int}")]
        public IActionResult UpdatePlaceType(int id, PlaceTypeUpdateDto placeTypeDto)
        {

            var placeType = placeTypeDto.Adapt<PlaceType>();
            placeType.Id = id;

            placeTypeRepository.Update(placeType);
            return NoContent();
        }

        [HttpDelete("{id:int}")]
        public IActionResult DeletePlaceType(int id)
        {
            placeTypeRepository.Delete(id);
            return NoContent();
        }
    }
}