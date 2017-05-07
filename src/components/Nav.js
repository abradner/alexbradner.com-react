import React from 'react';

export default (props) => {
  return (
  <section>
    <nav className="nav nav-underlay">

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

      <div className="nav-center">
        <a href="#top" className="nav-item" alt="Back to Top">
          <span className="is-hidden-mobile">Back to Top</span>
          <span className="is-hidden-tablet icon">
                <i className="fa fa-arrow-circle-up"></i>
      </span>
        </a>
      </div>

      {/* This "nav-toggle" hamburger menu is only visible on mobile */}
      {/* You need JavaScript to toggle the "is-active" class on "nav-menu" */}
      <span className="nav-toggle" id="nav-toggle-overlay">
    <span></span>
      <span></span>
      <span></span>
      </span>

      {/* This "nav-menu" is hidden on mobile */}
      {/* Add the modifier "is-active" to display it on mobile */}
      <div className="nav-right nav-menu" id="nav-menu-overlay">
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
  </section>
  )
}
