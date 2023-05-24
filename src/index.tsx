import ReactDOM from 'react-dom/client'
import "./styles/tailwind.css";
import Home from "./pages/Home";
import Projects from './pages/Projects';
import * as serviceWorker from "./serviceWorker";
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import NavbarComponent from './components/general/NavbarComponent';
import Experience from './pages/Experience';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <div className='z-10'>
      <NavbarComponent />
    </div>


    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/about' element={<Experience />} />

      </Routes>
    </Router>
  </React.StrictMode>
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister(); 
