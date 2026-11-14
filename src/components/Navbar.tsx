import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, Moon, Sun, X, ArrowUpRight } from './Icons';
import { profile } from '../data/portfolio';
type Props = { theme: 'light'|'dark'; toggleTheme: () => void };
const links = [['Home','home'],['About','about'],['Experience','experience'],['Projects','projects'],['Skills','skills'],['Education','education'],['Contact','contact']];
export default function Navbar({theme,toggleTheme}:Props) {
 const [scrolled,setScrolled]=useState(false),[open,setOpen]=useState(false); const location=useLocation();
 useEffect(()=>{const fn=()=>setScrolled(window.scrollY>24);window.addEventListener('scroll',fn);return()=>window.removeEventListener('scroll',fn)},[]);
 useEffect(()=>setOpen(false),[location]);
 const jump=(id:string)=>{if(location.pathname!=='/')window.location.href=`/#${id}`;else document.getElementById(id)?.scrollIntoView({behavior:'smooth'});setOpen(false)};
 return <header className={`site-header ${scrolled?'scrolled':''}`}><nav className="nav-shell"><Link to="/" className="wordmark" onClick={()=>window.scrollTo({top:0,behavior:'smooth'})}>Navyasri<span>.</span></Link><div className={`nav-links ${open?'open':''}`}>{links.map(([label,id])=><button key={id} onClick={()=>jump(id)} className="nav-link">{label}</button>)}<a className="nav-resume" href={profile.resume} download>Resume <ArrowUpRight size={13}/></a></div><div className="nav-actions"><button className="icon-button theme-button" aria-label="Toggle color theme" onClick={toggleTheme}>{theme==='light'?<Moon size={17}/>:<Sun size={17}/>}</button><button className="icon-button mobile-menu" aria-label={open?'Close menu':'Open menu'} onClick={()=>setOpen(!open)}>{open?<X size={20}/>:<Menu size={20}/>}</button></div></nav></header>
}
