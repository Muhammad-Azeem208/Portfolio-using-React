import React from 'react'
import {TbGridDots} from 'react-icons/tb'
import Navbar from '../components/Navbar'

const About = ({show, setShow}) => {
  return (
    <>
    <section className='page aboutPage'>
      <Navbar show={show}/>
      <TbGridDots onClick={()=> setShow(!show)} className='hamburger'/>
        <div className="banner">
          <div className="content">
            <div>
              <h1>ABOUT</h1>
              <h3>malikazeem208@gmail.com</h3>
              <h3>+92 310 3853003</h3>
            </div>
            <div>
            Hi, I am a passionate MERN stack developer with hands-on experience in creating impactful web applications. I love building efficient, 
            user-friendly solutions and continuously improving my skills in modern web technologies to deliver innovative results.
            I am excited to collaborate on challenging projects and contribute to impactful ideas.
            </div>
            <div>
              <p>Shah Latif Town 17B</p>
              <p>Karachi, Pakistan</p>
            </div>
          </div>
          <div className="profileImage">
            <img src="/my2.png" alt="profileimage" />
            <span></span>
          </div>
        </div>
    </section>
    </>
  )
}

export default About