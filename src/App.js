import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar.jsx";
import Home from "./components/pages/Home.jsx";
import Goals from "./components/pages/Goals";
import Resume from "./components/pages/Resume";
import Projects from "./components/pages/Projects";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/goals" exact component={Goals} />
          <Route path="/resume" exact component={Resume} />
          <Route path="/projects" exact component={Projects} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
