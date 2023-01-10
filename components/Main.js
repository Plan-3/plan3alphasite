import React, { Component, useEffect, useState } from 'react'
import Image from 'next/image'
import styles from '../styles/Main.module.css'
//start importing subcomponent imports
import Bks from './subcomponents/Bks'
import Lsm from './subcomponents/Lsm'
import Ori from './subcomponents/Ori'
import Eco from './subcomponents/Eco'
import Board from './subcomponents/Board'
//importing mui assets
import DiamondIcon from '@mui/icons-material/Diamond'
import WebIcon from '@mui/icons-material/Web'
import SecurityIcon from '@mui/icons-material/Security'
import CheckIcon from '@mui/icons-material/Check';
//importing created images
import bkslogo from '../assets/Images/Logos/swan.png'
import lsmlogo from '../assets/Images/Logos/lsmlogo.png'
import orilogo from '../assets/Images/Logos/3.png'
import ecologo from '../assets/Images/Logos/4.png'
import defi from '../assets/Images/defi.png'
import arrows from '../assets/Images/Icons/arrows.svg'
import web1 from '../assets/Images/Icons/M1.svg'
import web2 from '../assets/Images/Icons/M2.svg'
import web3 from '../assets/Images/Icons/M3.svg'
import lightbulb from '../assets/Images/Icons/lightbulb.png'
import blockmessage from '../assets/Images/Icons/blockmessage.png'
import percentdown from '../assets/Images/Icons/percentdown.png'
import co2down from '../assets/Images/Icons/co2down.png'
import sometext from '../assets/Images/sometext.png'
import piechart from '../assets/Images/piechart.png'

