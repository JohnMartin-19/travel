import React from "react";
import {Routes, Route} from 'react-router-dom'
import Home from '../components'
function Routes(){
    return(
        <div className="App">
      <NavBar onChange={setPage}/>
      <br/>
      <Routes>
        <Route path="/About Me" element={<About heading='About Me' text='What I do and I like'  />} />
        <Route path="/MyStacks" element={<TechStack heading='Technologies I use'/>} />
        <Route exact path="/Projects" element={<Projects heading='PROJECTS' text='Some of my most recent works' />} />
        <Route path="/Contact Me" element={<Contact heading='Get in Touch' text="Let's Connect and work together"/>} />
        <Route exact path="/" element={<Home/>} />
      </Routes>
    </div>
    )
}
export default Routes