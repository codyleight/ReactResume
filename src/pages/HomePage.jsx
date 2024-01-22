import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function HomePage() {
 

  return (

    <div className="bgda text-danger mt-5 home" style={{ display: 'flex', justifyContent: 'center' }}>
      
  <img
    src="https://lh3.googleusercontent.com/pw/ABLVV86kWQGNTkNeUzKDyvnCDl-77gilzCFZzGShMc85sw3VUq5WZ7x0SUuA1sg65zGysHYEp4Mpi6ctZ8pS3v4cmCrmunHwC4FGsGuM3pVV8cm2eKu1rZFYmytoQDc0yGA0QZL0ocie9O2YumYX2Ur274_S=w1875-h625-s-no-gm?authuser=0"
    alt="Full Stack Developer"
    className="img-fluid"
  />
 
</div>
  );
}