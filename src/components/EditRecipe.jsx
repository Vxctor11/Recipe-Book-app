// import { useState } from "react";
// import { useParams } from "react-router-dom";
// import { useNavigate } from "react-router-dom";

// function EditRecipe({ recipeBook, setRecipesBook }) {
//   const { recipeId } = useParams();

//   const navigate = useNavigate();

//   const [recipeBookToEdit, setRecipesBookToEdit] = useState(
//     recipes.find((recipes) => recipes.id === recipesId)
//   );

//   const handleSubmit = (event) => {
//     event.preventDefault();

//     setRecipesBook((prev) =>
//       prev.map((recipes) => {
//         if (recipes.id === recipesId) {
//           recipes = recipeBookToEdit;
//         }
//         return recipes;
//       })
//     );

//     navigate("/");
//   };

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <span>Add a Recipe</span>
//         <div>
//           <label>
//             Name
//             <input
//               name="name"
//               type="text"
//               placeholder="Name"
//               value={food.name}
//               onChange={(event) => {
//                 setFood((prev) => ({
//                   ...prev,
//                   [event.target.name]: event.target.value,
//                 }));
//               }}
//             />
//           </label>
//           <label>
//             Calories
//             <input
//               name="calories"
//               type="number"
//               value={foodToEdit.calories}
//               minLength={6}
//               maxLength={2}
//               onChange={(event) => {
//                 setFoodToEdit((prev) => ({
//                   ...prev,
//                   [event.target.name]: event.target.value,
//                 }));
//               }}
//             />
//           </label>
//           <label>
//             Image
//             <input
//               name="image"
//               type="url"
//               placeholder="Image"
//               value={foodToEdit.image}
//               onChange={(event) => {
//                 setFoodToEdit((prev) => ({
//                   ...prev,
//                   [event.target.name]: event.target.value,
//                 }));
//               }}
//             />
//           </label>
//           <label>
//             Servings
//             <input
//               name="servings"
//               type="number"
//               value={foodToEdit.servings}
//               placeholder="Servings"
//               minLength={1}
//               maxLength={3}
//               min={1}
//               max={100}
//               onChange={(event) => {
//                 setFoodToEdit((prev) => ({
//                   ...prev,
//                   [event.target.name]: event.target.value,
//                 }));
//               }}
//             />
//           </label>

//           <button type="submit">Edit the Recipe</button>
//         </div>
//       </form>
//     </div>
//   );
// }
// export default EditRecipe;
