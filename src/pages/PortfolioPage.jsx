import React from 'react';
import { Link } from 'react-router-dom';
import Project from '../components/Project';

export default function PortfolioPage() {
  return (
    <div className="bg text-primary d-flex justify-content-center row text-center" >
    <h2>
        Portfolio
    </h2>
    <div className=" d-flex justify-content-center">
      <div className="row">
        <Project title="DnD Character Generator" imageSrc="/assets/Dnd2.png" link="https://codyleight.github.io/DnDCharacter/"  />
        <Project title="Weather App" imageSrc="/assets/Weather.png" link="https://codyleight.github.io/Week6Weather/" />
        <Project title="Food Video" imageSrc="/assets/FoodVideoReview.png" link="https://dishdashproject-21053540d927.herokuapp.com/" />
        <Project title="Ecommcerce Mockup With stripe" imageSrc="/assets/gamehub.jpg" link="https://gamehub-test.onrender.com/" />
        <Project title="Day Scheduler" imageSrc="/assets/Scheduler.png" link="https://codyleight.github.io/Week5Scheduler/" />
        <Project title="Password Generator" imageSrc="/assets/Password.png" link="https://codyleight.github.io/challenge3-password/" />
      </div>
    </div>
    </div>
  );
}