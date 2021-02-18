import React from 'react'
import './App.css';
// import axios from 'axios'
import axios from 'axios';
import {
  BrowserRouter as Router,
  Switch,
  Link,
  Route
} from 'react-router-dom'


import Login from './components/Login/login'
import Signup from './components/signup/signup'
import Dashboard from './components/dashboard/dashboard'

function App() {
  React.useEffect(() => {
    axios.get(`https://www.reddit.com/r/reactjs.json`)
      .then(res => {
        const newPosts = res.data.data.children
          .map(obj => obj.data);

        setPosts(newPosts);
        console.log(newPosts);
      });
  }, []);

  const [posts, setPosts] = React.useState([]);





  return (
    <div>
      <nav>
        <div>

          <div>
            <Router>
              <Link to='/login'>
                <button type="button" className="btn btn-outline-primary mb-3 btnLogi">Login</button>

              </Link><br />
              <Link to='/signup'>
                <button type="button" className="btn btn-outline-primary mb-3 btnLogi">Sign Up</button>

              </Link><br />
              <Link to='/'>
                <button type="button" className="btn btn-outline-primary mb-3 btnLogi">Daschboard</button>

              </Link>

              <Switch>
                <Route exact path='/'>
                  <Dashboard />
                </Route>
                <Route path='/signup' >
                  <Signup />
                </Route>
                <Route path="/login">
                  <Login />

                </Route>
              </Switch>
            </Router>

          </div>

        </div>
      </nav>

    </div>
  )
}

export default App;
