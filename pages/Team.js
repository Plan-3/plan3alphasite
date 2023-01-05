import React from 'react'
import Image from 'next/image'
import styles from '../styles/Team.module.css'
import team from '../assets/Team.json'
import Nav from '../components/Nav'
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
      <Nav />
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
            <div>
              <Image height={100} width={25}></Image>
              <Image height={100} width={25}></Image>
              <Image height={25} width={25}></Image>
              <Image height={25} width={25}></Image>
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
              <Image height={50} width={100}></Image>
              <Image height={50} width={100}></Image>
              <Image height={50} width={100}></Image>
              <Image height={50} width={100}></Image>
            </div>
            <button>Get In Touch</button>
          </div>
          <div className={styles.largeBox}>
            <h1>Your Web3 Patners!</h1>
          </div>
        </div>
        <div className={styles.heroRight}>
          <div className={styles.mediumBox}>
            <div>
              <Image height={100} width={25}></Image>
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
        <div className={styles.items}>
          <div className={styles.item}>
            <Image src={m1}></Image>
            <p>Embrace, change, and accelerate innovation; foster the evolution of web3 and embrace the key value-add components for: Blockchain tech ecosystems, media and analytics, campaign architecture. </p>
          </div>
          <div className={styles.itemBordered}>
            <Image src={m2}></Image>
            <p>Empower technology, individuals, teams and strategic partners to provide viable solutions to amplify business intelligence. </p>
          </div>
          <div className={styles.item}>
            <Image src={m3}></Image>
            <p>'Absorb knowledge' - Leverage internal and key-strategic partner expertise to develop highly scalable, precise projects, and execute strategic workflows.</p>
          </div>
        </div>
        <div className={styles.missionTitle}>
          <h1 className={styles.gradientTitle}>Vision</h1>
        </div>
        <div className={styles.items}>
          <div className={styles.item}>
            <Image src={v1}></Image>
            <p>PlanB is a profit driven think-tank. We constantly adapt, perform, and deliver results. </p>
          </div>
          <div className={styles.itemBordered}>
            <Image src={v2}></Image>
            <p>Utilizing our 'triangulated perspectives,' we architect value-focused Web3 projects by hyper-leveraging business intelligence and research. </p>
          </div>
          <div className={styles.item}>
            <Image src={v3}></Image>
            <p>We are highly focused on analysis, cutting edge technology, KPIs, data science, AI, and Machine Learning, to interpret and anticipate global market outcomes.</p>
          </div>
        </div>
      </div>
      <div className={styles.soul}>
        <h1 className={styles.gradientTitle}>THE "SOUL" OF PLAN_3</h1>
        <p>“Process should not stifle creativity. It can’t end up being a barrier to innovation or be the barrier to the fluid movement of ideas.”</p>
        <div className={styles.soulIcons}>
          <div className={styles.soulIconsCard}>
            <Image src={s1}></Image>
            <p>Radical Ownership</p>
          </div>
          <div className={styles.soulIconsCard}>
            <Image src={s2}></Image>
            <p>Know the Why</p>
          </div>
          <div className={styles.soulIconsCard}>
            <Image src={s3}></Image>
            <p>Mastery | Simplification</p>
          </div>
          <div className={styles.soulIconsCard}>
            <Image src={s4}></Image>
            <p>Solution-Based Mindset</p>
          </div>
          <div className={styles.soulIconsCard}>
            <Image src={s5}></Image>
            <p>Ruthless Efficiency</p>
          </div>
        </div>
        <div className={styles.soulIcons}>
          <div className={styles.soulIconsCard}>
            <Image src={s6}></Image>
            <p>Profit Growth</p>
          </div>
          <div className={styles.soulIconsCard}>
            <Image src={s7}></Image>
            <p>Honor | Integrity</p>
          </div>
          <div className={styles.soulIconsCard}>
            <Image src={s8}></Image>
            <p>Passionate Creativity</p>
          </div>
          <div className={styles.soulIconsCard}>
            <Image src={s9}></Image>
            <p>Transparency Loyalty</p>
          </div>
          <div className={styles.soulIconsCard}>
            <Image src={s10}></Image>
            <p>Balance | Charity</p>
          </div>
        </div>
      </div>
      <div className={styles.ourVision}>
        <div className={styles.ourVisionHeader}>
          <h1 className={styles.gradientTitle}>Our Vision</h1>
          <p>Embrace, change, and accelerate innovation; foster the evolution of web3 and embrace the key value-add components for: Blockchain tech ecosystems, media and analytics, ESG, campaign architecture. </p>
          <button>Get Started</button>
        </div>
        <div className={styles.ourVisionBoxes}>
          <div className={styles.ourVisionBox}>
            <h1>INDEPENDENTLY, AS ONE</h1>
            <p>The only way for the team to grow, is for each person to grow personally. We believe we must continue to hone in on our skills and self.</p>
          </div>
          <div className={styles.ourVisionBox}>
            <h1>WHATEVER IT TAKES</h1>
            <p>The only way for the team to grow, is for each person to grow personally. We believe we must continue to hone in on our skills and self.</p>
          </div>
          <div className={styles.ourVisionBox}>
            <h1>SOLUTION FOCUSED</h1>
            <p>The only way for the team to grow, is for each person to grow personally. We believe we must continue to hone in on our skills and self.</p>
          </div>
        </div>
        <div className={styles.ourVisionFooter}>
          <div>
            <Image height={250} width={250}></Image>
          </div>
          <div style={{width: '70%'}}>
            <h3>"They built and launch my entire Web3 project in 30 days, it has been an amazing experience."</h3>
            <p>The best part about Web3 is they have dedicated teams for any task! </p>
            <div className={styles.ourVisionFooterLogo}>
              <Image height={100} width={400}></Image>
              <button>Get Started</button>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.team}>
        {team.map((person, index) => {
          return(
            <div className={styles.teamCard}>
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