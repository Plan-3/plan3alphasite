import React from 'react'
import styles from '../../styles/Main.module.css'


function Bks() {
  return (
    <div className={styles.minis}>
      <div className={styles.minisRight}>
        <ul>
          <li>Blockchain Technology A-Z</li>
          <li>Our Tech Ecosystems Approved by Current SEC & Government Regulation</li>
          <li>Cap Table Management of Securitie & Equities</li>
          <li>Tokenomics Architecture</li>
          <li>Smart COntract Development and Instituitional Deployment</li>
          <li>dApp Development and Wallet Integration</li>
        </ul>
        <button>Explore ➢</button>
      </div>
      <div className={styles.minisLeft}>
        <ul>
          <li>Asset Tokenization</li>
          <li>Algorithmic Trading Bots</li>
          <li>Cyber Security</li>
          <li>On-Chain Analytics</li>
        </ul>
        <button>Explore ➢</button>
      </div>
      <div>
        <h1>Black Swan <span>Vision</span></h1>
        <p> Black Swan brings product analytics to web3. With wide net of capabilities, we use behavioral analytics to build unmatched digital experiences that enable you to measure, iterate, and scale your projects with a data-driven approach. </p>
      </div>
    </div>
  )
}

export default Bks