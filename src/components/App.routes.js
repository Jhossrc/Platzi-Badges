// React
import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

// Layout
import Layout from "./Layout";

//Pages
import NotFound from "../pages/NotFound"
import Badges from "../pages/Badges";
import BadgeNew from "../pages/BadgeNew";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path='/badges' component={Badges} />
          <Route exact path='/badges/new' component={BadgeNew} />
          <Route component={NotFound} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
