import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/dashboard.jsx";
import ItemDetails from "./pages/itemDetails.jsx"
import AboutPage from "./pages/aboutPage.jsx";
import ErrorPage from "./pages/errorPage.jsx"


function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard/>} />
        <Route path="/itemDetails" element={<ItemDetails/>} />
        <Route path="/about" element={<AboutPage/>} />
        <Route path="*" element={<ErrorPage/>} />
        </Routes>
      <Sidebar />
      <Footer />
    </div>
  );
}

export default App;
