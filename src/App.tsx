import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavyBar from './components/navy-bar';
import Home from './components/home';
import Users from './components/users';
import About from './components/about';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Footer from './components/footer';

function App() {
  return (
    <>
      <Router>
        <NavyBar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/users" component={Users} />
          <Route path="/about" component={About} />
        </Switch>
      </Router>
      <Footer />
    </>
  );
}

export default App;
