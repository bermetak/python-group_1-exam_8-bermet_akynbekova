import React from 'react';
import {NavLink} from 'react-router-dom';
import './Card.css'

const Card = props => {
    return <NavLink to={props.link} className='text-decoration-none text-reset'>

        <div className="card mt-2">
            <div className="card-header text-center">
                {props.name}
            </div>
            <div className="card-body">
                <p className="card-text">
                    {props.description}
                </p>
            </div>
            <div className="card-footer bg-transparent text-muted row">
                <div className='col'>До: {props.date}</div>
                {props.time ? <div className='col text-right'>Время: {props.time} ч.</div> : null}
            </div>
        </div>

    </NavLink>

};


export default Card;