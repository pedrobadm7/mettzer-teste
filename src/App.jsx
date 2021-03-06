import React from "react";
import GlobalStyle from "./styles/global";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import SearchPage from "./pages/SearchPage";


const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/searchpage" component={SearchPage} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
