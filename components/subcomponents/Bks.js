import React from 'react'
import styles from '../../styles/Main.module.css'
import Image from 'next/image'
import collect from '../../assets/Images/collect.svg'
import monetize from '../../assets/Images/monetize.svg'


function Bks() {
  return (
    <div className={styles.minis}>
      <div className={styles.minisRight}>
        <div>
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
            <li>Asset Tokenization</li>
            <li>Algorithmic Trading Bots</li>
            <li>Cyber Security</li>
            <li>On-Chain Analytics</li>
          </ul>
          <button>Explore ➢</button>
        </div>
      </div>
      <div>
        <h1>Black Swan <span>Vision</span></h1>
        <p> Black Swan brings product analytics to web3. With wide net of capabilities, we use behavioral analytics to build unmatched digital experiences that enable you to measure, iterate, and scale your projects with a data-driven approach. </p>
      </div>
    </div>
  )
}

export default Bks