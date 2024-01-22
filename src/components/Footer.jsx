import { FaGithub, FaLinkedin, FaFacebookSquare, FaInstagramSquare } from "react-icons/fa";
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
    <MDBFooter className='text-center text-white   pt-5'>
      
        

      <p>Keep moving forward</p>
      <p>Created by: Cody Thompson</p>
     
          
            
            
        
      

      <div className='text-center  bg-dark footer' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        
        <a className='text-white' href='https://www.codyleight.com/'>
          codyleight.com
        </a>
        <div className="text-center ">
            <a  className='text-end' href="https://github.com/codyleight">
                <FaGithub />
            </a>


            <FaLinkedin />

            <FaFacebookSquare />

            <FaInstagramSquare />
            </div>
      
      </div>
    </MDBFooter>
  );
}