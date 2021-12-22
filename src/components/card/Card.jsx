import React from 'react'
import "./cardStyles.css"

const Card = ({ title, content }) => {
    return (
        <div className='card-container'>
            <h3 className='card-title'>{title}</h3>
            <div className='card-content'>IMG</div>
            <p className='card-info'>
                {content}
            </p>
        </div>
    )
}

export default Card
