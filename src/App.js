import "./styles.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Home from "./Home.js";
import About from "./About.js";
import Contact from "./Contact.js";
import Gallery from "./Gallery.js";
import Page from "./Page.js";

function App() {
  return (
    <BrowserRouter> 
      <nav id="nav">
        <div id="m1">
          <h2>React Developer</h2>
        </div>
        <div id="m2">
          <Link to="/home">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/gallery">Gallery</Link>
          <Link to="/page">Page</Link>
          <button>Join Class</button>
        </div>
      </nav>
      <Routes> 
        <Route path="/home" element={<Home></Home>} />
        <Route path="/about" element={<About></About>} />
        <Route path="/contact" element={<Contact></Contact>} />
        <Route path="/gallery" element={<Gallery></Gallery>} />
        <Route path="/page" element={<Page></Page>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
