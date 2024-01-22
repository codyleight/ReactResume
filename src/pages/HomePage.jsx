import { bottom } from '@popperjs/core';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function HomePage() {
  return (



<div class="container bg2">
  <div class="row">
    <div class="col-sm align-self-center">
      <h1>Full Stack Developer</h1>
    </div>
    <div class="col-sm-6 align-self-center">
      <img src="src\assets\me2.png" alt="Full Stack Developer" className="img-fluid" />
    </div>
    <div class="col-sm align-self-center">
      <h1>Developing for the future</h1>
    </div>
  </div>
  <div className='container d-flex justify-content-center'>
    <div className="row space">
      <h2>One app at a time</h2>
    </div>
  </div>
</div>

    
    
    
  );
}
