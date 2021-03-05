import logo from "./logo.svg";
import "./App.css";
import Home from "./pages/home";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import "./index.css";

function App() {
  return (
    <Router>
      <Switch>
        <Route extact path="/" component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
