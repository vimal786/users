import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import About from './componants/pages/About';
import Contact from './componants/pages/Contact';
import Home from './componants/pages/Home';
import Navbar from './componants/layout/Navbar';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import NotFound from './componants/pages/NotFound';
import AddUser from './componants/users/AddUser';
import EditUser from './componants/users/EditUser';
import User from './componants/users/User';

function App() {
  
  return (

    <BrowserRouter>
      <div className="App">
          <Navbar />
          
              <Switch>

                  <Route exact path="/" component={Home}></Route>
                  <Route exact path="/about" component={About} ></Route>
                  <Route exact path="/contact" component={Contact} ></Route>
                  <Route exact path="/users/add" component={AddUser} ></Route>
                  <Route exact path="/users/edit/:id" component={EditUser} ></Route>
                  <Route exact path= "/users/:id" component={User}></Route>
                  <Route component={NotFound}  ></Route>

              </Switch>
      </div>
    </BrowserRouter>

  );
}

export default App;
