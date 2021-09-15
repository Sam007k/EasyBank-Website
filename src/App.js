import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Features from "./components/Features";
import LatestArticles from "./components/LatestArticles";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Route>
        <div className="container">
          <Navbar />
          <Main />
          <Features />
          <LatestArticles />
          <Footer />
        </div>
      </Route>
    </Router>
  );
}

export default App;
