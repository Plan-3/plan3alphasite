import React, { useState } from 'react'
import Image from 'next/image';
import Nav from '../components/Nav'
import styles from '../styles/EcoSystem.module.css'
import AddIcon from '@mui/icons-material/Add';
import Footer from '../components/Footer';

import bkslogo from '../assets/Images/Logos/swanlogo.png'
import lsmlogo from '../assets/Images/Logos/lsmlogo.png'
import orilogo from '../assets/Images/Logos/orilogo.png'
import ecologo from '../assets/Images/Logos/ecologo.png'
import adslogo from '../assets/Images/ecosystem/adslogo.png'
import botlogo from '../assets/Images/ecosystem/botlogo.png'
import citilogo from '../assets/Images/ecosystem/citilogo.png'
import econetzero from '../assets/Images/ecosystem/econetzero.png'
import ecoproto from '../assets/Images/ecosystem/ecoproto.png'
import ethoslogo from '../assets/Images/ecosystem/ethoslogo.png'
import liquidlogo from '../assets/Images/ecosystem/liquidlogo.png'
import lyticslogo from '../assets/Images/ecosystem/lyticslogo.png'
import rnd from '../assets/Images/R-d-division.png'
import outsrc from '../assets/Images/Outsourcing-structure.png'
import agree from '../assets/Images/Final-agreements.png'
import marketing from '../assets/Images/Marketing-division.png'
import webdots from '../assets/Images/web2.png'


