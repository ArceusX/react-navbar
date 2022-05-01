import React, { useRef, useEffect } from 'react';
import { HashRouter, NavLink, Switch, Route, useLocation } from 'react-router-dom';
import './App.css';
import Home from './pages';
import About from './pages/about';
import Contact from './pages/contact';
import SignUp from './pages/signup';
import Footer from './pages/footer';

function App() {

  const navbarLinks = useRef(null);
  const handleNavbarButton = (e) => {
    navbarLinks.current.classList.toggle('menu-collapse');
  };

  const hideNavMenu = () => {
    if (!navbarLinks.current.classList.contains('menu-collapse')) {
      navbarLinks.current.classList.add('menu-collapse');
    }
  }

  return (
    <div className="App">
      <HashRouter basename={process.env.PUBLIC_URL}>
        <nav className='navbar'>
          <div className='navbar-container'>
            <a href="#" className='brand-title'>Brand Name</a>
            <button onClick={(e) => { handleNavbarButton(e); }} className='navbar-toggler'>
              <span className='navbar-toggler-icon'></span>
            </button>
            <div ref={navbarLinks} className='navbar-links menu-collapse'>
              <ul className='links-list'>
                <li className='nav-item'>
                  <NavLink activeClassName='is-active' exact={true} className='nav-link' to='/'>Home</NavLink>
                </li>
                <li className='nav-item'>
                  <NavLink activeClassName='is-active' exact={true} className='nav-link' to='/about'>About</NavLink>
                </li>
                <li className='nav-item'>
                  <NavLink activeClassName='is-active' exact={true} className='nav-link' to='/contact'>Contact Us</NavLink>
                </li>
                <li className='nav-item'>
                  <NavLink activeClassName='is-active' exact={true} className='nav-link' to='/signup'>Signup</NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div className='container'>
          <AllRoutes hideMenu={() => { hideNavMenu(); }}></AllRoutes>
        </div>
        <Footer />

      </HashRouter>
    </div>
  );
}

function AllRoutes({ hideMenu }) {

  let location = useLocation();
  useEffect(() => {
    hideMenu();
  }, [location]);

  return (
    <Switch>
      <Route path="/signup" component={SignUp}>
      </Route>
      <Route path="/about" component={About}>
      </Route>
      <Route path="/contact" component={Contact}>
      </Route>
      <Route path="/" component={Home}>
      </Route>
    </Switch>
  );
}
export default App;
