import React from 'react';
import './listaprojetos.css';


export default function ListaDeProjetos(props) {

  

  return (
    <div className="projetos_container">
      <div className="projetos_container_box">
        <div className="projetos_container_box_title">
          <h3>{props.titulo}</h3>
        </div>
        <div className="projetos_container_img">
          <img src={props.imagem} alt={props.alt}></img>
        </div>
        <div className="projetos_container_link">
            <a href={props.site}>Acessar o site</a>
        </div>
      </div>
    </div>
  );
}
