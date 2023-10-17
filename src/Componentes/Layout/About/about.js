import React from 'react';
import './about.css';
import '../../../App.css';

export default function About() {
    return (
        <section className="about-section" id="about">
            <div className="left-div">
                <h2>Sobre Mim</h2>
                <p>Me chamo Ryan, tenho 16 anos e estudo programação na parte do FrontEnd.</p>
                <a href="#" className="about-link">Conheça meus projetos!</a>
            </div>

            <div className="right-div">
                <h2>Habilidades</h2>
                
                <div className="btn-container">
                <button className="about-btn">HTML5</button>
                <button className="about-btn">CSS3</button>
                <button className="about-btn">JavaScript</button>
                <button className="about-btn">ReactJS</button>
                </div>
              
            
              

            </div>


        </section>
    )
}