import React from 'react';

export default (props) => {
  return (
   <section className={`hero is-medium is-bold ${props.values.cssClass}`}>
    <div className="hero-body">
      <div className="container">
        <h1 className="title">
          <span className="icon is-medium">
            <i className="fa fa-user-circle"></i>
          </span> {props.values.heading}
        </h1>
        <h2 className="subtitle">
          {props.values.subtitle}
        </h2>
        <h2 className="subtitle">
          {props.values.secondSubtitle}
        </h2>

      </div>
    </div>
  </section>
 )
}