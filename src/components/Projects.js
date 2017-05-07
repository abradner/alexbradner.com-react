import React from 'react';

export default (props) => {
  return (
    <div className="content">

      <section className="section" id="project-foogi">
        <div className="columns is-mobile">
          <div className="column is-narrow">
            <img src="images/foogi-web-icon.png" className="image is-32x32 is-hidden-tablet" />
            <img src="images/foogi-web-icon.png" className="image is-64x64 is-hidden-mobile" />
          </div>
          <div className="column">
            <div className="columns">
              <div className="column">
                <h2 className="heading">Foogi</h2>
                <h4 className="subheading">Smart Outbound Scheduling for Sales</h4>
              </div>
              <div className="column">
                <h6>Technologies:</h6>
                <p>Ruby on Rails, EmberJS, CSS, Bootstrap, Postgres, AWS, Firebase, OAuth2, RESTful APIs</p>
                <h6>Skills:</h6>
                <p>Lean MVP design, customer interaction, UX, Marketing, SEO, growth strategies, raising capital, teamwork,
                  remote teamwork, leadership, self-motivation, flexibility, cost/benefit analysis, small business financials,
                  company directorship, Kanban development</p>
              </div>
            </div>
          </div>
        </div>

        <p>Scheduling is complicated.</p>
        <p>The focus of my life for the last 3 years.</p>
        <h3>The Problem</h3>
        <p>No one wants to share their calendar with strangers on the internet, or worse, someone who wants to sell you something.</p>
        <p>Tony Ockleshaw head of Sales at Tigerspike has said that "Getting the first meeting feels as good as making a sale",
          but how do you get that first meeting?</p>
        <p>Without transparency into your lead's calendar (which you're not going to get) there's a lot of friction and pain
          as you play phone or email tag to try to negotiate a timeslot.</p>
        <p>So how do you build trust?</p>
        <h3>The Solution</h3>
        <p>Foogi.</p>
        <p>
          A secure, private platform that lets you visually and intelligently compare your calendars without sharing any private data.
          Foogi lets you transparently book meetings with clients without sharing any calendar events, just live availability
        </p>
        <p>Integrated into your email and calendar across Google Apps, Office 365 and soon iCloud.</p>

        <p>But this is just the first step.</p>
        <p>
          Currently under development is the technology to securely build insights into our users' calendar data without ever exposing
          that calendar data to Foogi or anyone else.
        </p>
        <p>In other words, we are building an intelligent, private suggestion engine that never exposes <em>any</em> personal
          data to either party or Foogi.</p>
        <p>When it comes to scheduling tools, people often say <em>"Fast, Simple or Secure: Pick two"</em>. We believe you
          can have all three.</p>
        <p>
          <a href="http://www.foogi.me/" target="_blank">
            visit           
            <span className="icon is-small">
              <i className="fa fa-external-link-square"></i>
            </span>
          </a>
        </p>
      </section>

        <section className="section" id="project-foogi">
        <div className="columns is-mobile">
          <div className="column is-narrow">
            <img src="images/cucp-screenshot.png" className="image is-32x32 is-hidden-tablet" />
            <img src="images/cucp-screenshot.png" className="image is-64x64 is-hidden-mobile" />
          </div>
          <div className="column">
            <div className="columns">
              <div className="column">
                <h2 className="heading">The Command Post</h2>
                <h4 className="subheading">Handling the administrative tasks of a 600-member Cadet Unit base of operations in the field.</h4>
              </div>
              <div className="column">
                <h6>Challenges:</h6>
                <p>Offline, Must be platform agnostic, must be built from the ground up in a week, data integrity is critical, must be maintainable by students with little to no time nor experiece, must teach maintianing students valuable skills</p>
                <h6>Technologies:</h6>
                <p>Electron, NodeJS, ES6, EmberJS, Pouch/CouchDB, CSS, Bootstrap</p>
              </div>
            </div>
          </div>
        </div>

        <h3>Scenario:</h3>
        <p>Saturday, March 25th: A message arrives from a student at my old high school - home of the largest cadet unit in the southern hemisphere.</p>
        <blockquote><p>Can you make some changes to that software you wrote for us in 2005? Before camp next weekend?</p></blockquote>
        <p>Damn. that was in VB .Net 2.0, before I even used source control, and I've had data loss at least once since then.</p>
        <p>Hmm.</p>
        <p>Can I rebuild it in my spare time within a week? Let's give it a go!</p>
        <h3>Requirements</h3>
        <p>The app currently runs on an old-ish laptop with no reliable internet access (remote camp locations) and unreliable power (generators go down every 8 hours for refuel)</p>
        <p>The current hardware is end-of-life and the rebuild shouldn't tie the school into any infrastructure decisions, rather, it needs to be as platform agnostic as possible &mdash; if the cadet unit decides to use ruggardised tablets instead of a windows laptop, or maybe a home-built station using a raspberry pi, the solution should be adaptive not restrictive.</p>
        <p>I don't want to be the single point of failure maintaining this tool. Also, this is the perfect opportunity for budding engineers to learn modern software development tools and techniques, so the app needs to be built well using future-employable languages and tools</p>
        <h3>The result</h3>
        <p>The app was built and is a massive improvement on its predecessor (unsurprisingly). BUT this is actually a catalyst for the creation of a platoon of students who will be responsible for building and maintaining advanced technological tools used by the unit.</p>
        <p>Stay tuned!</p>
        <p>
          <a href="https://github.com/abradner/cucp-ember-electron" target="_blank">
            github           
            <span className="icon is-small">
              <i className="fa fa-external-link-square"></i>
            </span>
          </a>
        </p>
      </section>


      <section className="section" id="project-swb">
        <div className="columns is-mobile">
          <div className="column is-narrow">
            <img src="images/swb-ct-logo.png" className="image is-32x32 is-hidden-tablet" />
            <img src="images/swb-ct-logo.png" className="image is-64x64 is-hidden-mobile" />
          </div>
          <div className="column">
            <div className="columns">
              <div className="column">
                <h2 className="heading">Startup Weekend Brisbane 2017</h2>
                <h4 className="subheading">Project: Underscored - Supporting Emerging Bands Online</h4>
                <h6 className="subheading">A Creative Tech startup built in 54 Hours</h6>
              </div>
              <div className="column">
                <h6>Skills:</h6>
                <p>Lean MVP design, collaboration, customer interaction, UX, Marketing, teamwork, leadership, self-motivation,
                  flexibility, communication, presentation, adapting to sudden change.
                </p>
                <h6>Challenges Overcome:</h6>
                <p>Unifying a team of strong egos, customer development in a unfamiliar space, rapid pivots and iteration.
                  flexibility
                </p>
              </div>
            </div>
          </div>
        </div>

        <p>
          A startup with a validated business model and customers after a weekend of work is <strong>deeply</strong> satisfying.
        </p>
        <p>
          Taking everything I've learnt in the past three years and applying it in a super-concentrated, raw weekend of power was mindblowing.
          I'll write up a decent analysis of the weekend when I get a moment to myself.
        </p>
        <p>But for now, have a look at our
          <a href="https://www.facebook.com/qutcea/videos/1487379564619596/" target="_blank">
            first pitch 
            <span className="icon is-small">
              <i className="fa fa-external-link-square"></i>
            </span>
            </a> (technical troubles and mistakes included) and the accompanying
          <a href="https://docs.google.com/presentation/d/1lAdOfGaBxJpNMBe-N68qHUuCqey2v364Wb7go0PW71Y/edit?usp=sharing" target="_blank">
              slide deck 
              <span className="icon is-small">
                <i className="fa fa-external-link-square"></i>
              </span>
            </a>
        </p>
      </section>

      <section className="section" id="project-holistic-auth">
        <div className="columns is-mobile">
          <div className="column is-narrow">
            <img src="images/osi_symbol.png" className="image is-32x32 is-hidden-tablet" />
            <img src="images/osi_symbol.png" className="image is-64x64 is-hidden-mobile" />
          </div>
          <div className="column">
            <div className="columns">
              <div className="column">
                <h2 className="heading">Holistic Auth</h2>
                <h4 className="subheading">Simplified, multi-provider OAuth2 authentication <em>and</em> API consumption for Rails and Single Page
                  Apps
                </h4>
                <h6 className="subheading">(just rolls off the tongue, doesn't it?)</h6>
              </div>
              <div className="column">
                <h6>Technologies:</h6>
                <p>OAuth2, SSL, Ruby, Rails, Google APIs, Microsoft Office 365 / Graph APIs, REST, CI</p>
                <h6>Skills:</h6>
                <p>API Design, Security Design, integration testing, behaviour-driven development, mitigating code smells,
                  microservice design, self-motivation</p>
              </div>
            </div>
          </div>
        </div>

        <p>Simplifying OAuth2 authentication <em>and</em> API consumption</p>
        <p>OAuth2 login for your SPA React or Ember front-end app? Easy. Just copy and paste a snippet.</p>
        <p>How about a traditional server-rendered Rails app? Still easy. Copy and paste a snippet, maybe map some column
          names.
        </p>
        <p>Integrating a single flow that authenticates with your backend and authorises your front-end session in a transparent
          manner to your user? That's hard.</p>
        <p>What if you want to consume that identity provider's API to manage their calendar, contacts etc as well? Now it's
          really tricky.</p>
        <p>Holistic Auth handles all the boilerplate of dealing with providers like Google and Microsoft, exposing a clean
          API to developers and can be easily extended to support new providers (eg LinkedIn or Facebook).</p>
        <p>You're welcome.</p>
        <p>
          <a href="https://github.com/abradner/holistic_auth" target="_blank">
            github           
            <span className="icon is-small">
              <i className="fa fa-external-link-square"></i>
            </span>
          </a>
        </p>

      </section>

      <section className="section" id="project-homely">
        <div className="columns is-mobile">
          <div className="column is-narrow">
            <img src="images/oshw-logo-400-px.png" className="image is-32x32 is-hidden-tablet" />
            <img src="images/oshw-logo-400-px.png" className="image is-64x64 is-hidden-mobile" />
          </div>
          <div className="column">
            <div className="columns">
              <div className="column">
                <h2 className="heading">Homely</h2>
                <h4 className="subheading">Device-agnostic Home Automation</h4>
              </div>
              <div className="column">
                <h6>Technologies:</h6>
                <p>Digital &amp; Analog circuits, Embedded Systems, C, Java, Android, Arduino, Ruby, Rails, Websockets, CI</p>
                <h6>Skills:</h6>
                <p>Collaboration &amp; teamwork, UX, flexibility, presentation, agile development, hardware hacking, prototyping
                  &amp; soldering</p>
              </div>
            </div>
          </div>
        </div>

        <p>Have you bought a smart thingy from somewhere that insists on using its own app? Maybe it comes with a weird and
          complicated remote that's entirely unnecessary.</p>
        <p>Homely will have it talking with everything else you own and you can control it all from your phone.</p>
        <p>
          I started work on this in 2012, before the announcement of HomeKit, before Google Weave and before the conception of NinjaBlocks'
          Ninja Sphere. This is <em>still</em> an ongoing problem that Google, Apple and everyone else have
          failed to tackle.
        </p>
        <p>
          Apart from Homely, the first actual viable commercial solution I've found is XiaoMi's MiHome, and that's still full of issues.
        </p>
        <p>I feel I owe the world an apology for abandoning this project but you gotta eat some times.</p>
        <p>
          <a href="https://github.com/abradner/homely" target="_blank">
            github           
            <span className="icon is-small">
              <i className="fa fa-external-link-square"></i>
            </span>
          </a>
        </p>

      </section>
    </div>
  )
};