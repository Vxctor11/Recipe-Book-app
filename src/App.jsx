import "./App.css";
// import EditRecipe from "./components/EditRecipe.jsx";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/dashboard.jsx";
import ItemDetails from "./pages/itemDetails.jsx";
import AboutPage from "./pages/aboutPage.jsx";
import ErrorPage from "./pages/errorPage.jsx";
import { useState } from "react";
import data from "./assets/data.json";

function App() {
  const [recipeBook, setRecipesBook] = useState(data);
  return (
    <div>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <Dashboard
              recipeBook={recipeBook}
              setRecipesBook={setRecipesBook}
            />
          }
        />
        <Route path="/itemDetails" element={<ItemDetails />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      {/* <EditRecipe /> */}
      <Sidebar />
      <Footer />
    </div>
  );
}

export default App;
