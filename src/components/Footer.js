import React from 'react';

export default (props) => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="content has-text-centered">
          <p className="ab-logo">
            ab
          </p>
          <p>
            Website and content by Alex Bradner <span className="icon"><i className="fa fa-copyright"></i></span> 2017 All rights reserved
          </p>
          <p>
            Built using open source technologies
            <a className="icon" href="http://bulma.io">
              <img src="http://bulma.io/favicons/safari-pinned-tab.svg" className="fa" />
            </a>
            <a className="icon" href="fontawesome.io">
              <i className="fa fa-font-awesome"></i>
            </a>
          </p>
          <p>
            Updated 2017-05-07
          </p>
        </div>
      </div>
    </footer>
  )
}