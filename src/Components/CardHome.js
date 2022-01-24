import React from 'react'
import './Cards.css'
import { NavLink } from 'react-router-dom';


function CardHome({title, img, url, text}) {
    return (
        <div className='card text-center bg-dark'>
            <div className='overflow'>
            <img src={img} alt='' className='card-img-top'/>
            </div>
            <div className='card-body text-light'>
                <h4 className='card-title'>{title}</h4>
                <p className='card-text text-secondary'>
                    {
                        text ? text :  'Error'
                    }
                </p>
                <NavLink to='/search'>
                <a href={url} className='btn btn-outline-secondary rounded-0'>
                    Go to Cities
                </a>
                </NavLink>

            </div>
        </div>
    )
}

export default CardHome
