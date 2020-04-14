import React from 'react';
import './style.css'

export default function Carousel(){
    return(
       
        <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
        <ol class="carousel-indicators">
          <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="https://www.ecommercebrasil.com.br/wp-content/uploads/2019/10/Centro-de-distribui%C3%A7%C3%A3o-Mercado-Livre-Cajamar.jpg" class="d-block w-100" alt="..."/>
          </div>
          <div class="carousel-item">
            <img src="https://www.ecommercebrasil.com.br/wp-content/uploads/2019/10/Centro-de-distribui%C3%A7%C3%A3o-Mercado-Livre-Cajamar.jpg" class="d-block w-100" alt="..."/>
          </div>
          <div class="carousel-item">
            <img src="https://www.ecommercebrasil.com.br/wp-content/uploads/2019/10/Centro-de-distribui%C3%A7%C3%A3o-Mercado-Livre-Cajamar.jpg" class="d-block w-100" alt="..."/>
          </div>
        </div>
        <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
        <hr/>
      </div>

    )
}