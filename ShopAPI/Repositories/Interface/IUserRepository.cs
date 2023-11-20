using ShopAPI.Entities;

namespace ShopAPI.Repositories.Interface;

public interface IUserRepository
{
    User Create(User user);
    User GetByEmail(string email);
    User GetById(Guid id);
}