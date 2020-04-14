import React from 'react';
import './style.css'
import {FiCalendar} from 'react-icons/fi'
import {GiPartyFlags} from 'react-icons/gi'
import {Link} from 'react-router-dom'
import Tittle from '../Tittle/Tittle'
import Menu from '../Menu/Menu'

import Carousel from '../Carousel/Carousel'
export default function Main(props) {
    return (
        <div>
             <Menu/>
        <div className='container'>
           
            <Carousel/>
            <Tittle tittle="Rio de Janeiro"/>
            <div className="col-md-12">

                    <ul >
                        <div className="row">
                    <li className="col-md-4">
                        <div className="card ">
                            <img src="https://media-cdn.tripadvisor.com/media/photo-s/18/96/eb/cd/maria-szobor.jpg" class="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">dadsadsadsadsada <GiPartyFlags color="green"/></h5>
                                <p className="card-text">Rio de Janeiro - Rj</p>
                                <p className="card-text">Bangu</p>
                                <hr/>
                                <Link to="/dada" className="btn btn-danger"> <FiCalendar/> 14<span>Mar</span> a 20<span>Mar</span></Link>
                            </div>
                            </div>
                        </li>
                        <li className="col-md-4">
                        <div className="card">
                            <img src="https://media-cdn.tripadvisor.com/media/photo-s/18/96/eb/cd/maria-szobor.jpg" class="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">dadsadsadsadsada <GiPartyFlags color="green"/></h5>
                                <p className="card-text">Rio de Janeiro - Rj</p>
                                <p className="card-text">Bangu</p>
                                <a href="#" className="btn btn-danger"> <FiCalendar/> 14<span>Mar</span> a 20<span>Mar</span></a>
                            </div>
                            </div>
                        </li>
                        <li className="col-md-4">
                        <div className="card">
                            <img src="https://media-cdn.tripadvisor.com/media/photo-s/18/96/eb/cd/maria-szobor.jpg" class="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">dadsadsadsadsada <GiPartyFlags color="green"/></h5>
                                <p className="card-text">Rio de Janeiro - Rj</p>
                                <p className="card-text">Bangu</p>
                                <a href="#" className="btn btn-danger"> <FiCalendar/> 14<span>Mar</span> a 20<span>Mar</span></a>
                            </div>
                            </div>
                        </li>
                        <li className="col-md-4">
                        <div className="card">
                            <img src="https://media-cdn.tripadvisor.com/media/photo-s/18/96/eb/cd/maria-szobor.jpg" class="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">dadsadsadsadsada <GiPartyFlags color="green"/></h5>
                                <p className="card-text">Rio de Janeiro - Rj</p>
                                <p className="card-text">Bangu</p>
                                <a href="#" className="btn btn-danger"> <FiCalendar/> 14<span>Mar</span> a 20<span>Mar</span></a>
                            </div>
                            </div>
                        </li>
                        <li className="col-md-4">
                        <div className="card">
                            <img src="https://media-cdn.tripadvisor.com/media/photo-s/18/96/eb/cd/maria-szobor.jpg" class="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">dadsadsadsadsada <GiPartyFlags color="green"/></h5>
                                <p className="card-text">Rio de Janeiro - Rj</p>
                                <p className="card-text">Bangu</p>
                                <a href="#" className="btn btn-danger"> <FiCalendar/> 14<span>Mar</span> a 20<span>Mar</span></a>
                            </div>
                            </div>
                        </li>
                        <li className="col-md-4">
                        <div className="card">
                            <img src="https://media-cdn.tripadvisor.com/media/photo-s/18/96/eb/cd/maria-szobor.jpg" class="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">dadsadsadsadsada <GiPartyFlags color="green"/></h5>
                                <p className="card-text">Rio de Janeiro - Rj</p>
                                <p className="card-text">Bangu</p>
                                <a href="#" className="btn btn-danger"> <FiCalendar/> 14<span>Mar</span> a 20<span>Mar</span></a>
                            </div>
                            </div>
                        </li>
                        <li className="col-md-4">
                        <div className="card">
                            <img src="https://media-cdn.tripadvisor.com/media/photo-s/18/96/eb/cd/maria-szobor.jpg" class="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">dadsadsadsadsada <GiPartyFlags color="green"/></h5>
                                <p className="card-text">Rio de Janeiro - Rj</p>
                                <p className="card-text">Bangu</p>
                                <a href="#" className="btn btn-danger"> <FiCalendar/> 14<span>Mar</span> a 20<span>Mar</span></a>
                            </div>
                            </div>
                        </li>
                        </div>
                    </ul>
            </div>

                </div>
        </div>

                
    )

}