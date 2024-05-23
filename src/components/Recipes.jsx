import data from "../assets/data.json"
import { useState } from "react";
import ItemCard from "./ItemCard";

function Recipes(){
    const [recipeBook, setRecipesBook] = useState(data);

    const deleteRecipe = (recipeId) => {
        const filterRecipes = recipeBook.filter((recipe) => {
            return recipe.id !== recipeId;
        });
        setRecipesBook(filterRecipes);
    };

    return(
        <div className="recipeList">
            {recipeBook.map((recipe) => {
                return(
                 <ItemCard key={recipe.id} recipe={recipe} deleteRecipe={deleteRecipe} />
                )
            })}
        </div>
    )
}
export default Recipes;