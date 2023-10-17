import './main.css';
import "../../../App.css";
import React from 'react';
import seta from '../../../assets/seta.png'

export default function Main() {
    return (
        <main>
        <div className="container">
            <div className="container-item">
                <h1>Ryan Campos</h1>
                <p>Desenvolvedor Front-End</p>
            </div>
        
            <div className="container-item-2">
            <a href="#"><img src={seta} alt="seta para baixo"></img></a>
            </div>
        </div>
        </main>
    )
}