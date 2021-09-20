import React, { lazy, Suspense } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Routes } from "constants/Routes";

import { Layout } from "components/Layout";

const Competition = lazy(() => import("pages/competition"));
const Competitions = lazy(() => import("./pages/competitions"));
const Team = lazy(() => import("./pages/team"));
const Teams = lazy(() => import("./pages/teams"));

const App: React.FC<any> = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={false}>
        <Layout>
          <Switch>
            <Route exact path={Routes.ROOT} component={Competitions} />
            <Route path={Routes.COMPETITION} component={Competition} />
            <Route path={Routes.TEAM} component={Team} />
            <Route path={Routes.TEAMS} component={Teams} />
          </Switch>
        </Layout>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
