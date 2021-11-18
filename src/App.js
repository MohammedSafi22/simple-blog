import NavBar from './components/NavBar';
import Home from './components/Home';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Create from './components/Create';
import BlogDetailes from './components/BlogDetailes';
import NotFound from './components/NotFound';

function App() {
  return (
    <Router>
    <div className="App">
          <NavBar />
        <div className="content">
           <Switch>
              <Route exact path="/">
                  <Home />
              </Route>
              <Route exact path="/create">
                  <Create />
              </Route>
              <Route exact path="/blogs/:id">
                  <BlogDetailes />
              </Route>
              <Route path="*">
                <NotFound />
              </Route>
           </Switch>
        </div>
    </div>
    </Router>
  );
}

export default App;
