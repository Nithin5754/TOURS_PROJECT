import React from 'react';
import Tour from './Tour';
const Tours = ({isTours,handleRemove}) => {

  if(isTours.length<1){
    return <div className='title'>
    <h4>no post</h4>
    </div>
  }
  return (
    <section>
      <div className="title">
    <h2>OUR TOUR</h2>
    <div className="underline"></div>
    
  </div>
  {isTours.map((tour)=>{
    return <Tour key={tour.id} {...tour} handleRemove={handleRemove}/>
  })}
    </section>
  )
};

export default Tours;
