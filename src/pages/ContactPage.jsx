import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function ContactPage() {
  return (
    <section id="contact" className='bg text-dark text'>
      <div className="section-content justify-content-center d-flex">
        <h2 className="section-header">Contact Cody</h2>
      </div>
      <div className="contact-section pt-5 pb-5">
        <div className="container">
          <form>
            <div className="row-md-6 form-line pt-5 ">
              <div className="form-group">
                <label htmlFor="exampleInputUsername">Your name</label>
                <input type="text" className="form-control" id="" placeholder="Enter Name" />
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputEmail">Email Address</label>
                <input type="email" className="form-control" id="exampleInputEmail" placeholder="Enter Email id" />
              </div>
              <div className="form-group">
                <label htmlFor="telephone">Mobile No.</label>
                <input type="tel" className="form-control" id="telephone" placeholder="Enter 10-digit mobile no." />
              </div>
            </div>
            <div className="">
            <div className="form-group">
  <label htmlFor="description">Message</label>
  <textarea className="form-control" id="description" placeholder="Enter Your Message" rows={5}></textarea>
</div>
              <div className="d-flex justify-content-center">
                <button type="button" className="btn btn-primary submit mt-5">
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