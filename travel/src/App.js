import React from 'react';
import Routess from './routes/routes'
import './App.css';
import NavBar from './components/NavBar';
function App() {
 return (
    <div className="App">
      <NavBar/>
      <Routess />
    </div>
  );
}

export default App;
