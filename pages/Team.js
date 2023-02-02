import React from 'react'
import Image from 'next/image'
import styles from '../styles/Team.module.css'
import team from '../assets/Team.json'
import Nav from '../components/Nav'

import eco from '../assets/Images/Logos/ecologo.svg'
import bks from '../assets/Images/Logos/swanlogo.png'
import ori from '../assets/Images/Logos/orilogo.png'
import lsm from '../assets/Images/Logos/lsmlogo.png'
import pl3 from '../assets/Images/Logos/plan3logo.png'
import brainiac from '../assets/Images/teamimgs/brainiac.png'
import gearworld from '../assets/Images/teamimgs/gearworld.png'
import speaker from '../assets/Images/teamimgs/speaker.png'
import web from '../assets/Images/teamimgs/web.png'
import phonein from '../assets/Images/teamimgs/phonein.png'
import testimony from '../assets/Images/teamimgs/testimonial.jpg'
import independently from '../assets/Images/teamimgs/independently.png'
import solution from '../assets/Images/teamimgs/solution.png'
import takes from '../assets/Images/teamimgs/takes.png'
import m1 from '../assets/Images/Icons/M1.svg'
import m2 from '../assets/Images/Icons/M2.svg'
import m3 from '../assets/Images/Icons/M3.svg'
import v1 from '../assets/Images/Icons/V1.svg'
import v2 from '../assets/Images/Icons/V2.svg'
import v3 from '../assets/Images/Icons/V3.svg'
import s1 from '../assets/Images/Icons/S1.svg'
import s2 from '../assets/Images/Icons/S2.svg'
import s3 from '../assets/Images/Icons/S3.svg'
import s4 from '../assets/Images/Icons/S4.svg'
import s5 from '../assets/Images/Icons/S5.svg'
import s6 from '../assets/Images/Icons/S6.svg'
import s7 from '../assets/Images/Icons/S7.svg'
import s8 from '../assets/Images/Icons/S8.svg'
import s9 from '../assets/Images/Icons/S9.svg'
import s10 from '../assets/Images/Icons/S10.svg'
import Footer from '../components/Footer'

