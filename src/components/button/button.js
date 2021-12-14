import React from 'react'
import './buttonStyles.css'

 const Button = ({ label }) => {
    return (
        <div data-testid="button" className='btn-primary' >
            {label}
        </div>
    )
}

export default  Button

