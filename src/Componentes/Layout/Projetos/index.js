import React from 'react';
import '../../../App.css';
import './projetos.css';
import ListaDeProjetos from '../ListaDeProjetos/ListaDeProjetos';
import netflix from "./projetos_assets/netflix.png"
import google from './projetos_assets/google.png'
import relogio from './projetos_assets/relogio.png'
import calculadora from './projetos_assets/calculadora.png'
import calculadoraIMC from './projetos_assets/calculadoraIMC.png'
import padaria from './projetos_assets/padaria.png'

export default function Projetos() {
    return (
    <section className="projetos_section" id="projects">
    <h2>Projetos</h2>

        <div className="projetos_container">
            <h3 className="container_title">Recriações</h3>
            
                <ListaDeProjetos 
                    titulo="Página de Login NetFlix"
                    imagem={netflix}
                    site="https://netflix-login-htxe.vercel.app/"
                    alt="Pagina de Login NetFlix"
                />
                <ListaDeProjetos 
                    titulo="Pagina Inicial Google"
                    imagem={google}
                    site="https://google-home-page-ten.vercel.app/"
                    alt="Pagina inicial Google"
                />
                <ListaDeProjetos 
                    titulo="Padaria"
                    alt="Padaria"
                    imagem={padaria}
                    site="https://padaria-tau.vercel.app/"
                    
                />

        </div>

        
        <div className="projetos_container">
            <h3 className="container_title">Projetos</h3>
            
                <ListaDeProjetos 
                    titulo="Relógio"
                    imagem={relogio}
                    site="https://relogio-digital-two.vercel.app/"
                    alt="Relógio"
                />
                <ListaDeProjetos 
                    titulo="Calculadora"
                    imagem={calculadora}
                    site="https://calculadora-htxe.vercel.app/"
                    alt="Calculadora"
                />
                <ListaDeProjetos 
                    titulo="Calculadora IMC"
                    imagem={calculadoraIMC}
                    alt="Calculadora imc"
                    site="https://calculadora-imc-2.vercel.app/"
                    
                />

        </div>





</section>
          
)}