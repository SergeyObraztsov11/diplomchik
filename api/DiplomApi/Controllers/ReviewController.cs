using Mapster;
using Microsoft.AspNetCore.Mvc;
using DiplomApi.Interfaces;
using DiplomApi.Models.DTOs;
using DiplomApi.Models.DTOs.Review;
using DiplomApi.Models.Entities;

namespace DiplomApi.Controllers
{
    [ApiController]
    [Route("api/review")]
    public class ReviewController(IRepository<Review> reviewRepository) : ControllerBase
    {
        [HttpGet]
        public IActionResult GetAllReviews()
        {
            var reviews = reviewRepository.GetAll();

            return Ok(reviews);
        }

        [HttpGet("{id:int}")]
        public IActionResult GetReviewById(int id)
        {
            var review = reviewRepository.GetById(id);

            return Ok(review);
        }

        [HttpPost]
        public IActionResult AddReview([FromBody] ReviewCreationDto reviewDto)
        {
            var review = reviewDto.Adapt<Review>();

            reviewRepository.Insert(review);
            return CreatedAtAction(nameof(GetReviewById), new { id = review.Id }, review);
        }

        [HttpPut("{id:int}")]
        public IActionResult UpdateReview(int id, ReviewUpdateDto reviewDto)
        {

            var review = reviewDto.Adapt<Review>();
            review.Id = id;

            reviewRepository.Update(review);
            return NoContent();
        }

        [HttpDelete("{id:int}")]
        public IActionResult DeleteReview(int id)
        {
            reviewRepository.Delete(id);
            return NoContent();
        }
    }
}