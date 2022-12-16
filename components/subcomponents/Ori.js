import React from 'react'
import styles from '../../styles/Main.module.css'
import Image from 'next/image'
import collect from '../../assets/Images/collect.svg'
import monetize from '../../assets/Images/monetize.svg'

function Ori() {
  return (
    <div className={styles.minis}>
      <div className={styles.minisRight}>
      <div>
        <ul>
          <li>Architect | Orchestrate | Develop (GP -`{'>'}` LPs)</li>
          <li>Web3 Campaign 'Architecture'</li>
          <li>Web3 'Ownership Economy' Branding (Cap Table)</li>
          <li>Rewards | Airdrops | Incentive Structures</li>
          <li>Forecasting | Modeling | Customer Behavior</li>
          <li>CLTV Optimization</li>
          <li>Funnels | A/B Testing | Upsells</li>
        </ul>
        <button>Explore ➢</button>
      </div>
      <div>
          <Image height={250} width={250} src={monetize}></Image>
        </div>
      </div>
      <div>
        <h1>Origins <span>Vision</span></h1>
        <p> Origins brings product analytics to web3. With wide net of capabilities, we use behavioral analytics to build unmatched digital experiences that enable you to measure, iterate, and scale your projects with a data-driven approach. </p>
      </div>
    </div>
  )
}

export default Ori