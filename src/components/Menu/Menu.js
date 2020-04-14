import React from 'react';
import {Link} from 'react-router-dom'
import {FiSearch} from 'react-icons/fi'

import './style.css'

export default function Menu() {
    return (
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark menu">
        <Link class="navbar-brand" to="/">BION</Link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
      
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <Link class="nav-link" to="#">Home <span class="sr-only">(current)</span></Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="#"></Link>
            </li>
            <li class="nav-item dropdown">
              <Link class="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Regiões
              </Link>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <Link class="dropdown-item" to="#">Action</Link>
                <Link class="dropdown-item" to="#">Another action</Link>
                <div class="dropdown-divider"></div>
                <Link class="dropdown-item" to="#">Something else here</Link>
              </div>
            </li>
          
          </ul>
          <form class="form-inline my-2 my-lg-0">
            <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
            <button class="btn btn-outline-danger my-2 my-sm-0" type="submit">Search</button>
          </form>
        </div>
      </nav>
        

    )
}