import TextEditor from "./TextEditor";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import {v4 as uuidV4} from 'uuid';
import Home from "./Home/Home";

function App() {

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route exact path="/documents">
          <Redirect to={`/documents/${uuidV4()}`}/>
        </Route>
        <Route path="/documents/:id">
          <TextEditor/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
