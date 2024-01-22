import React from 'react';
import { Link } from 'react-router-dom';
import Project from '../components/Project';

export default function PortfolioPage() {
  return (
    <div className=" d-flex justify-content-center">
      <div className="row">
        <Project title="DnD Character Generator" imageSrc="public\assets\DND.png" link="https://codyleight.github.io/DnDCharacter/" />
        <Project title="Project 2" imageSrc="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp" />
        <Project title="Project 3" imageSrc="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp" />
        <Project title="Project 4" imageSrc="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp" />
        <Project title="Project 5" imageSrc="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(18).webp" />
        <Project title="Project 6" imageSrc="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(18).webp" />
      </div>
    </div>
  );
}