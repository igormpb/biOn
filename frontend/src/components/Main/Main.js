import React, { useState, useEffect } from 'react';
import './style.css'
import { FiCalendar } from 'react-icons/fi'
import { GiPartyFlags } from 'react-icons/gi'
import { Link } from 'react-router-dom'
import Tittle from '../Tittle/Tittle'
import Menu from '../Menu/Menu'
import api from '../../service/api'
import Carousel from '../Carousel/Carousel'


export default function Main(props) {

    const [party, setParty] = useState([]);

    useEffect(() => {
        api.get('/events/all?sort=-createdAt').then(res => {
            setParty(res.data)
        })

    })
    return (
        <div>
            <Menu />
            <div className='container'>

                <Carousel />
                <Tittle tittle="Rio de Janeiro" />
                <div className="col-md-12">

                    <ul >
                        {party.map(p => (
                            <div className="row">
                                <li className="col-md-4" key={p._id}>
                                    <Link to={{
                                        pathname: `/party/${p._id}`,
                                        state: { item: p }
                                    }} >
                                        <div className="card ">
                                            <img src={p.photo} className="card-img-top" alt="..." />
                                            <div className="card-body">
                                                <h5 className="card-title text">{p.name} <GiPartyFlags color="green" /></h5>
                                                <p className="card-text text">{p.state}</p>
                                                <p className="card-text text">{p.city}</p>
                                                <hr />
                                                <Link to={p._id} className="btn btn-danger"> <FiCalendar /> {p.dayInit}<span>{p.mouth}</span> a {p.dayEnd}<span>{p.mouth}</span></Link>
                                            </div>
                                        </div>
                                    </Link>
                                </li>
                            </div>

                        ))}

                    </ul>
                </div>

            </div>
        </div>


    )

}