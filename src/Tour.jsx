import React, { useState } from 'react';

const Tour = ({name,id,info,price,image,handleRemove}) => {

  let [islength,setLength]=useState(false)

  return (
 <article className='single-tour'>
     <img src={image} alt={name} />
     <footer>
       <div className="tour_info">
        <h4>{name}</h4>
       </div>
       <div className="tour-price">
         <h4>${price}</h4>
       </div>
       <p>{islength?info:`${info.substring(0,200)}.....`}
       <button onClick={()=>setLength(!islength)}>{islength?"readLess":"readMore"}</button>
       
       </p>
       <button className="delete-btn" onClick={()=>handleRemove(id)}>
        not intrested
       </button>
     </footer>
 </article>
  )
};

export default Tour;