function Home() {
  const [divider, setDivider] = useState({ bks: false, ori: false, lsm: false, eco: false })

  return (
    <div className={styles.main}>
      <div className={styles.hero}>
        <h1>
          SCALE YOUR <span className={styles.heroSpan}> COMPANY </span> WITH DATA</h1>
        <h1>  DRIVEN DECISIONS AND CREATIVITY TOGETHER FOR </h1>
        <h1>  <span className={styles.heroSpan}>UNMATCHED DESIGN AND DIGITAL EXPERIENCES </span>
        </h1>
        <p>
          Brand Intelligence & Solutions For the Web3 Economy
        </p>
        <button>Book a Demo</button>
      </div>
      <div className={styles.solutions}>
        <button id='bksbtn' onClick={() => setDivider({ bks: !divider.bks })}>
          <Image width={250} height={100} src={bkslogo}></Image>
          <p>Deep Tech:</p>
          <p>Research, Development & Architecture</p>
        </button>
        <button id='oribtn' onClick={() => setDivider({ ori: !divider.ori })}>
          <Image width={250} height={100} src={orilogo}></Image>
          <p>Web3 Marketing:</p>
          <p>Campaign Architecture & Management</p>
        </button>
        <button id='lsmbtn' onClick={() => setDivider({ lsm: !divider.lsm })}>
          <Image width={250} height={100} src={lsmlogo}></Image>
          <p>Lionshare Media:</p>
          <p>Anaylytics: Media, Data, & Ad Platform</p>
        </button>
        <button id='ecobtn' onClick={() => setDivider({ eco: !divider.eco })}>
          <Image width={250} height={100} src={ecologo}></Image>
          <p>Carbon Offset:</p>
          <p>ESG Initiatives</p>
        </button>
      </div>
      {(divider.bks) ?
        <Bks />
        :
        (divider.ori) ?
          <Ori />
          :
          (divider.lsm) ?
            <Lsm />
            :
            (divider.eco) ?
              <Eco />
              :
              ""
      }
      <div className={styles.web3}>
        <div className={styles.iconContainer}>
          <div>
            <DiamondIcon />
            <p>Take advantage of a new and rapidly developing market</p>
          </div>
          <div>
            <SecurityIcon />
            <p>Create more trust and transparency within your customer base</p>
          </div>
          <div>
            <WebIcon />
            <p>Leverage blockchain technology to reach new heights</p>
          </div>
        </div>
      </div>
      <div className={styles.toolsStart}>

        <div className={styles.tools}>
          <h3>
            We have the right set of tools
            and technologies to build
            user-centric solutions for
            every customer's needs
          </h3>
          <p>
            To create a whole new experience in the web3
            world, we have masters that craft state of art
            solution with modern technology
          </p>
          <button>Get Started</button>
        </div>
        <div className={styles.toolsImg}></div>
      </div>
      <div className={styles.defi}>
        <div>
          <Image height={700} width={600} src={defi}></Image>
        </div>
        <div className={styles.defiContent}>
          <div>
            <h3>Give your Web3 project an unfair advantage</h3>
            <p>We build quality products, hire quality people, and have a quality process to guarantee you win.</p>
            <button>Get Started</button>
          </div>
          <div>
            <div className={styles.defiStat}>
              <p className={styles.numberRound}>1</p>
              <p>Using systematic processes to design brands, products and interfaces</p>
            </div>
            <div className={styles.defiStat}>
              <p className={styles.numberRound}>2</p>
              <p>Picking the most suitable blockchain, tech stack, tools, and methodology</p>
            </div>
            <div className={styles.defiStat}>
              <p className={styles.numberRound}>3</p>
              <p>Working with a committed team that gets shit done</p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.versusWeb}>
        <div className={styles.versusHero}>
          <p>Web1 vs Web2 vs Web3</p>
        </div>
        <div className={styles.divisionsContainer}>
          <div className={styles.webDivisions}>
            <Image src={web1} height={100} width={100}></Image>
            <h3>Web1</h3>
            <p>Static info publications, subscription, and linking via url</p>
          </div>
          <Image className={styles.arrows} src={arrows} width={130} height={130}></Image>
          <div className={styles.webDivisions}>
            <Image src={web2} height={100} width={100}></Image>
            <h3>Web2</h3>
            <p>Social exhanges among users on social media platform</p>
          </div>
          <Image className={styles.arrows} src={arrows} width={130} height={130}></Image>
          <div className={styles.webDivisions}>
            <Image src={web3} height={100} width={100}></Image>
            <h3>Web3</h3>
            <p>Decentralized data transactions between digital wallets on blockchain</p>
          </div>
        </div>
      </div>
      <div className={styles.winning}>
        <div>
          <Image height={500} width={500} src={sometext}></Image>
        </div>
        <div className={styles.winningContent}>
          <h2 className={styles.rainbowText}>Four companies, an array of experience</h2>
          <p>These disciplines combine to build strategies for and operationalize high impact growth initiatives focused on maximizing your companies profit.</p>
          <button>View All</button>
        </div>
      </div>
      <div className={styles.powerP3}>
        <div style={{ display: 'flex', flexDirection: 'column', width: '50%' }}>
          <h1>Powered by Plan3</h1>
          <p>
            We have consultants on every continent, from a diversity of backgrounds, with decades of experience in management,
            technology, finance, marketing and governance. We have one thing in common:
            we’ve dedicated ourselves to working in, understanding and building the future of the web3 space.
          </p>
        </div>
        <div className={styles.powerBlurContainer}>
          <div className={styles.powerBlur}>
            <Image height={75} width={250} src={bkslogo}></Image>
            <p>Deep Tech: Research, Development, & Architecture</p>
            <Image height={150} width={150} src={lightbulb}></Image>
            <p><strong>5+ Living Whitepapers Developed</strong></p>
          </div>
          <div className={styles.powerBlur}>
            <Image height={75} width={250} src={orilogo}></Image>
            <p>web3 Marketing: Campaign Architecture & Management</p>
            <Image height={150} width={150} src={blockmessage}></Image>
            <p><strong>3M+ Sales to date</strong></p>
          </div>
          <div className={styles.powerBlur}>
            <Image height={75} width={250} src={lsmlogo}></Image>
            <p>Analytics: Media, Data, & Ad Platform</p>
            <Image height={150} width={150} src={percentdown}></Image>
            <p><strong>$2 Million Saved Through Data Driven Strategies</strong></p>
          </div>
          <div className={styles.powerBlur}>
            <Image height={75} width={250} src={ecologo}></Image>
            <p>Carbon Offset: ESG Initiatives</p>
            <Image height={150} width={150} src={co2down}></Image>
            <p><strong>10% Estimated Valuation increase for Carbon Negative Businesses</strong></p>
          </div>
        </div>
      </div>
      <div className={styles.boardStart}>
        <p className={styles.rainbowText} style={{ fontSize: '3rem', fontWeight: '5', textAlign: 'center' }}>THE TEAM</p>
        <p style={{ fontSize: '3rem', fontWeight: '5', textAlign: 'center' }}>Board Members</p>
        <Board />
      </div>
      <div className={styles.footerMain}>
        <div className={styles.blur}>
          <h1>The New Standard in</h1>
          <h1 className={styles.rainbowText}> Limitless</h1>
          <p>A Profit Driven Think-Tank & Execution Team:</p>
          <p>Web3 'bridge' business integration</p>
          <ul>
            <li><CheckIcon /> 2+ proprietary token standards</li>
            <li><CheckIcon />$500k+ total trading volume</li>
            <li><CheckIcon />30+ Strategic Partners</li>
          </ul>
        </div>
        <div className={styles.blur}>
          <Image src={piechart} height={350} width={350}></Image>
        </div>
        <div className={styles.footerImmerse}>
          <h1>Wrap your Business in Web3 and Dominate with Plan3</h1>
          <p>Leaders with robust technologies to set you apart in a noisy Web3 world.</p>
          <button>Contact Us</button>
        </div>
      </div>
    </div>
  )
}

export default Home