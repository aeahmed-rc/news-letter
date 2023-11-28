import React from 'react'
import './style.css'
const SubHeader=()=>{
    const MyIcon = () => (
<svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21"><g fill="none"><circle cx="10.5" cy="10.5" r="10.5" fill="#FF6155"/><path stroke="#FFF" stroke-width="2" d="M6 11.381 8.735 14 15 8"/></g>
        </svg>
      );
    return (
        <div>
            <h2>
                Join 60000+ product managers
            
            </h2>
            <ul className='my-list'>
            
                <li>  <MyIcon />Product</li>
                <li>  <MyIcon />measuring</li>
                <li> <MyIcon />and much more</li>
            </ul>
        </div>
    )
}
export default SubHeader