import React from 'react'
import './style.css'
const Button=({label,buttonStyle})=>{
    return(
        <button className={buttonStyle}>
            {label}
        </button>
    )
}
export default Button