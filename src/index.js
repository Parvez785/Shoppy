import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Hero from './Components/Hero Section/Hero';
import Header from './Components/Header/Header';
import 'font-awesome/css/font-awesome.min.css';
import Slide from './Components/Skills/Slide';
import Projects from './Components/Project/Projects'
import Footer from './Components/Footer/Footer';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <Header/>
    <Hero/>
    <Slide/>
    <Projects/>
    <Footer/>
  </React.StrictMode>
);


