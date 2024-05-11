using Mapster;
using Microsoft.AspNetCore.Mvc;
using DiplomApi.Interfaces;
using DiplomApi.Models.DTOs;
using DiplomApi.Models.DTOs.Product;
using DiplomApi.Models.Entities;

namespace DiplomApi.Controllers
{
    [ApiController]
    [Route("api/product")]
    public class ProductController(IRepository<Product> productRepository) : ControllerBase
    {
        [HttpGet]
        public IActionResult GetAllProducts()
        {
            var products = productRepository.GetAll();

            return Ok(products);
        }

        [HttpGet("{id:int}")]
        public IActionResult GetProductById(int id)
        {
            var product = productRepository.GetById(id);

            return Ok(product);
        }

        [HttpPost]
        public IActionResult AddProduct([FromBody] ProductCreationDto productDto)
        {
            var product = productDto.Adapt<Product>();

            productRepository.Insert(product);
            return CreatedAtAction(nameof(GetProductById), new { id = product.Id }, product);
        }

        [HttpPut("{id:int}")]
        public IActionResult UpdateProduct(int id, ProductUpdateDto productDto)
        {

            var product = productDto.Adapt<Product>();
            product.Id = id;

            productRepository.Update(product);
            return NoContent();
        }

        [HttpDelete("{id:int}")]
        public IActionResult DeleteProduct(int id)
        {
            productRepository.Delete(id);
            return NoContent();
        }
    }
}