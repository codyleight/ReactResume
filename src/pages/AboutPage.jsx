import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function AboutPage() {
  

  return (

   
   
    <div className=" text-light d-flex justify-content-center row text-center bg" >
        <h2>
            About Me
        </h2>

      <h3 className='text-light '>My name is <span>Cody Thompson</span></h3>
      <div className="clearfix textlight">


       <img src="/assets/prof.jpg" className="col-md-3 float-md-end mb-3 ms-md-3 imgedit" alt="..."/>

  <h3 className='space ' >
  Welcome to my coding portfolio! I am a passionate <span >Full Stack Developer</span> based in Austin, Texas. Originally from California, I have always had a sense of adventure and a desire to explore new places. As an adult, I have had the opportunity to travel extensively and work in various fulfilling roles in the <span>Tech and Gaming industry.</span>


One of my greatest passions is the world of video games. I am dedicated to supporting and contributing to the creation of immersive gaming experiences. Over the past 8 years, I have been fortunate enough to turn this dream into a <span>Reality</span>.


Continuing to pursue this dream and honing my craft is my ultimate goal. I am committed to constantly improving my skills and staying up-to-date with the latest technologies and trends in the industry.


I am excited to showcase my projects and share my journey as a Full Stack Developer. Thank you for taking the time to explore my portfolio!


  </h3>

  <h3 className='space'>
  Time for some fun facts! In the early stages of my life, I had the incredible opportunity to be a <span>Professional Gamer</span> in League of Legends. Not only did this allow me to play games for money, but it also taught me invaluable skills in teamwork and collaboration. Working with a team and managing schedules in the gaming world prepared me for real-world scenarios of working with people.


This experience not only enhanced my ability to work effectively with others but also strengthened my determination to perform at my best, regardless of my emotional state. It taught me the importance of resilience and consistently delivering high-quality results.


I am grateful for the lessons I learned during my time as a professional gamer, as they continue to shape my approach to work and life. These experiences have given me a unique perspective and a deep appreciation for the power of teamwork and personal growth.</h3>
    


 <h3>
    
  </h3>

  <p>
 
  </p>
</div>
    </div>
  );
}