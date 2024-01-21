import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function AboutPage() {
  

  return (

   
   
    <div className="bg text-primary d-flex justify-content-center row text-center" >
        <h2>
            About Me
        </h2>

      <h1 className='text-warning'>My name is cody thompson</h1>
      <div class="clearfix">


       <img src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp" class="col-md-6 float-md-end mb-3 ms-md-3" alt="..."/>

  <h4>
    A paragraph of placeholder text. We're using it here to show the use of the clearfix class. We're adding quite a few meaningless phrases here to demonstrate how the columns interact here with the floated image.
  </h4>

  <h5>
    As you can see the paragraphs gracefully wrap around the floated image. Now imagine how this would look with some actual content in here, rather than just this boring placeholder text that goes on and on, but actually conveys no tangible information at. It simply takes up space and should not really be read.
  </h5>

  <p>
    And yet, here you are, still persevering in reading this placeholder text, hoping for some more insights, or some hidden easter egg of content. A joke, perhaps. Unfortunately, there's none of that here.
  </p>

  <p>
    Skills
  </p>
</div>
    </div>
  );
}