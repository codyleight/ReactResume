
import React from 'react';
import {
  MDBFooter,
  MDBContainer,
  MDBCol,
  MDBRow,
} from 'mdb-react-ui-kit';

export default function App() {
  return (
    <MDBFooter className='text-center text-white bg-danger'>
      <MDBContainer className='p-4'>
        <section className=''>
           Footer Example
          <MDBRow className='d-flex justify-content-center'>
            <MDBCol lg='2'>
              <div className='ratio ratio-16x9'>
                
              </div>
            </MDBCol>
          </MDBRow>
        </section>
      </MDBContainer>

      <div className='text-center p-3 bg-warning' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        
        <a className='text-white' href='https://www.codyleight.com/'>
          codyleight.com
        </a>
      </div>
    </MDBFooter>
  );
}