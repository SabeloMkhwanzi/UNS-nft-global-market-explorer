import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LandingPage from "./pages/Landing";
import CollectionView from "./pages/CollectionView";
import NFTView from "./pages/NFTView";
import Hero from "./pages/Hero";
//import Logo from "./assets/logo.svg";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/nft/:address/:id/:chainId">
            <NFTView />
          </Route>
          <Route path="/collection/:address/:id">
            <CollectionView />
          </Route>
          <Route path="/LandingPage" component={LandingPage} />
          <Route path="/" component={Hero} />
        </Switch>
      </Router>
      {/* <div className="logo">
        <img alt="" src={Logo}></img>
      </div> */}
    </div>
  );
}

export default App;
