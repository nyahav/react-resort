import React from 'react';

import './App.css';
import Home from './pages/Home';
import Error from './pages/Error';
import Rooms from './pages/Rooms';
import SingleRoom from './pages/SingleRoom';
import Navbar from './components/Navbar';
import {Route,Switch} from 'react-router-dom';


function App() {
  return (
    <div className="App">
     <>
     <Navbar/>
     <Switch>
     <Route exact path="/" component={Home} />
     <Route exact path="/Rooms/" component={Rooms} />
     <Route exact path="/Rooms/:slug" component={SingleRoom} />
     <Route component={Error}/>
      </Switch>

     </>
    </div>
  );
}

export default App;
