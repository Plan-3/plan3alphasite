import React, {useState} from 'react'
import Image from 'next/image'
import Footer from '../components/Footer'
import Nav from '../components/Nav'

import styles from '../styles/Home.module.css'
import style from '../styles/Main.module.css'

import robothand from '../assets/Images/robothand.svg'


function Contact() {
  const [thanks, setThanks] = useState(false)
  return (
    <div>
      <Nav />
    {thanks ?
      <div className={style.hero}>
        <p className={style.rainbowText} style={{fontSize: '3rem', fontWeight: 50}}>Thanks For Reaching Out!</p>
        <p style={{fontSize: '3rem', fontWeight: 50}}>We will get back to you soon!</p>
        <button><a style={{fontSize: '2rem', fontWeight: 50}} href="/">Return Home</a> </button>
      </div>
    :
      <div className={styles.contact}>
        <div className={styles.contactInfo}>
        <h1>Contact Us</h1>
        <p><strong>Contact Information:</strong></p>
        <p>415-887-2675</p>
        <p>3300 N. Ashton Blvd Lehi, UT 84043</p>
          <Image src={robothand}></Image>
        </div>
        <div className={styles.contactMessage}>
          <label htmlFor="fname">First Name</label>
          <input type="text" name="fname" id="" />
          <label htmlFor="lname">Last Name</label>
          <input type="text" name="lname" id="" />
          <label htmlFor="email">Your Email</label>
          <input type="email" name="email" id="" />
          <label htmlFor="message">Your Message</label>
          <input type="text" name="message" id="" />
          <button onClick={() => setThanks(!thanks)}>Send</button>
        </div>
      </div>

    }
      <Footer />
    </div>
  )
}

export default Contact