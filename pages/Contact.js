import React from 'react'
import Image from 'next/image'
import Footer from '../components/Footer'
import Nav from '../components/Nav'

import styles from '../styles/Home.module.css'

import robothand from '../assets/Images/robothand.svg'


function Contact() {
  return (
    <div>
      <Nav />
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
          <button>send</button>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Contact