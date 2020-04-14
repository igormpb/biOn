import React from 'react'
import './style.css'
import {FiCalendar,FiClock,FiMapPin} from 'react-icons/fi'
import {IoIosInformationCircleOutline} from 'react-icons/io'
import Menu from '../Menu/Menu'
export default function Party() {
    return (
        <div>
            <Menu/>
        <div className="media mt-4">
            <img src="https://media-cdn.tripadvisor.com/media/photo-s/18/96/eb/cd/maria-szobor.jpg" className="align-self-center mr-3 img" alt="..." width="381px" height="467px"/>
            <div className="media-body">
                <h5 className="mt-5">name</h5>
                <p><FiClock color="orange"/> Hours.</p>
            <p className="mb-0"><FiMapPin color="orange"/>local</p>
                <a href="#" className="btn btn-danger mt-2"> <FiCalendar/> 14<span>Mar</span> a 20<span>Mar</span></a>
                <hr/>
                <h2 className="mt-5"><IoIosInformationCircleOutline size={30} color="black"/> Informação</h2>
                <p> dsakdsadddddddddddddddddddddddddddddddddddddddddddd</p>
                <hr/>
            </div>
        </div>
        </div>

    )
}