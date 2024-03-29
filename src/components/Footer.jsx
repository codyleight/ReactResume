import { FaGithub, FaLinkedin, FaFacebookSquare, FaInstagramSquare, FaMailBulk  } from "react-icons/fa";
import React from 'react';
import {
  MDBFooter,
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBBtn, MDBIcon
} from 'mdb-react-ui-kit';

export default function App() {
  return (
    <MDBFooter className='text-center text-white   content-wrapper'>
      
        

     
     
          
            
            
        
      

      <div className='text-center  bg-dark ' >
      <p>Keep moving forward</p>
     
        
        <a className='text-white' href='https://www.codyleight.com/'>
        © Cody L. Thompson
        </a>
        <div className="text-center iconsize">
            <a  className='text-end' href="https://github.com/codyleight">
                <FaGithub />
            </a>

            <a  className='text-end' href="https://www.linkedin.com/in/cody-thompson-29071b106/">
            <FaLinkedin />
            </a>

            <a className='text-end' href="mailto:codylthomp@gmail.com">
            <FaMailBulk />
            </a>


  

            

            
            </div>
      
      </div>
    </MDBFooter>
  );
}