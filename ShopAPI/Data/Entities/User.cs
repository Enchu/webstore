using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace ShopAPI.Entities;

public class User
{
    [Key]
    public Guid Id { get; set; } = Guid.NewGuid();
    public string Username { get; set; }
    public string Email { get; set; }
    [JsonIgnore]
    public string Password { get; set; }
}