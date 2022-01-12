import React from 'react';
import Home from './component/Home';
import About from './component/About';
import Contact from './component/Contact';
import Comp1 from './component/Comp1';
import Comp2 from './component/Comp2';
import Comp3 from './component/Comp3';

/* 1.react funtional component */
function Pavan(){
  return (
    <div>
      <h1>React components</h1>
        <Home/>
      <About/>
      <Contact/> 
      <Comp1></Comp1> 
      <Comp2/>
      <Comp3/>
    </div>
  )
}
export default Pavan;