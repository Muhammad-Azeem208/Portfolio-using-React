import React from 'react'
import Navbar from './Navbar'
import {TbGridDots} from 'react-icons/tb'
import Skills from './subcomponents/Skills'
import Languages from './subcomponents/Languages'
import Experience from './subcomponents/Experience'
import Education from './subcomponents/Education'
import Hobbies from './subcomponents/Hobbies'

const Resume = ({show, setShow}) => {
  return (
    <>
    <section className='page resumePage'>
    <Navbar show={show}/>
    <TbGridDots onClick={()=> setShow(!show)} className='hamburger'/>
      <div className="banner">
        <div className="first-column">
          <Skills/>
          <Languages/>
          <div className='personal-skills'>
            <h3>SOFT SKILLS</h3>
            <h4><p>Teamwork and Collaboration • Problem-Solving </p></h4>
            <h4><p>Creativity and Innovation • Time Management • Adaptability </p></h4>
            <h4><p>Critical Thinking • Attention to Detail • Work Ethic</p></h4>
            <h4><p>Emotional Intelligence • Conflict Resolution • Self-Motivation</p></h4>
            <h4><p>Communication Skills • Leadership • Decision-Making • Active Listening</p></h4>
          </div>
        </div>
        <div className="second-column">
          <Experience/>
          <Education/>
        </div>
        <div className="third-column">
          <div>
            <h3>WHAT CAN I DO!</h3>
            <h4><p>• Build dynamic and responsive web applications using the MERN stack.</p></h4>
            <h4><p>• Design user-friendly interfaces with React.js and Tailwind CSS.</p></h4>
            <h4><p>• Develop RESTful APIs with Node.js and Express.js.</p></h4>
            <h4><p>• Manage and query databases using MongoDB and PostgreSQl.</p></h4>
            <h4><p>• Integrate third-party APIs and libraries to enhance application functionality.</p></h4>
            <h4><p>• Debug and troubleshoot issues to ensure smooth performance.</p></h4>
            <h4><p>• Collaborate with teams to deliver projects on time.</p></h4>
            <h4><p>• Optimize applications for speed and scalability.</p></h4>
            <h4><p>• Utilize Git and GitHub for version control, collaboration, and efficient code management.</p></h4>
          </div>
          <div>
            <h3>HOBBIES AND INTERESTS</h3>
            <Hobbies/>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default Resume