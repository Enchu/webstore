using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using ShopAPI.Entities;

namespace ShopAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CategoryController : ControllerBase
    {
        /*
            public Guid Id { get; set; } = Guid.NewGuid();
            public string Name { get; set; }
            public string Img { get; set; }
            public string Description { get; set; }
         */

        [HttpGet]
        public async Task<IActionResult> GetCategory()
        {
            var category = new[]
            {
                new { Name = 1, Namem = "Bag", Img = "123.img", Description = "Красивая сумка коричневого цвета" },
                new { Name = 2, Namem = "Bag", Img = "223.img", Description = "Красивая сумка синего цвета" },
                new { Name = 3, Namem = "Bag", Img = "323.img", Description = "Красивая сумка красного цвета" },
            };

            return Ok(category);
        }

        [HttpGet("{categoryId}")]
        public async Task<IActionResult> GetOnceAsync([FromRoute] Guid categoryId)
        {
            return Ok(categoryId);
        }

        [HttpPost]
        public async Task<IActionResult> PostAsync([FromBody] Category category)
        {
            return Ok(category);
        }

        [HttpPut]
        public async Task<IActionResult> PutAsync([FromBody] Category category)
        {
            return Ok(category);
        }

        [HttpDelete("{recipeId}")]
        public async Task<IActionResult> DeleteAsync(Guid categoryId)
        {
            return Ok(categoryId);
        }
    }
}
