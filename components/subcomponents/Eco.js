import React from 'react'
import styles from '../../styles/Main.module.css'
import Image from 'next/image'
import collect from '../../assets/Images/collect.svg'
import monetize from '../../assets/Images/monetize.svg'


function Eco() {
  return (
    <div className={styles.minisEco}>
      <div>
        <h2>The 3C Eco Citizen <span style={{color: '#208805'}}>Vision</span></h2>
        <p>EcoCitizen brings transparency, fungibility, and liquidity to the primitive carbon markets. We efficiently and effectively bridge credits on-chain and leverage critical aspects of blockchain technology to revolutionize the carbon credit ecosystem. </p>
      </div>
      <div className={styles.minisRight}>
        <div>
          <ul>
            <li>Protocol Architecture</li>
            <li>Fractionalization</li>
            <li>Project Screening</li>
            <li>Fungibility</li>
            <li>Carbon Credit Tokenization</li>
            <li>Compliant with Certifying Body Standards</li>
            <li>Transparent Credit Burn On-Chain</li>
            <li>Blockchain Integration</li>
          </ul>
          <button><a href="/Eco">Explore ➢</a> </button>
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
            <li>Blockchain Integration</li>
            <li>DAO Governance</li>
            <li>Ecommerce Plugins</li>
            <li>Protocol Tax Initiatives</li>
            <li>Supply / Demand Thesis</li>
            <li>Modeling</li>
          </ul>
          <button><a href="/Eco">Explore ➢</a> </button>
        </div>
      </div>
    </div>
  )
}

export default Eco