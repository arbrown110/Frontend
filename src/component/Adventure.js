import React from 'react'
import { Link } from 'react-router-dom'

const Adventure = (props) => {
    return (
        <div>
            {props.adventures.map(adventure => 
               
               <Link to ={`/adventures/${adventure.id}`} key={adventure.id}>
                   <div> 
                       <button> {adventure.name}</button>
                       <img src={adventure.image_url} alt="Topics" width={300} height="100%" />
                   </div>

                   
               </Link>

           
       )}
        </div>

    )
}

export default Adventure