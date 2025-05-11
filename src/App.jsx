import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import PageNotFound from "./components/PageNotFound";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<PageNotFound />} />
        <Route path="/menu" element={<PageNotFound />} />
        <Route path="/services" element={<PageNotFound />} />
        <Route path="/order-online" element={<PageNotFound />} />
        <Route path="/login" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
