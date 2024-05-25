import React from "react";
import Recipes from "../components/Recipes";
import { useState } from "react";
import AddFood from "../components/addFood";

function Dashboard({ recipeBook, setRecipesBook }) {
  const [recipes, setRecipes] = useState(Recipes);
  const [name, SetName] = useState("");
  const [calories, setCalories] = useState(6, 2);
  const [image, setImage] = useState("");
  const [servings, setServings] = useState(1, 100, 1, 3);
  return (
    <div>
      <AddFood recipeBook={recipeBook} setRecipesBook={setRecipesBook} />
      <Recipes recipeBook={recipeBook} setRecipesBook={setRecipesBook} />
    </div>
  );
}

export default Dashboard;
