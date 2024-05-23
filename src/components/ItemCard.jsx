
 function ItemCard({ recipe, deleteRecipe }) {
  return (
        <div className="recipe-card">
            <h3>{recipe.name}</h3>
            <img className="foodImg" src={recipe.image} alt="image" />
            <p>Calories: {recipe.calories}</p>
            <p>Servings: {recipe.servings}</p>
            <p>Added to the List: {recipe.wasAdded ? <span>✅</span> : <span>❌</span>}</p>
            <button onClick={() => deleteRecipe(recipe.id)} className="btn-delete">Delete</button>
        </div>
  );
}
export default ItemCard