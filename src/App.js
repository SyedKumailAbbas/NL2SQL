import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Navbar } from './Components/Navbar';
import { Home } from './Pages/Home';
import Mainpage from './Pages/Mainpage';

function App() {
  return (
    
      <div >
        <Router>
          <Navbar />
          <Routes>
          <Route path='/convert' element={<Mainpage/>}/>
            <Route path='/' element={<Home />} />
          </Routes>
        </Router>
      </div>
  
  );
}

export default App;
