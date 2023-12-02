import React from 'react';
import Routes from '../routes/routes'

import './App.css';
import Active from '../routes/routes';

function App() {
  const [ setPage] = useState('/')
  return (
    <div className="App">
      <Routes />
    </div>
  );
}

export default App;
