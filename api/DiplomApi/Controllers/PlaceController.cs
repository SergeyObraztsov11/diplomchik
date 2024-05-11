using Mapster;
using Microsoft.AspNetCore.Mvc;
using DiplomApi.Interfaces;
using DiplomApi.Models.DTOs;
using DiplomApi.Models.DTOs.Place;
using DiplomApi.Models.Entities;

namespace DiplomApi.Controllers
{
    [ApiController]
    [Route("api/place")]
    public class PlaceController(IRepository<Place> placeRepository) : ControllerBase
    {
        [HttpGet]
        public IActionResult GetAllPlaces()
        {
            var places = placeRepository.GetAll();

            return Ok(places);
        }

        [HttpGet("{id:int}")]
        public IActionResult GetPlaceById(int id)
        {
            var place = placeRepository.GetById(id);

            return Ok(place);
        }

        [HttpPost]
        public IActionResult AddPlace([FromBody] PlaceCreationDto placeDto)
        {
            var place = placeDto.Adapt<Place>();

            placeRepository.Insert(place);
            return CreatedAtAction(nameof(GetPlaceById), new { id = place.Id }, place);
        }

        [HttpPut("{id:int}")]
        public IActionResult UpdatePlace(int id, PlaceUpdateDto placeDto)
        {

            var place = placeDto.Adapt<Place>();
            place.Id = id;

            placeRepository.Update(place);
            return NoContent();
        }

        [HttpDelete("{id:int}")]
        public IActionResult DeletePlace(int id)
        {
            placeRepository.Delete(id);
            return NoContent();
        }
    }
}