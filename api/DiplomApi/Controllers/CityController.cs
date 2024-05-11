using Mapster;
using Microsoft.AspNetCore.Mvc;
using DiplomApi.Interfaces;
using DiplomApi.Models.DTOs;
using DiplomApi.Models.DTOs.City;
using DiplomApi.Models.Entities;

namespace DiplomApi.Controllers
{
    [ApiController]
    [Route("api/city")]
    public class CityController(IRepository<City> cityRepository) : ControllerBase
    {
        [HttpGet]
        public IActionResult GetAllCities()
        {
            var cities = cityRepository.GetAll();

            return Ok(cities);
        }

        [HttpGet("{id:int}")]
        public IActionResult GetCityById(int id)
        {
            var city = cityRepository.GetById(id);

            return Ok(city);
        }

        [HttpPost]
        public IActionResult AddCity([FromBody] CityCreationDto cityDto)
        {
            var city = cityDto.Adapt<City>();

            cityRepository.Insert(city);
            return CreatedAtAction(nameof(GetCityById), new { id = city.Id }, city);
        }

        [HttpPut("{id:int}")]
        public IActionResult UpdateCity(int id, CityUpdateDto cityDto)
        {

            var city = cityDto.Adapt<City>();
            city.Id = id;

            cityRepository.Update(city);
            return NoContent();
        }

        [HttpDelete("{id:int}")]
        public IActionResult DeleteCity(int id)
        {
            cityRepository.Delete(id);
            return NoContent();
        }
    }
}