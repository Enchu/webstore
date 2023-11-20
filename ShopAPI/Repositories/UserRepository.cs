using ShopAPI.Data;
using ShopAPI.Entities;
using ShopAPI.Repositories.Interface;

namespace ShopAPI.Repositories;

public class UserRepository: IUserRepository
{
    private readonly AppDbContext _appDbContext;
    public UserRepository(AppDbContext appDbContext)
    {
        _appDbContext = appDbContext;
    }
    
    public User Create(User user)
    {
        _appDbContext.Users.Add(user);
        _appDbContext.SaveChanges();

        return user;
    }

    public User GetByEmail(string email)
    {
        return _appDbContext.Users.FirstOrDefault(x => x.Email == email);
    }

    public User GetById(Guid id)
    {
        return _appDbContext.Users.FirstOrDefault(x => x.Id == id);
    }
}