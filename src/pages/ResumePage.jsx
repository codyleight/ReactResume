import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaDownload } from "react-icons/fa";

export default function ResumePage() {
  

  return (

   
    <div className='bg'>
      <div className='d-flex justify-content-end iconsize text-light'>

      <a href="/assets/Resume.pdf" download>
        Download Resume:
      <FaDownload />
      </a>
      </div>
    <div className=" text-primary" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <h2>
            Resume 
      </h2>
      
    </div>

    <div className="text-center text-light">
      <h3>Employment History</h3>
      <br></br>
      <h4>Senior Customer Support Specialist at <span>Sciplay</span>, Austin
March 2019 — Feburary 2024</h4>
<br></br>
<h5>• Provided personalized customer support that went above and 
beyond the customer's expectations, resulting in a increase in 
customer loyalty and retention. <br></br>
• Developed and implemented customer support procedures such 
as macros that improved customer service and reduced customer 
wait times <br></br>
• Worked Closely with our QA Team, to address customer concerns 
on current issues, and reported this in Jira and to the correct 
teams.</h5>

<br></br>
    <h4>Customer Support Specialist at <span>2k Entertainment</span>, Austin
November 2018 — March 2019</h4> <br></br>

<h5>• Analyzed customer service data to identify areas of improvement, 
resulting in a reduction in customer service issues <br></br>
• Built a Macro Database to quickly address common concerns or 
issues.</h5>

<br></br>


<h4>Customer Support at <span>Blizzard Entertainment</span>, Austin
October 2017 — October 2018</h4>
<br></br>

<h5>• Maintained the Highest CSAT Score among 200+ Agents for the 
duration of my Contract, while holding one of the highest Tickets 
Per hour. <br></br>
• Developed and maintained customer service policies and 
procedures to ensure customer complaints are handled 
consistently and efficiently</h5>



<br></br>
<h3>Skills</h3>
<br></br>

<h4>
• JavaScript
• Python
• C#
• Unity2d
• Unity3d
• React/Redux
• Node.js
• SQL
• MySQL
• PostgreSQL
<br></br>
• SQLAlchemy
• Express
• Flask
• HTML/CSS
• Git
• GitLab
• Jira & Confluence
• Jest
• Sequelize
• AJAX
• MongoDB
</h4>

<br></br>

<h3>Education</h3>
<br></br>

<h4> Computer Science, San Antonio College, San Antonio</h4>
<br></br>
<h4>Coding, UTSA BootCamp Full Stack Development, San Antonio</h4>



    </div>

    </div>
  );
}