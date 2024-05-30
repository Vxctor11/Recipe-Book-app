import { Link } from "react-router-dom";
function ItemCard({ recipe, deleteRecipe }) {
  return (
    <div className="recipe-card">
      <Link to={"/itemDetails/" + recipe.id}>
        <h3>{recipe.name}</h3>
        <img className="foodImg" src={recipe.image} alt="image" />
      </Link>
      <p>Calories: {recipe.calories}</p>
      <p>Servings: {recipe.servings}</p>
      <p>
        Added to the List: {recipe.wasAdded ? <span>✅</span> : <span>❌</span>}
      </p>
      <button onClick={() => deleteRecipe(recipe.id)} className="btn-delete">
        Delete
      </button>
      <Link to={"/editRecipe/" + recipe.id}>
        <button className="btn-edit">Edit recipe</button>
      </Link>
    </div>
  );
}
export default ItemCard;
