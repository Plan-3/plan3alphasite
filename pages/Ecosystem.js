import React, { useState } from 'react'
import Image from 'next/image';
import Nav from '../components/Nav'
import styles from '../styles/EcoSystem.module.css'
import AddIcon from '@mui/icons-material/Add';
import Footer from '../components/Footer';

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
                logo
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
              <div>
                logo footer
              </div>
            </div>
            :
            <div className={styles.pillar}>
              <button onClick={() => setActivePillar({ bkPillar: !activePillar.bkPillar })}>+</button>
              <Image></Image>
            </div>
          }
          {(activePillar.oriPillar) ?
            <div className={styles.pillarContent}>
              <div>
                logo
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
              <div>
                logo footer
              </div>
            </div>
            :
            <div className={styles.pillar}>
              <button onClick={() => setActivePillar({ oriPillar: !activePillar.oriPillar })}>+</button>
              <Image></Image>
            </div>
          }
          {(activePillar.lionPillar) ?
            <div className={styles.pillarContent}>
              <div>
                logo
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
                    <li>Ai Targetted Customer Selection</li>
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
              <div>
                logo footer
              </div>
            </div>
            :
            <div className={styles.pillar}>
              <button onClick={() => setActivePillar({ lionPillar: !activePillar.lionPillar })}>+</button>
              <Image></Image>
            </div>
          }
          {(activePillar.ecoPillar) ?
            <div className={styles.pillarContent}>
              <div>
                logo
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
              <div>
                logo footer
              </div>
            </div>
            :
            <div className={styles.pillar}>
              <button onClick={() => setActivePillar({ ecoPillar: !activePillar.ecoPillar })}>+</button>
              <Image></Image>
            </div>
          }

        </div>
      </div>
      <div className={styles.bigPicture}>
        <h1>A BIG PICTURE OVERVIEW</h1>
        <Image></Image>
        <h1>R&D - DIVISION</h1>
        <Image></Image>
        <h1>MARKETING - DIVISION</h1>
        <Image></Image>
        <h1>OUTSOURCING STRUCTURE</h1>
        <Image></Image>
        <h1>A BIG PICTURE OVERVIEW</h1>
        <Image></Image>
      </div>
      <div className={styles.web3Needs}>
        <div className={styles.web3NeedsLeft}>
          <div>
            <h1>4 brands to cover all your Web3 needs.</h1>
            <p>A Profit Driven Think-Tank & Execution Team: Web3 'Bridge' Business Integration</p>
          </div>
          <div>
            <button>Get Started</button>
          </div>
        </div>

        <div className={styles.web3NeedsRight}>
          <button>Explore All</button>
        </div>
      </div>
    </div>
    <Footer />
    </div>
  )
}

export default Ecosystem