import React, { Component } from 'react';

// import {
//   BrowserRouter as Router,
//   Route,
//   Link
// } from 'react-router-dom'

import Nav from './Nav';
import Splash from './Splash';
import Content from './Content';
import Footer from './Footer';

// import NotFound from './NotFound';
// import logo from './logo.svg';
import './App.css';

const sectionNames = ["about", "projects", "cv"];
// const sectionNames = ["about"];


class App extends Component {
  render() {
    return (
    // <BrowserRouter>
    //   <div>
    //     <Match exactly pattern="/" component={Splash} />
    //     <Match exactly pattern="/:sectionId" component={Section} />
    //     <Miss component={NotFound} />
    //   </div>

    // </BrowserRouter>

    <div>
      <Nav />
      <Splash />
      <Content sections={sectionNames} />
      <Footer />
    </div>
    );
  }
}

export default App;