function Ecosystem() {
  const [activePillar, setActivePillar] = useState({ bkPillar: true, oriPillar: false, lionPillar: false, ecoPillar: false })
  return (
    <div>
      <Nav />
      <div className={styles.ecosystemMain}>
        <div className={styles.hero}>
          <h1>Ecosystem</h1>
          <p>Our Unique 4-Pillar Approach</p>
          <div className={styles.fourPillars}>
            {(activePillar.bkPillar) ?
              <div className={styles.pillarContent}>
                <div>
                  <Image src={bkslogo} height={150}></Image>
                </div>
                <div className={styles.underlineGradient}>

                </div>
                <div className={styles.pillarContentMain}>
                  <h3>Blockchain Development and Research</h3>
                  <div className={styles.pillarUlRow}>
                    <ul>
                      <li>Blockchain Technology A-Z</li>
                      <li>Cap Table Management of Securities and Equities</li>
                      <li>Smart Contract Development and Institutional Deployment</li>
                      <li>Asset Tokenization</li>
                    </ul>
                    <ul>
                      <li>On-Chain Analytics</li>
                      <li>Our tech Ecosystems Approved by Current SEC & Government Regulation</li>
                      <li>Tokenomics Architecture</li>
                      <li>dApp Development and Wallet Integration</li>
                      <li>Cyber Security</li>
                    </ul>
                  </div>
                </div>
                <div className={styles.pillarBottom}>
                  <Image src={citilogo} width={125}></Image>
                  <Image src={liquidlogo} width={125}></Image>
                  <Image src={botlogo} width={125}></Image>
                </div>
              </div>
              :
              <div onClick={() => setActivePillar({ bkPillar: !activePillar.bkPillar })} className={styles.pillar}>
                <button>+</button>
                <Image src={bkslogo} width={350} height={150}></Image>
              </div>
            }
            {(activePillar.oriPillar) ?
              <div className={styles.pillarContent}>
                <div>
                  <Image src={orilogo} height={150}></Image>
                </div>
                <div className={styles.underlineGradient}>

                </div>
                <div className={styles.pillarContentMain}>
                  <h3>Web3 Campaign Architecture | Transitioning Businesses to Web3</h3>
                  <div className={styles.pillarUlRow}>
                    <ul>
                      <li>Architect | Orchestrate | Develop (GP -{'>'} LPs)</li>
                      <li>Web3 'Ownership Economy' Branding (cap table)</li>
                      <li>Forecasting | Modeling | Customer Behavior</li>
                      <li>Funnels | A/B Testing | Upsells</li>
                    </ul>
                    <ul>
                      <li>OWeb3 Campaign 'Architecture'</li>
                      <li>Rewards | Airdrops | Incentive Structures</li>
                      <li>CLTV Optimization</li>
                    </ul>
                  </div>
                </div>
                <div className={styles.pillarBottom}>
                  <Image src={ethoslogo} width={125}></Image>
                </div>
              </div>
              :
              <div onClick={() => setActivePillar({ oriPillar: !activePillar.oriPillar })} className={styles.pillar}>
                <button >+</button>
                <Image src={orilogo} height={150}></Image>
              </div>
            }
            {(activePillar.lionPillar) ?
              <div className={styles.pillarContent}>
                <div>
                  <Image src={lsmlogo} height={150}></Image>
                </div>
                <div className={styles.underlineGradient}>

                </div>
                <div className={styles.pillarContentMain}>
                  <h3>Analytics | Algorithms | Tracking</h3>
                  <div className={styles.pillarUlRow}>
                    <ul>
                      <li>AI | Machine Learning | Data Science</li>
                      <li>Algorithmic</li>
                      <li>Behavior Prediction</li>
                      <li>Ai Targeted Customer Selection</li>
                      <li>Data Analytics</li>
                    </ul>
                    <ul>
                      <li>Web3 Tracking</li>
                      <li>Bot Development</li>
                      <li>Lead Scoring</li>
                      <li>Airdrops</li>
                      <li>AdPlatform</li>
                    </ul>
                  </div>
                </div>
                <div className={styles.pillarBottom}>
                  <Image src={adslogo} width={125}></Image>
                  <Image src={lyticslogo} width={125}></Image>
                </div>
              </div>
              :
              <div onClick={() => setActivePillar({ lionPillar: !activePillar.lionPillar })} className={styles.pillar}>
                <button >+</button>
                <Image src={lsmlogo} height={150} width={150}></Image>
              </div>
            }
            {(activePillar.ecoPillar) ?
              <div onClick={() => setActivePillar({ ecoPillar: !activePillar.ecoPillar })} className={styles.pillarContent}>
                <div>
                  <h1>EcoCitizen</h1>
                </div>
                <div className={styles.underlineGradient}>

                </div>
                <div className={styles.pillarContentMain}>
                  <h3>Energy | Eco</h3>
                  <div className={styles.pillarUlRow}>
                    <ul>
                      <li>Protocol Architecture</li>
                      <li>Project Screening</li>
                      <li>Transparent DEX 'Burn'</li>
                      <li>Protocol Tax Initiatives</li>
                      <li>Supply / Demand Thesis</li>
                    </ul>
                    <ul>
                      <li>Fractionalization</li>
                      <li>Carbon Credit Tokenization</li>
                      <li>Blockchain Integration</li>
                      <li>SEC Regulatory</li>
                      <li>Modeling</li>
                    </ul>
                  </div>
                </div>
                <div className={styles.pillarBottom}>
                  <Image src={ecoproto} width={125}></Image>
                  <Image src={econetzero} width={125}></Image>
                </div>
              </div>
              :
              <div onClick={() => setActivePillar({ ecoPillar: !activePillar.ecoPillar })} className={styles.pillar}>
                <button >+</button>
                <Image src={ecologo} height={150}></Image>
              </div>
            }

          </div>
        </div>
        <div className={styles.bigPicture}>
          <h1>A BIG PICTURE OVERVIEW</h1>
          <Image src={agree}></Image>
          <h1>R&D - DIVISION</h1>
          <Image src={rnd}></Image>
          <h1>MARKETING - DIVISION</h1>
          <Image src={marketing}></Image>
          <h1>OUTSOURCING STRUCTURE</h1>
          <Image src={outsrc}></Image>
        </div>
        <div className={styles.web3Needs}>
          <div className={styles.web3NeedsLeft}>
            <div>
              <h1>4 brands to cover all your Web3 needs.</h1>
              <p>A Profit Driven Think-Tank & Execution Team: Web3 'Bridge' Business Integration</p>
            </div>
            <div>
            <button><a href="/Contact">Get Started</a></button>
            </div>
          </div>
          <div className={styles.web3NeedsRight}>
            <button><a href="/">Explore All</a> </button>
          </div>
        </div>
        <div>
          <div className={styles.finalWeb2}>
            <h1>OUR WEB3 ECOSYSTEMS WERE CREATED FOCUSED ONLY ON REAL WORLD VALUE-ADD</h1>
            <h1>WEB2</h1>
            <Image src={webdots}></Image>
            <p>
              2.0 TRACKING IS INTEGRATED WITH OUR TRACKING SYSTEMS FROM THE MEDIA-BUY LEVEL,
              THROUGH THE NETWORK,THEN TO THE ADVERTISER. WE OPTIMIZE CLTV BY INCLUDING LONG-TERM AIRDROP,
              EMAIL, AND SMS CAMPAIGNS.
            </p>
          </div>
          <div className={styles.finalWeb3}>
            <h1 className={styles.rainbow}>WEB3</h1>
            <p>
              We implement machine learning and blockchain technologies to all
              aspects of campaigns. Through decentralized ecosystems and on-chain metrics,
              we create new analytical paradigms. We are at the forefront of analytics.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Ecosystem