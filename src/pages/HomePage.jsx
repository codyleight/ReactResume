import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function HomePage() {
 

  return (

    <div className="bgda text-danger mt-5 home" style={{ display: 'flex', justifyContent: 'center' }}>
      
  <img
    src="src\assets\banner6.png"
    alt="Full Stack Developer"
    className="img-fluid"
  />
 
</div>
  );
}