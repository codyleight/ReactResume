import { bottom } from '@popperjs/core';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function HomePage() {
  return (


<div className='text-center'>
  <h2>Home</h2>
<div className="bgpic ">
  <div className="row d-flex justify-content-center">
    <div className="col-sm align-self d-flex justify-content-end">
      
      <h1 className=''>Full Stack Developer</h1>
      
    </div>
    <div className="col-sm-5 align-self-center ">
      Cody Thompson
    </div>
    <div className="col-sm align-self-right d-flex justify-content-start ">
      <h1 className=''>Developing for the future</h1>
    </div>
  </div>
  <div className='container d-flex justify-content-center'>
    <div className="row space">
      <h2>One app at a time</h2>
    </div>
  </div>
</div>

</div>
    
    
  );
}
