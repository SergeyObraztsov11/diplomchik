using Mapster;
using Microsoft.AspNetCore.Mvc;
using DiplomApi.Interfaces;
using DiplomApi.Models.DTOs;
using DiplomApi.Models.DTOs.ProductType;
using DiplomApi.Models.Entities;

namespace DiplomApi.Controllers
{
    [ApiController]
    [Route("api/productType")]
    public class ProductTypeController(IRepository<ProductType> productTypeRepository) : ControllerBase
    {
        [HttpGet]
        public IActionResult GetAllProductTypes()
        {
            var productTypes = productTypeRepository.GetAll();

            return Ok(productTypes);
        }

        [HttpGet("{id:int}")]
        public IActionResult GetProductTypeById(int id)
        {
            var productType = productTypeRepository.GetById(id);

            return Ok(productType);
        }

        [HttpPost]
        public IActionResult AddProductType([FromBody] ProductTypeCreationDto productTypeDto)
        {
            var productType = productTypeDto.Adapt<ProductType>();

            productTypeRepository.Insert(productType);
            return CreatedAtAction(nameof(GetProductTypeById), new { id = productType.Id }, productType);
        }

        [HttpPut("{id:int}")]
        public IActionResult UpdateProductType(int id, ProductTypeUpdateDto productTypeDto)
        {

            var productType = productTypeDto.Adapt<ProductType>();
            productType.Id = id;

            productTypeRepository.Update(productType);
            return NoContent();
        }

        [HttpDelete("{id:int}")]
        public IActionResult DeleteProductType(int id)
        {
            productTypeRepository.Delete(id);
            return NoContent();
        }
    }
}