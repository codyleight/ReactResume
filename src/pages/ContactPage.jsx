import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


export default function ContactPage() {



  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');

  const [name, setName] = useState('');
  const [nameError, setNameError] = useState('');

  const [submit, setSubmit] = useState('');


  const handleNameChange = (event) => {
    setName(event.target.value);
  };


  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    if (!nameIsValid(name)) {
      setNameError('Name field is required.');
      return;
    }

    if (!emailIsValid(email)) {
      setEmailError('Please enter a valid email address.');
      return;
    }

   
    else{
    setSubmit('Submitted!');
  }
    
  };

  const emailIsValid = (email) => {
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };


  const nameIsValid = (name) => {
    const nameRegex = /^.+$/;
    return nameRegex.test(name);
  };



  return (
    <section id="contact" className='bg text-light text'>
      <div className="section-content justify-content-center d-flex">
        <h2 className="section-header">Contact Cody</h2>
      </div>
      <div className="contact-section pt-5 pb-5">
        <div className="container">


          <form onSubmit={handleFormSubmit} id="contactForm">
            <div className="row-md-6 form-line pt-5 ">
              <div className="form-group">
                <label htmlFor="exampleInputUsername">Your name</label>
                
                <input
  type="name"
  className="form-control"
  id="exampleInputUsername"
  placeholder="Enter name"
  value={name}
  onChange={handleNameChange}
/>

          {nameError && <div className="text-danger">{nameError}</div>}
              </div>


              <div className="form-group">
          <label htmlFor="exampleInputEmail">Email Address</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail"
            placeholder="Enter Email id"
            value={email}
            onChange={handleEmailChange}
          />
          {emailError && <div className="text-danger">{emailError}</div>}
        </div>




              
            </div>
            <div className="">
            <div className="form-group">
  <label htmlFor="description">Message</label>
  <textarea className="form-control" id="description" placeholder="Enter Your Message" rows={5}></textarea>
</div>

{<div className="text-danger">{submit}</div>}
              <div className="d-flex justify-content-center">


              <button type="submit" className="btn btn-primary submit mt-5">
  <i className="fa fa-paper-plane" aria-hidden="true"></i> Send Message
</button>

              </div>
            </div>
          </form>
        </div>
        <div className="row space">
    
    </div>
      </div>
    </section>
  );
}