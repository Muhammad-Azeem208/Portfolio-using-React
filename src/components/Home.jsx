import React from 'react'
import Navbar from '../components/Navbar'
import {TbGridDots} from 'react-icons/tb'
import {Link} from 'react-router-dom'
import {AiFillInstagram, AiFillFacebook, AiFillLinkedin} from 'react-icons/ai'
import {FaGithubSquare, FaSnapchat, FaWhatsapp} from 'react-icons/fa'
import {RiTwitterXLine} from 'react-icons/ri'

const Home = ({show, setShow}) => {
  return (
    <>
    <section className='page homePage'>
      <Navbar show={show}/>
      <TbGridDots onClick={()=> setShow(!show)} className='hamburger'/>
        <div className="banner">
          <h1>MUHAMMAD</h1>
          <h1>AZEEM</h1>
          <p>Web Developer</p>
          <div className="btns">
            <Link to={'https://res.cloudinary.com/dk5sce1lb/image/upload/v1737837548/Update-Resume_uojvn0.pdf'} target='_blank'>Resume</Link>
            <Link to={'/portfolio'}>Portfolio</Link>
          </div>
        </div>
        <footer>
          <ul>
            <Link to={'https://www.instagram.com/azeem.malik3?igsh=NTh0ZvMXIrdzI2'} target='_blank'><AiFillInstagram/></Link>
            <Link to={'https://www.facebook.com/azeem.malik.39566'} target='_blank'><AiFillFacebook/></Link>
            <Link to={'https://www.linkedin.com/in/muhammad-azeem-b54462202'} target='_blank'><AiFillLinkedin/></Link>
            <Link to={'https://x.com/Muhamma82264113?t=CSiRZu5qNEw5uwDgwZcEBA&s=09'} target='_blank'><RiTwitterXLine/></Link>
            <Link to={'https://github.com/Muhammad-Azeem208'} target='_blank'><FaGithubSquare/></Link>
            <Link to={'https://wa.me/qr/GRYT4VN6XHE6B1'} target='_blank'><FaWhatsapp/></Link>
            <Link to={'https://www.snapchat.com/add/malik.azeem3?share_id=TWDI4QNi7Lo&locale=en-US'} target='_blank'><FaSnapchat/></Link>
          </ul>
          <a style={{color: 'yellowgreen'}} className='download-btn' href="/Update-Resume.pdf" download='Update-Resume.pdf'>[Download Resume]</a>
        </footer>
    </section>
    </>
  )
}

export default Home