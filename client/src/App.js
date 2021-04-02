import { BrowserRouter, Switch, Route } from "react-router-dom";
import { HomeScreen, CategoryScreen, SingleScreen, NotFound } from "./screens";

function App() {

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <HomeScreen />
        </Route>
        <Route path="/category">
          <CategoryScreen />
        </Route>
        <Route path="/single">
          <SingleScreen />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
