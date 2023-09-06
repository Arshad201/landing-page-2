import './Header.css';
import logo from '../../assets/images/logo.svg';
import { useState } from 'react';

const Header = () => {

    const [view, setView] = useState(false);

    window.addEventListener('scroll', ()=>{
        setView(false);
    })

    
  return (
    <header className='header'>

        <div className="header-wrapper">
            <div className="logo-wrapper">
                <a href="/">
                    <img src={logo} alt="" />
                </a>
            </div>
            <nav className={`nav-links-wrapper ${view ? 'nav-open' : 'nav-close'}`}>
                <a href="/" className="active-nav-link nav-link">Home</a>
                <a href="/" className="dimGrayText nav-link">Case Studies</a>
                <a href="/" className="dimGrayText nav-link">Blog</a>
                <a href="/" className="dimGrayText nav-link">Services</a>
                <a href="/" className="dimGrayText nav-link">Contact</a>
            </nav>
            <div className="header-btn-wrapper">
                <a href="/" className="btn">Contact</a>
            </div>
            <div className={`menu-icon ${view && 'close'}`} onClick={()=>setView(!view)}>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
            </div>
        </div>
      
    </header>
  )
}

export default Header
