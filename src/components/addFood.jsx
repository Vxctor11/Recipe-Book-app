import { useState } from "react";

const newFood = {
  id: "",
  name: "",
  calories: "",
  image: "",
  servings: "",
};

const AddFood = ({ recipeBook, setRecipesBook }) => {
  const [food, setFood] = useState(newFood);

  const handleSubmit = (e) => {
    console.log("click");
    e.preventDefault();

    setRecipesBook((prev) => [food, ...prev]);
  };

  return (
    <div>
      {/* FORM */}
      <form onSubmit={handleSubmit}>
        <span>Add A New Recipe</span>
        <div>
          <label>
            Name
            <input
              name="name"
              type="text"
              placeholder="Name"
              value={food.name}
              onChange={(e) => {
                setFood((prev) => ({
                  ...prev,
                  [e.target.name]: e.target.value,
                }));
              }}
            />
          </label>
          <label>
            Calories
            <input
              name="calories"
              type="number"
              value={food.calories}
              minLength={6}
              maxLength={2}
              onChange={(e) => {
                setFood((prev) => ({
                  ...prev,
                  [e.target.name]: e.target.value,
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
              value={food.image}
              onChange={(e) => {
                setFood((prev) => ({
                  ...prev,
                  [e.target.name]: e.target.value,
                }));
              }}
            />
          </label>
          <label>
            Servings
            <input
              name="servings"
              type="number"
              value={food.servings}
              placeholder="Servings"
              minLength={1}
              maxLength={3}
              min={1}
              max={100}
              onChange={(e) => {
                setFood((prev) => ({
                  ...prev,
                  [e.target.name]: e.target.value,
                }));
              }}
            />
          </label>

          <button type="submit">Add Recipe</button>
        </div>
      </form>
    </div>
  );
};
export default AddFood;
