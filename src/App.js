import Navbar from "./Components/Navbar";
import Banner from "./Components/Banner";
import Movies from "./Components/Movies";
import Favourite from "./Components/Favourite";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route
          path="/"
          exact
          render={(props) => (
            <>
              <Banner {...props} />
              <Movies {...props} />
            </>
          )}
        />
        <Route path="/favourites" component={Favourite} />
      </Switch>
      {/* <Movies />
      <Favourite /> */}
    </Router>
  );
}

export default App;
