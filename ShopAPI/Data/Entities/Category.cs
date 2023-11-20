using System.ComponentModel.DataAnnotations;

namespace ShopAPI.Entities
{
    public class Category
    {
        [Key]
        public Guid Id { get; set; } = Guid.NewGuid();
        public string Name { get; set; }
        public string Img { get; set; }
        public string Description { get; set; }
    }
}
