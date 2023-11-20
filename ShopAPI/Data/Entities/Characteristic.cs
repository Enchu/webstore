using System.ComponentModel.DataAnnotations;

namespace ShopAPI.Entities
{
    public class Characteristic
    {
        [Key]
        public Guid Id { get; set; } = Guid.NewGuid();
        public Product Product { get; set; }
        public string Name { get; set; }
        public string Text { get; set; }
    }
}
