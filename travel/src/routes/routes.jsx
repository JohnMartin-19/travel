import React from "react";
import {Routes, Route} from 'react-router-dom';
import Home from '../components';
import { useState } from "react";
import NavBar from "../components/NavBav";

function Routess(){
    const [ setPage] = useState('/')
    return(
        <div className="routes">
      <NavBar onChange={setPage}/>
      <br/>
      <Routes>
        <Route exact path="/" element={<Home/>} />
      </Routes>
    </div>
    )
}
export default Routess