import TextEditor from "./TextEditor";
import {ChakraProvider} from '@chakra-ui/react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import {v4 as uuidV4} from 'uuid';
import Home from "./Home/Home";
import Navbar from "./Layout/Navbar";

function App() {

  return (
    <ChakraProvider>
      <Router>
      <Navbar/>
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
    </ChakraProvider>
  );
}

export default App;
