import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Sandbox from '../Sandbox';

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/home">Home</Route>
        <Route exact path="/sandbox"><Sandbox /></Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
