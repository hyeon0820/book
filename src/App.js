import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from './components/Pages/Main/Main';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Login from './components/Pages/Login/Login';
import Membership from './components/Pages/Membership/Membership';
import Allbook from './components/Pages/Allbook/Allbook';
import Bestbook from './components/Pages/Bestbook/Bestbook';
import Newbook from './components/Pages/Newbook/Newbook';
import Koreabook from './components/Pages/Koreabook/Koreabook';
import Foreignbook from './components/Pages/Foreignbook/Foreignbook';

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Membership />} />
          <Route path="/allbook" element={<Allbook />} />
          <Route path="/bestbook" element={<Bestbook />} />
          <Route path="/newbook" element={<Newbook />} />
          <Route path="/koreabook" element={<Koreabook />} />
          <Route path="/foreignbook" element={<Foreignbook />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
