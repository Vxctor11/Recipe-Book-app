import React from "react";
import { useState } from "react";
import { useParams } from "react-router";
function itemDetails({ recipeBook }) {
  const { foodId } = useParams();
  const [recipe, setRecipe] = useState(
    recipeBook.find((food) => food.id === foodId)
  );
  console.log(recipe);
  return (
    <div className="card mb-3">
      <img className="card-img-top" src={recipe.image} alt="Card image cap" />
      <div className="card-body">
        <h5 className="card-title">{recipe.name}</h5>
        <p className="card-text">Calories: {recipe.calories}</p>
        <p className="card-text">
          <small class="text-muted">Serving: {recipe.servings}</small>
        </p>
      </div>
    </div>
  );
}

export default itemDetails;
