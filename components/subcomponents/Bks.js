import React from 'react'
import styles from '../../styles/Main.module.css'
import Image from 'next/image'
import collect from '../../assets/Images/collect.svg'
import monetize from '../../assets/Images/monetize.svg'


function Bks() {
  return (
    <div className={styles.minisBks}>
      <div>
        <h1>Black Swan <span style={{color: '#005eff'}}>Vision</span> </h1>
        <p> Black Swan Research delivers best-in-class research and intelligence to leverage the utility of deep and emerging technologies. We facilitate informed development of the digital economy </p>
      </div>
      <div className={styles.minisRight}>
        <div>
          <ul>
            <li>Market Research & Analysis</li>
            <li>Financial/Economic Modelling</li>
            <li>Protocol & Tokenomics Architecture</li>
            <li>Whitepaper Development</li>
            <li>Smart Contract Development</li>
            <li>dApp Development</li>
            <li>Algorithmic Trading</li>
          </ul>
          <button><a href="/Blackswan">Explore ➢ </a> </button>
        </div>
        <div>
          <Image height={200} width={200} src={collect}></Image>
        </div>
      </div>
      <div className={styles.minisLeft}>
        <div>
          <Image height={200} width={200} src={monetize}></Image>
        </div>
        <div>
          <ul>
            <li>Bridging Real Assets On-Chain</li>
            <li>Asset Tokenization</li>
            <li>Cap Table Management</li>
            <li>Software Legal Compliance</li>
            <li>DAO Governance</li>
            <li>Cybersecurity</li>
            <li>On-Chain Analytics</li>
          </ul>
          <button><a href="/Blackswan">Explore ➢ </a></button>
        </div>
      </div>
    </div>
  )
}

export default Bks