import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PersistentDrawerLeft from './CMS/Header';
import Home from './CMS/Home';
import SignInSide from './CMS/Login';
// import About from './CMS/About'; 

function App() {
  return (
    <Router>
     <PersistentDrawerLeft/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<SignInSide />} />
          {/* <Route path="/about" element={<About />} />  */}
        </Routes>
      
    </Router>
  );
}

export default App;
