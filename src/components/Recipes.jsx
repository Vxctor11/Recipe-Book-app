import ItemCard from "./ItemCard";

function Recipes(props) {
  const deleteRecipe = (recipeId) => {
    const filterRecipes = props.recipeBook.filter((recipe) => {
      return recipe.id !== recipeId;
    });
    props.setRecipesBook(filterRecipes);
  };

  return (
    <div className="recipeList">
      {props &&
        props.recipeBook.map((recipe) => {
          return (
            <ItemCard
              key={recipe.id}
              recipe={recipe}
              deleteRecipe={deleteRecipe}
            />
          );
        })}
    </div>
  );
}
export default Recipes;
