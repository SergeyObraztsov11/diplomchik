using Mapster;
using Microsoft.AspNetCore.Mvc;
using DiplomApi.Interfaces;
using DiplomApi.Models.DTOs;
using DiplomApi.Models.DTOs.Theme;
using DiplomApi.Models.Entities;

namespace DiplomApi.Controllers
{
    [ApiController]
    [Route("api/theme")]
    public class ThemeController(IRepository<Theme> themeRepository) : ControllerBase
    {
        [HttpGet]
        public IActionResult GetAllThemes()
        {
            var themes = themeRepository.GetAll();

            return Ok(themes);
        }

        [HttpGet("{id:int}")]
        public IActionResult GetThemeById(int id)
        {
            var theme = themeRepository.GetById(id);

            return Ok(theme);
        }

        [HttpPost]
        public IActionResult AddTheme([FromBody] ThemeCreationDto themeDto)
        {
            var theme = themeDto.Adapt<Theme>();

            themeRepository.Insert(theme);
            return CreatedAtAction(nameof(GetThemeById), new { id = theme.Id }, theme);
        }

        [HttpPut("{id:int}")]
        public IActionResult UpdateTheme(int id, ThemeUpdateDto themeDto)
        {
            var theme = themeDto.Adapt<Theme>();
            theme.Id = id;

            themeRepository.Update(theme);
            return NoContent();
        }

        [HttpDelete("{id:int}")]
        public IActionResult DeleteTheme(int id)
        {
            themeRepository.Delete(id);
            return NoContent();
        }
    }
}