import React, {useEffect, useState} from 'react'
import '../styles/App.css';

const App = () => {
//code here 
const [color, setColor] = useState('redColor');
  const toggle =()=>{
    if(color === 'redColor'){
      setColor('blueColor')
    }
    else{
      setColor('redColor')
    }
  }
  return (
    <div id="main">
      <p className={color} >Newton School</p>
      <button id='button' onClick={toggle}>Change Style</button>
    </div>
  )
}

export default App;
