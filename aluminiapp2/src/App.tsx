import React, { useEffect, useState } from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import AboutPage from './pages/AboutPage';
import SearchPage from './pages/SearchPage';
import AdminPage from './pages/AdminPage';
import ErrorPage from './pages/ErrorPage';
import AOS from "aos";
import "aos/dist/aos.css"


function App() {
  useEffect(()=>{
    AOS.init();
  },[])
  return (
<BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />}/>
          <Route path="/login" element={<LoginPage  />}/>
          <Route path="/about" element={<AboutPage />}/>
          <Route path="/search" element={<SearchPage />}/>
          <Route path="/admin" element={<AdminPage />}/>
          <Route path ="*" element={<ErrorPage/>}/>
        </Routes>
</BrowserRouter>
  );
}

export default App;
