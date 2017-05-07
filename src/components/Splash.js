import React from 'react';
// import Header from './Header';
// import Order from './Order';
// import Inventory from './Inventory';

export default class App extends React.Component {
  render() {
    return (
  // Splash
  <section className="hero is-info is-fullheight z-high">
    {/* Hero header: will stick at the top */}


    {/* Hero content: will be in the middle */}
    <div className="hero-body">
      <div className="container has-text-centered">
        <h1 className="title">
          Alex Bradner
        </h1>
        <h2 className="subtitle">Enterpreneur. Full Stack Dev. Skill Collector.</h2>
        <h2>
          (A Primer)
        </h2>
      </div>
    </div>
    <div className="hero-body is-hidden-tablet">

      <div className="container has-text-centered is-fullheight">
        <a href="#about"><span className="icon is-large">
        <i className="fa fa-arrow-circle-down"></i>
      </span></a>

      </div>

    </div>

    {/* Hero footer: will stick at the bottom */}
    <div className="hero-foot">

      <div id="arrow-desktop" className="hide">
        <div className="columns is-hidden-mobile has-text-right">
          <div className="column is-1-tablet is-offset-10-tablet is-1-widescreen is-offset-11-widescreeen"> <span className="icon is-large">
        <i className="fa fa-arrow-circle-down"></i>
      </span>
          </div>
        </div>
      </div>
      <a name="about" id="about"></a>

      <nav className="nav">
        <div className="nav-left">
          <a className="nav-item" href="https://github.com/abradner" target="_blank">
            <span className="icon">
        <i className="fa fa-github"></i>
      </span>
            <span className="is-hidden-mobile">GitHub</span>
          </a>
          <a className="nav-item" href="https://twitter.com/abradner" target="_blank">
            <span className="icon">
        <i className="fa fa-twitter"></i>
      </span>
            <span className="is-hidden-mobile">Twitter</span>

          </a>
          <a className="nav-item" href="https://www.linkedin.com/in/alexbradner/" target="_blank">
            <span className="icon">
        <i className="fa fa-linkedin-square"></i>
      </span>
            <span className="is-hidden-mobile">LinkedIn</span>

          </a>
          <a className="nav-item" href="http://www.ramblin.gs" target="_blank">
            <span className="icon">
        <i className="fa fa-wordpress"></i>
      </span>
            <span className="is-hidden-mobile"> Blog</span>

          </a>
        </div>

        {/* This "nav-toggle" hamburger menu is only visible on mobile */}
        {/* You need JavaScript to toggle the "is-active" class on "nav-menu" */}
        <span className="nav-toggle" id="nav-toggle-underlay">

    <span></span>
        <span></span>
        <span></span>

        </span>

        {/* This "nav-menu" is hidden on mobile */}
        {/* Add the modifier "is-active" to display it on mobile */}
        <div className="nav-right nav-menu" id="nav-menu-underlay">
          <a href="#about" className="nav-item">
      About Me
    </a>
          <a href="#projects" className="nav-item">
      Projects
    </a>
          <a href="#cv" className="nav-item">
      CV
    </a>

        </div>
      </nav>
    </div>
  </section>
    )
  }
}
