import React, { useEffect, useState, Component } from 'react'
import {Link} from 'react-router-dom';
import './style.css'
import { FiCalendar, FiClock, FiMapPin } from 'react-icons/fi'
import { IoIosInformationCircleOutline } from 'react-icons/io'
import Menu from '../Menu/Menu'
import EventsService from '../../service/events.service'


export default class Party extends Component {
    state = {
        item: {},
    }

    async componentDidMount() {
        const { match } = this.props;

        const uuid = match.params.id;
        await EventsService.getEvent(uuid).then(res => this.setState({ item: res.data }))
    }


    render() {
        const { item } = this.state;
        return (
            <div>
                <Menu />
                <div className="media mt-4">
                    <img src={item.photo} className="align-self-center mr-3 img" alt="..." width="381px" height="467px" />
                    <div className="media-body">
                        <h5 className="mt-5">{item.name}</h5>
                        <p><FiClock color="orange" />17<span>Horas</span></p>
                        <p className="mb-0"><FiMapPin color="orange" />{item.state} - <span>{item.city}</span></p>
                        <Link href="#" className="btn btn-danger mt-2"> <FiCalendar /> {item.dayInit}<span>{item.mouth}</span> a {item.dayEnd}<span>{item.mouth}</span></Link>
                        <hr />
                        <h2 className="mt-5"><IoIosInformationCircleOutline size={30} color="black" /> Informação</h2>
                        <p>{item.information}</p>
                        <hr />
                    </div>
                </div>
            </div>

        )
    }
}
