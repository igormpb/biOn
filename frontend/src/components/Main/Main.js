import React, { useState, useEffect } from 'react';
import './style.css'
import { FiCalendar } from 'react-icons/fi'
import { GiPartyFlags } from 'react-icons/gi'
import { Link } from 'react-router-dom'
import Tittle from '../Tittle/Tittle'
import Menu from '../Menu/Menu'
import api from '../../service/api'
import Carousel from '../Carousel/Carousel'
import { Ellipsis } from 'react-spinners-css';




export default function Main(props) {
    const [loading, setLoading] = useState(true)
    const [party, setParty] = useState([]);

    
    useEffect(() => {
        
        
        api.get('/events/all?sort=-createdAt').then(res => {
            setParty(res.data)
            setLoading(false)
        })

    })

    return(
        <div>
            {!loading ? (
                <div>
                    <Menu />
                    <div className='container'>
                        <Carousel />
                        <Tittle tittle="Todas Regiões" />
                        <div>
                            <ul className="row">
                                {party.map(p => (
                                    <div className="col-md-4  " key={p._id}>
                                        <li className="shadow-sm" >
                                            <Link to={{
                                                pathname: `/party/${p._id}`,
                                                state: { item: p }
                                            }} >
                                                <div className="card">
                                                        <img src={p.photo} width="250" height="250" className="card-img-top" alt="..." />
                                                        <div className="card-body">
                                                        <h5 className="card-title text">{p.name} <GiPartyFlags color="green" /></h5>
                                                        <p className="card-text text">{p.state}</p>
                                                        <p className="card-text text">{p.city}</p>
                                                        <hr />
                                                        <Link to={`/party/${p._id}`} className="btn btn-danger"> <FiCalendar /> {p.dayInit}<span>{p.month}</span> a {p.dayEnd}<span>{p.month}</span></Link>
                                                    </div>
                                                </div>
                                            </Link>
                                        </li>
                                    </div>

                                ))}

                            </ul>
                        </div>

                    </div>
                </div>) : (
                    <div>
                        <Menu />
                    <div className='container'>

                        <Carousel />
                        <Tittle tittle="Todas Regiões" />
                    
                        <div className="loading">
                            <Ellipsis color="#333" size={200}/>
                        </div>
                    </div>
                    </div>
                )}
        </div>
    )
}
            
        
