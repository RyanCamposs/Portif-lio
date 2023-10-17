import React from 'react';
import './header.css';
import '../../../App.css';
import img from '../../../assets/logo.png'

export default function Header() {
    return (
        <div className="header">
            <div className="header-logo"><img src={img} alt='logo'></img></div>
            <div className="header-btn">
                <div className="btn home"><a href="#">HOME</a></div>
                <div className="btn sobre"><a href="#about">SOBRE</a></div>
                <div className="btn projetos"><a href="#projects">PROJETOS</a></div>
                <div className="btn contato"><a href="#contact">CONTATO</a></div>
            </div>
        </div>
    )
}