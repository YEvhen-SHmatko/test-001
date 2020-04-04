import React, { Suspense, lazy, Component } from "react";
import { Route, Switch } from "react-router-dom";

const HomePage = lazy(() => import("../../page/HomePage"));
const StatsPage = lazy(() => import("../../page/StatsPage"));
const UserPage = lazy(() => import("../../page/UserPage"));
const error404 = lazy(() => import("../../page/404Page"));

class App extends Component {
  render() {
    return (
      <>
        <Suspense fallback={<div>Загрузка...</div>}>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/user/:id" component={UserPage} />
            <Route path="/stats" component={StatsPage} />
            <Route component={error404} />
          </Switch>
        </Suspense>
      </>
    );
  }
}
export default App;
