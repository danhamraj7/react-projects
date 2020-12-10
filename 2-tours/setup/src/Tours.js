import React from 'react';
import Tour from './Tour';
const Tours = ({tours, removeTour}) => {
  return (
    <div className="title">
    <h2>our tours</h2>
    <div className="underline"></div>
    <div>
    {tours.map((tour)=>{
    return <Tour key={tours.id} {...tour} removeTour={removeTour}/>
    })}
    </div>
    </div>
  )
};

export default Tours;
