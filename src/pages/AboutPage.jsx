import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function AboutPage() {
  

  return (

   
   
    <div className="bg text-primary d-flex justify-content-center row text-center" >
        <h2>
            About Me
        </h2>

      <h3 className='text-warning '>My name is cody thompson</h3>
      <div class="clearfix textabout">


       <img src="/assets/prof.jpg" class="col-md-3 float-md-end mb-3 ms-md-3" alt="..."/>

  <h3 className='space' >
    Thanks for looking at my coding portfolio! I am a <span>Full Stack Developer</span> living in Austin. I am originally from California, but I have loved the experience of being able to move out and explore new places. Sinc becoming an adult I have traveled quite a bit, as well as found jobs that I really loved to work at. I have a love for Video Games, and supporting and helping create them in any way is my dream in life. For the past 8 years I have made this dream a <span>Reality</span>.
    I hope to Continue that dream in the future and Become better at my crafts.
  </h3>

  <h3 className='space'>
    Fun Facts time! I was a professional gamer in League of Legends early on in my life, and was able to play games for money. The skills and Teamwork that I learned from that experience were like no other. The Teamwork aspect and working with other people and schedules really boosted me early on in my life to prepare for real world scenarios of working with people. In addition it also strengethened my resolve to preform well in anything I do regardless of how I am feeling emotionally.</h3>

  <h3>
    
  </h3>

  <p>
 
  </p>
</div>
    </div>
  );
}