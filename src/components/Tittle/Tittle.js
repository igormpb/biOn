import React from 'react';
import { FiMapPin } from 'react-icons/fi'

export default function Tittle(props) {
    return (
        <div className="tittle">
            <h1><FiMapPin color="orange" />{props.tittle}</h1>
            <hr />
        </div>

    )
}