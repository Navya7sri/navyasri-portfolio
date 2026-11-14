import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import ProjectDetail from './pages/ProjectDetail';
import './styles.css';
function App(){const [theme,setTheme]=useState<'light'|'dark'>(()=>(localStorage.getItem('navya-theme') as 'light'|'dark')||'light');useEffect(()=>{document.documentElement.dataset.theme=theme;localStorage.setItem('navya-theme',theme)},[theme]);useEffect(()=>{const hash=window.location.hash;if(hash)setTimeout(()=>document.querySelector(hash)?.scrollIntoView(),120)},[]);useEffect(()=>{const move=(e:PointerEvent)=>{document.documentElement.style.setProperty('--cursor-x',`${e.clientX}px`);document.documentElement.style.setProperty('--cursor-y',`${e.clientY}px`)};if(window.matchMedia('(hover: hover) and (pointer: fine)').matches)window.addEventListener('pointermove',move);return()=>window.removeEventListener('pointermove',move)},[]);return <div className="app-shell"><Navbar theme={theme} toggleTheme={()=>setTheme(t=>t==='light'?'dark':'light')}/><Routes><Route path="/" element={<Home/>}/><Route path="/projects/:slug" element={<ProjectDetail/>}/></Routes><div className="cursor-dot"/></div>}
ReactDOM.createRoot(document.getElementById('root')!).render(<React.StrictMode><BrowserRouter><App/></BrowserRouter></React.StrictMode>);
