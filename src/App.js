import React from 'react';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom'


import Content from './Pages/Content';
import Contact from "./Pages/Contact";
import About from './Pages/About';
import Projects from './Pages/Projects';

const App = () => {
  return (
    <div>
      <Router>
      <Content/>
      <Routes>
         
         <Route exact path="/Contact" element={<Contact/>}/>
         <Route exact path="/Projects" element={<Projects/>}/>
         <Route exact path="/about" element={<About/>}/> 
         
        </Routes>
      </Router>
    </div>
  );
};

export default App;
