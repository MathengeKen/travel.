import "./styles.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./routes/Home";
import Contacts from "./routes/Contacts";
import About from "./routes/About";
import Gallery from "./routes/Gallery";
import Packages from "./routes/Packages";
import Shop from "./routes/Shop";

export default function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/about" element={<About />} />
          {/* <Route path="/gallery" element={<Gallery />} />
          <Route path="/packages" element={<Packages />} /> */}
          <Route path="/shop" element={<Shop />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}
