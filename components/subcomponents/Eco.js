import React from 'react'
import styles from '../../styles/Main.module.css'
import Image from 'next/image'
import collect from '../../assets/Images/collect.svg'
import monetize from '../../assets/Images/monetize.svg'


function Eco() {
  return (
    <div className={styles.minis}>
      <div className={styles.minisRight}>
        <div>
          <ul>
            <li>Protocol Architecture</li>
            <li>Fractionalization</li>
            <li>Project Screening</li>
            <li>Carbon Credit Tokenization</li>
            <li>Transparent DEX 'Burn'</li>
            <li>Blockchain Integration</li>
          </ul>
          <button>Explore ➢</button>
        </div>
        <div>
          <Image height={250} width={250} src={collect}></Image>
        </div>
      </div>
      <div className={styles.minisLeft}>
        <div>
          <Image height={250} width={250} src={monetize}></Image>
        </div>
        <div>
          <ul>
            <li>Protocol Tax Initiatives</li>
            <li>SEC Regulatory</li>
            <li>Supply / Demand</li>
            <li>Modeling</li>
          </ul>
          <button>Explore ➢</button>
        </div>
      </div>
      <div>
        <h1>The 3C Eco Citizen <span>Vision</span></h1>
        <p> 3C Eco Citizen brings product analytics to web3. With wide net of capabilities, we use behavioral analytics to build unmatched digital experiences that enable you to measure, iterate, and scale your projects with a data-driven approach. </p>
      </div>
    </div>
  )
}

export default Eco