import React from 'react';
import Banner from './Banner';
// import Order from './Order';
// import Inventory from './Inventory';

import AboutMe from './AboutMe';
import Projects from './Projects';
import Cv from './Cv';

const sections = {
  about: AboutMe,
  projects: Projects,
  cv: Cv
};

const banners = {
  about: {
    cssClass: "is-primary",
    heading: "About Me",
    subtitle: "How I think and what I like",
    secondSubtitle: "𝞫 This section is in beta."
  },
  projects: {
    cssClass: "is-success",
    heading: "Projects",
    subtitle: "Things I've done",
    // secondSubtitle: "𝞫 This section is in beta."
  },
  cv: {
    cssClass: "is-warning",
    heading: "CV",
    subtitle: "Hire me!",
    secondSubtitle: "𝞫 This section is in beta."
  }
};


export default (props) => {
  console.log(props.section)
  const SectionBody = sections[props.section];
  console.log(SectionBody)
  const banner=banners[props.section];
      console.log(banners)
          console.log(banner)


  return (
    <div>
      <a name={props.section} id={props.section}></a>
      <Banner values={banner}/>
      <section className="section">
        <div className="container">
          <SectionBody />
        </div>
      </section>
    </div>
  )
}