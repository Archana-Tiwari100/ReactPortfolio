import React from 'react'; 
import Summary from './summary';
import Experience from './Experience';
import Education from './Education';
import Skills from './Skills';




const App = () => {
  return (
    <div>
      <h1>Welcome to My Live React App</h1>
      <br />
      <Summary />
      <br />
      <Education />
      <br />
      <Experience />
      <br />
      <Skills />
      <br />
    </div>
  );
};

export default App;
