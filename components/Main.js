import React, { Component, useEffect, useState } from 'react'
import Image from 'next/image'
import styles from '../styles/Main.module.css'
import Bks from './subcomponents/Bks'
import Lsm from './subcomponents/Lsm'
import Ori from './subcomponents/Ori'
import Eco from './subcomponents/Eco'
import Board from './subcomponents/Board'
import arrows from '../assets/Images/arrows.svg'
import web1 from '../assets/Images/M1.svg'
import web2 from '../assets/Images/M2.svg'
import web3 from '../assets/Images/M3.svg'
import DiamondIcon from '@mui/icons-material/Diamond'
import WebIcon from '@mui/icons-material/Web'
import SecurityIcon from '@mui/icons-material/Security'
import CheckIcon from '@mui/icons-material/Check';
import WebAssetIcon from '@mui/icons-material/WebAsset';

function Home() {
  const [divider, setDivider] = useState({ bks: false, ori: false, lsm: false, eco: false })

  return (
    <div className={styles.main}>
      <div className={styles.hero}>
        <p>
          HELPING WEB3 COMPANIES SCALE BY BRINGING DATA
          DRIVEN DECISIONS AND CREATIVITY TOGETHER FOR
          UNMATCHED DESIGN AND DIGITAL EXPERIENCES
        </p>
        <p>
          Brand Intelligence & Solutions For the Web3 Economy
        </p>
        <button>Book a Demo</button>
      </div>
      <div className={styles.solutions}>
        <button id='bksbtn' onClick={() => setDivider({ bks: !divider.bks })}>
          <Image width={175} height={25}></Image>
          <p>Blockchain:</p>
          <p>Development & Architecture</p>
        </button>
        <button id='oribtn' onClick={() => setDivider({ ori: !divider.ori })}>
          <Image width={175} height={25}></Image>
          <p>Web3 Marketing:</p>
          <p>Campaign Architecture</p>
        </button>
        <button id='lsmbtn' onClick={() => setDivider({ lsm: !divider.lsm })}>
          <Image width={175} height={25}></Image>
          <p>Media:</p>
          <p>Anaylytics & Ad Platform</p>
        </button>
        <button id='ecobtn' onClick={() => setDivider({ eco: !divider.eco })}>
          <Image width={175} height={25}></Image>
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
          <Image height={300} width={200} ></Image>
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
          <Image height={450} width={200}></Image>
        </div>
        <div className={styles.winningContent}>
          <h5 className={styles.rainbowText}>Four companies, an array of experience</h5>
          <p>These disciplines combine to build strategies for and operationalize high impact growth initiatives focused on maximizing your companies profit.</p>
          <button>View All</button>
        </div>
      </div>
      <div className={styles.powerP3}>
        <div>
          <h1>Powered by Plan3</h1>
          <p>
            We have consultants on every continent, from a diversity of backgrounds, with decades of experience in management,
            technology, finance, marketing and governance. We have one thing in common:
            we’ve dedicated ourselves to working in, understanding and building the future of the web3 space.
          </p>
        </div>
        <div className={styles.powerBlurContainer}>
          <div className={styles.powerBlur}>
            <h3>Black Swan</h3>
            <p>Blockchain Development and Research</p>
            {/* svg */}
            <p><strong>30+</strong></p>
            <p><strong>End to end projects created (A-Z solutions)</strong></p>
          </div>
          <div className={styles.powerBlur}>
            <h3>Origins</h3>
            <p>Web3 Campaign Architecture | Transitioning Businesses to Web3</p>
            {/* svg */}
            <p><strong>79 Businesses</strong></p>
            <p><strong>Migrated From Web2 to Web3</strong></p>
          </div>
          <div className={styles.powerBlur}>
            <h3>Lionshare Media</h3>
            <p>Analytics | Algorithms | Tracking</p>
            {/* svg */}
            <p><strong>$2 Million</strong></p>
            <p><strong>Saved Through Data Driven Strategies</strong></p>
          </div>
          <div className={styles.powerBlur}>
            <h3>Eco Citizen</h3>
            <p>Web3 ESG</p>
            {/* svg */}
            <p><strong>79%</strong></p>
            <p><strong>CO2 project reductions</strong></p>
          </div>
        </div>
      </div>
      <div>
        {/* <Board /> */}
      </div>
      <div className={styles.mainFooter}>
        <h1>The New Standard in</h1>
        <h1 className={styles.rainbowText}> Limitless</h1>
        <p>A Profit Driven Think-Tank & Execution Team:</p>
        <p>Web3 'bridge' business integration</p>
        <ul>
          <li><CheckIcon /> 10+ Years of WEB3 Experience</li>
          <li><CheckIcon />$4.5M Sales to Date</li>
          <li><CheckIcon />30+ Strategic Partners</li>
        </ul>
        <div className={styles.mainFooterImmerse}>
          <h1>Immerse and Dominate Web3 with Plan3</h1>
          <p>Industry leaders with robust technologies to set you</p>
          <p>apart and ahead in a noisy Web3 world.</p>
          <button>Contact Us</button>
        </div>
      </div>
    </div>
  )
}

export default Home