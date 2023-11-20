using System.ComponentModel.DataAnnotations;

namespace ShopAPI.Entities
{
    public class Product
    {
        [Key]
        public Guid Id { get; set; } = Guid.NewGuid();
        public Category Category { get; set; }
        public string Name { get; set; }
        public string Price { get; set; }
        public string Price_old { get; set; }
        public string Img { get; set; }
        public string Description { get; set; }
    }
}
