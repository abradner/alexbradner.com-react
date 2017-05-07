import React from 'react';
import Section from './Section';

//const sectionNames = ["about", "projects", "cv"];

export default (props) => {
const sections = props.sections.map((name) => 
  <Section section={name} key={name}/>
)

return (
  <div>
  {sections}
  </div>
)

};