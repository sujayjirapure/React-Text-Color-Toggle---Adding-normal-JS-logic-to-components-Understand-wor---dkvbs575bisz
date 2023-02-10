import React, {useEffect, useState} from 'react'
import '../styles/App.css';

const App = () => {
  const [Show ,setShow] = useState(false);

  const clickfunc = () => {
    setShow(!Show);
  }

  return (
    <div id="main">
      {Show ?
      <p className="redColor">Newton School</p>
      :
      <p className="blueColor">Newton School</p>
      }
      <button id='button' onClick={clickfunc}>Change Style</button>
    </div>
  );
};


export default App;
