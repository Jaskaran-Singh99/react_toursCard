import React, { useState } from "react";
import './tour.css'

export default function Tour({tour, removeTour}){
    const [readMore, setreadMore] = useState(false)
   
    return(
        <>
    
        <div className='card'>
            <img src={tour.image}></img>
            <h2>{tour.name}</h2>

            {readMore ? <h3>{tour.info}</h3> :
            <h3>{
            tour.info.substring(0, 200)
            }
            <button onClick={()=>{setreadMore(!readMore)}} >read more...</button>
            </h3>
            }

            <p>${tour.price}</p>
            <button onClick={()=>{
                removeTour(tour.id)
            }}>Remove Tour</button>
        </div>
        
        
    </>
    )
}