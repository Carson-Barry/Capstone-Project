import logo from './logo.svg';
import key from './APIKey';
import Navbar from "./Navbar";
import Home from './Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="hello" element={<Navbar/>}></Route>
          <Route path="signup" element={<Navbar/>}></Route>
          <Route path="login" element={<Navbar/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