function Team() {
  return (
    <div>
      <div style={{ position: 'sticky', top: 0 }}>
        <Nav />
      </div>
      <div className={styles.title}>
        <h1>WE ARE YOUR</h1>
        <h2 className={styles.gradientTitle}>WEB3 PARTNERS!</h2>
        <p>WE CARE ABOUT PERSONALITY AND CAPABILITY. LEADERS IN OUR COMPANY EACH BRING WITH THEM A UNIQUE SET OF SKILLS AND EXPERIENCES THAT SUPPORT US IN OUR MISSION.</p>
      </div>
      <div className={styles.hero}>
        <div className={styles.heroLeft}>
          <div className={styles.smallBox}>
            <h3>Speak to a Web3 Expert</h3>
            <p>First consultation is on us.</p>
          </div>
          <div className={styles.mediumBox}>
            <div className={styles.imageOverwrite}>
              <Image height={40} src={gearworld}></Image>
              <Image height={40} src={brainiac}></Image>
            </div>
            <div className={styles.imageOverwrite}>
              <Image height={40} src={speaker}></Image>
              <Image height={40} src={web}></Image>
            </div>
            <h3>One goal:</h3>
            <h3>Domination</h3>
          </div>
        </div>
        <div className={styles.heroCenter}>
          <div className={styles.largeBox}>
            <h1>The New Standard in <span className={styles.gradientTitle}>Limitless</span></h1>
            <p>A Profit Driven Think-Tank & Execution Team: Web3 'Bridge' Business Integration</p>
            <div>
              <Image height={100} src={bks}></Image>
              <Image height={100} src={ori}></Image>
              <Image height={100} src={lsm}></Image>
              <Image height={100} src={eco}></Image>
            </div>
            <button><a href="/Contact">Get in Touch</a></button>
          </div>
          <div className={styles.largeBox}>
            <h1>Your Web3 Patners!</h1>
          </div>
        </div>
        <div className={styles.heroRight}>
          <div className={styles.mediumBox}>
            <div>
              <Image height={200} src={phonein}></Image>
            </div>
            <h3>One goal:</h3>
            <h3>Domination</h3>
          </div>
          <div className={styles.smallBox}>
            <h3>Speak to a Web3 Expert</h3>
            <p>First consultation is on us.</p>
          </div>
        </div>
      </div>
      <div className={styles.missionBanner}>
        <h1 className={styles.gradientTitle}>Mission - Core Values – Vision</h1>
      </div>
      <div className={styles.mission}>
        <div className={styles.missionTitle}>
          <h1 className={styles.gradientTitle}>Mission</h1>
        </div>
        <div className={styles.items} style={{ justifyContent: 'center' }}>
          {/* <div className={styles.item}>
            <Image src={m1}></Image>
            <p>Embrace, change, and accelerate innovation; foster the evolution of web3 and embrace the key value-add components for: Blockchain tech ecosystems, media and analytics, campaign architecture. </p>
          </div> */}
          <div className={styles.itemBordered}>
            <Image src={m2}></Image>
            <p>Develop and leverage deep, emerging technologies to implement commercial applications for the digital economy in the pursuit of fundamental value and positive progress.</p>
          </div>
          {/* <div className={styles.item}>
            <Image src={m3}></Image>
            <p>'Absorb knowledge' - Leverage internal and key-strategic partner expertise to develop highly scalable, precise projects, and execute strategic workflows.</p>
          </div> */}
        </div>
        <div className={styles.missionTitle}>
          <h1 className={styles.gradientTitle}>Vision</h1>
        </div>
        <div className={styles.items}>
          <div className={styles.item}>
            <Image src={v1}></Image>
            <p>
              Plan3 is an applied profit-driven think tank and autonomous execution team
              that operates within “Pasteur’s Quadrant” Pasteur’s Quadrant is research that
              seeks fundamental understanding and has immediate use for society.
            </p>
          </div>
          <div className={styles.itemBordered}>
            <Image src={v2}></Image>
            <p>
              We harness deep tech, marketing, analytics, and (eco)energy advances to solve
              real-world problems and create new opportunities. We deploy an array of perspectives
              to engineer the best vision, strategy, tactics, and implementation for our projects.
            </p>
          </div>
          <div className={styles.item}>
            <Image src={v3}></Image>
            <p>
              Our managed projects syndicate internal resources in collaboration
              with our network of strategic ecosystems, delivering precise results
              to bridge the gap into new paradigms. Plan3 applied research connects
              discoveries to a practical and highly-strategic end; commercialization is focused
              on delivering end results.
            </p>
          </div>
        </div>
      </div>
      <div className={styles.soul}>
        <h1 className={styles.gradientTitle}>Core Values</h1>
        <p>“Process should not stifle creativity. It can’t end up being a barrier to innovation or be the barrier to the fluid movement of ideas.”</p>
        <div className={styles.soulIcons}>
          <div className={styles.soulIconsCard}>
            <Image src={s1}></Image>
            <p>People First</p>
          </div>
          <div className={styles.soulIconsCard}>
            <Image src={s2}></Image>
            <p>Solution-Based Mindset</p>
          </div>
          <div className={styles.soulIconsCard}>
            <Image src={s3}></Image>
            <p>Amplified Lifelong Learning</p>
          </div>
          <div className={styles.soulIconsCard}>
            <Image src={s4}></Image>
            <p>Do the Next Right Thing</p>
          </div>
          <div className={styles.soulIconsCard}>
            <Image src={s5}></Image>
            <p>Radical Ownership | Quiet Confidence</p>
          </div>
        </div>
        <div className={styles.soulIcons}>
          <div className={styles.soulIconsCard}>
            <Image src={s6}></Image>
            <p>Earned, Not Given</p>
          </div>
          <div className={styles.soulIconsCard}>
            <Image src={s7}></Image>
            <p>Mastery | Simplification</p>
          </div>
          <div className={styles.soulIconsCard}>
            <Image src={s8}></Image>
            <p>Creativity | Intellectual Curiosity</p>
          </div>
          <div className={styles.soulIconsCard}>
            <Image src={s9}></Image>
            <p>Know the Why | Inject Knowledge</p>
          </div>
          <div className={styles.soulIconsCard}>
            <Image src={s10}></Image>
            <p>Transparency | Loyalty</p>
          </div>
        </div>
      </div>
      <div className={styles.ourVision}>

        <div className={styles.ourVisionBoxes}>
          <div className={styles.ourVisionBox}>
            <h1>INDEPENDENTLY, AS ONE</h1>
            <p>The only way for the team to grow, is for each person to grow personally. We believe we must continue to hone in on our skills and self.</p>
            <Image src={independently}></Image>
          </div>
          <div className={styles.ourVisionBox}>
            <h1>WHATEVER IT TAKES</h1>
            <p>The only way for the team to grow, is for each person to grow personally. We believe we must continue to hone in on our skills and self.</p>
            <Image src={takes}></Image>
          </div>
          <div className={styles.ourVisionBox}>
            <h1>SOLUTION FOCUSED</h1>
            <p>The only way for the team to grow, is for each person to grow personally. We believe we must continue to hone in on our skills and self.</p>
            <Image src={solution}></Image>
          </div>
        </div>
        <div className={styles.ourVisionFooter}>
          <div>
            <Image height={300} src={testimony}></Image>
          </div>
          <div style={{ marginRight: '5%', marginLeft: '5%' }}>
            <h3>"They built and launched my entire Web3 project in 30 days, it has been an amazing experience."</h3>
            <p>The best part about Plan3 is they have dedicated teams for any task! </p>
            <div className={styles.ourVisionFooterLogo}>
              <Image height={100} src={pl3}></Image>
              <button><a href="/Contact">Get Started</a></button>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.team}>
        {team.map((person, index) => {
          return (
            <div className={styles.teamCard} key={person.name}>
              <h3>{person.name}</h3>
              <h4>{person.job}</h4>
            </div>
          )
        })}
      </div>
      <Footer />
    </div>
  )
}

export default Team