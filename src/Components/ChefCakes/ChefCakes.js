import React from 'react';
import { useLocation } from 'react-router-dom';

export default function ChefCakes() {

    let location = useLocation();
    let id = location.state.id;


  return (
    <div>
        <h1>chef listing cakes goes here</h1>
        <p>id is: {id}</p>
      
    </div>
  )
}
