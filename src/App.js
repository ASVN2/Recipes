import Home from "./Componants/Home";
import Navbar from "./Componants/Navbar/Navbar";
import NewRecipe from "./Componants/NewRecipe/NewRecipe";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom/cjs/react-router-dom.min";

const App = () => {
  return (
    <Router>
      <div className="app container mx-auto">
        <Navbar />
        <Switch>
          <Route path="/">
            <Home />
          </Route>
          <Route path="/D">
            <NewRecipe />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};
export default App;
