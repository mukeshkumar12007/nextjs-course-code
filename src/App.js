import { Route, Switch } from 'react-router-dom';
import AllMeetups from "./components/pages/AllMeetups";
import NewMeetups from "./components/pages/NewMeetup";
import Favorites from "./components/pages/Favorites";

function App() {
  return (
    <div>
      <Switch>
      <Route path="/" exact>
        <AllMeetups />
      </Route>
      <Route path="/new-meetup">
        <NewMeetups />
      </Route>
      <Route path="/favorites">
        <Favorites />
      </Route>
      </Switch>
    </div>
  );
}

export default App;
