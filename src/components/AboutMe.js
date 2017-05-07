import React from 'react';

export default (props) => {
  return (
    <div className="content">
        {/*<h2 className="heading">
          Values
        </h2>
        <p>Be Nice.</p>*/}

        <h2 className="heading">
          Philosophies
        </h2>
        <div className="columns">
          <div className="column">
            <h3>Software</h3>
            <p>Code is read more than its written. Write code that the reader can understand, even if that's future you. </p>
            <p>Write as little code as possible to solve the task </p>
            <p>Understanding why you're doing something is far more important than what</p>
          </div>
          <div className="column">
            <h3>Business</h3>
            <p>Figure out what the problem is before you start building solutions.</p>
            <p>Look after your juniors. Their insights aren't constrained by the boundaries we've learnt.</p>
            <p>Validate and/or test before you build. Validate and test once you've built. Analyse and understand the differences.
              I call this Hypothesis-driven development. A logical extension of the scientific method, which goes a little like this:
              </p><small>
              <ol>
                <li>Analyse the problem space</li>
                <li>build a hypothesis</li>
                <li>describe a metric that tests it in isolation</li>
                <li>attempt to validate or disprove it before building anything non-trivial</li>
                <li>refine the hypothesis and metrics with any discoveries if it seems valid</li>
                <li>build the minimum viable product required to fully test this hypothesis</li>
                <li>gather real user data to finally validate the hypothesis</li>
                <li>explore anything additional that has been discovered in the processs.</li>
              </ol>
              The Lean Startup by Eric Reis had some great insight into this, but like all resources it doesn't capture everything</small>
          </div>
          <div className="column">
            <h3>Life</h3>
            <p>Don't use black boxes: Learn how things work, even if you're never going to become an expert. </p>
            <p>Move fast and break things.</p>
            <p>Be nice.</p>
          </div>
        </div>

        <h2 className="heading">
          Outside of work
        </h2>
        <p>I love to tinker, to build and to disassemble.</p>
        <p>I climb things</p>
        <p>All my vehicles have two wheels</p>
        <p>I prefer to game with friends: with cards, boards, dice and online</p>
        <p>My kindle is never far</p>
        <p>I hate filling out these things and would prefer to just introduce myself</p>
      </div>
  )
}