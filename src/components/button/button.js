import React from 'react'

 const Button = ({ label }) => {
    return (
        <div data-testid="button" className='btn-primary' >
            {label}
        </div>
    )
}

export default  Button

