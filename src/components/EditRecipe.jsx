import { useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function EditRecipe({ recipeBook, setRecipesBook }) {
  const { recipeId } = useParams();

  const navigate = useNavigate();

  const [recipeBookToEdit, setRecipesBookToEdit] = useState(
    recipeBook.find((recipe) => recipe.id === recipeId)
  );
  console.log(recipeBookToEdit);
  const handleSubmit = (event) => {
    event.preventDefault();

    setRecipesBook((prev) =>
      prev.map((recipe) => {
        if (recipe.id === recipeId) {
          recipe = recipeBookToEdit;
        }
        return recipe;
      })
    );

    navigate("/");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <span>Add a Recipe</span>
        <div>
          <label>
            Name
            <input
              name="name"
              type="text"
              placeholder="Name"
              value={recipeBookToEdit.name}
              onChange={(event) => {
                setRecipesBookToEdit((prev) => ({
                  ...prev,
                  [event.target.name]: event.target.value,
                }));
              }}
            />
          </label>
          <label>
            Calories
            <input
              name="calories"
              type="number"
              value={recipeBookToEdit.calories}
              minLength={6}
              maxLength={2}
              onChange={(event) => {
                setRecipesBookToEdit((prev) => ({
                  ...prev,
                  [event.target.name]: event.target.value,
                }));
              }}
            />
          </label>
          <label>
            Image
            <input
              name="image"
              type="url"
              placeholder="Image"
              value={recipeBookToEdit.image}
              onChange={(event) => {
                setRecipesBookToEdit((prev) => ({
                  ...prev,
                  [event.target.name]: event.target.value,
                }));
              }}
            />
          </label>
          <label>
            Servings
            <input
              name="servings"
              type="number"
              value={recipeBookToEdit.servings}
              placeholder="Servings"
              minLength={1}
              maxLength={3}
              min={1}
              max={100}
              onChange={(event) => {
                setRecipesBookToEdit((prev) => ({
                  ...prev,
                  [event.target.name]: event.target.value,
                }));
              }}
            />
          </label>

          <label>
            Added to the list?
            <input
              type="checkbox"
              onChange={(e) =>
                setRecipesBookToEdit((prev) => ({
                  ...prev,
                  wasAdded: e.target.checked,
                }))
              }
              checked={recipeBookToEdit.wasAdded}
            />
          </label>
          <button type="submit">Edit the Recipe</button>
        </div>
      </form>
    </div>
  );
}
export default EditRecipe;
