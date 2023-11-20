using ShopAPI.Entities;
using ShopAPI.Repositories;

namespace ShopAPI.Domains
{
    public class Recipe
    {
        public void SaveReciple(RecipeEntity recipeEntity)
        {
            //Validate some staff

            var repository = new RecipeRepository();
            repository.SaveRecipeToDatabase(recipeEntity);
        }
    }
}
