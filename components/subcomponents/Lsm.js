import React from 'react'
import styles from '../../styles/Main.module.css'
import Image from 'next/image'
import collect from '../../assets/Images/collect.svg'
import monetize from '../../assets/Images/monetize.svg'


function Lsm() {
  return (
    <div className={styles.minisLsm}>
      <div>
        <h2>Lionshare Media <span style={{color: '#c89d2e'}}>Vision</span></h2>
        <p> Lionshare brings product analytics to web3. With a wide net of capabilities, we use behavioral analytics to build unmatched digital experiences that enable you to measure, iterate, and scale your project with a data-driven approach. </p>
      </div>
      <div className={styles.minisRight}>
        <div>
          <ul>
            <li>Lead Scoring </li>
            <li>Data Streaming</li>
            <li>Media Buy</li>
            <li>Algorithm Development</li>
            <li>Oracle Development</li>
            <li>API Development</li>
            <li>Behavior Analysis & Prediction</li>
          </ul>
          <button><a href="/Lionshare">Explore ➢</a> </button>
        </div>
        <div>
          <Image height={200} width={200} src={monetize}></Image>
        </div>
      </div>
      <div className={styles.minisLeft}>
        <div>
          <Image height={200} width={200} src={collect}></Image>
        </div>
        <div>
          <ul>
            <li>Wallet Tracking</li>
            <li>On-Chain Analytics</li>
            <li>Data Analytics</li>
            <li>Behavioral Analytics</li>
            <li>Ad Platform</li>
            <li>Airdrops</li>
            <li>Product Analytics</li>
            <li>Performance Analysis</li>
          </ul>
          <button><a href="/Lionshare">Explore ➢</a> </button>
        </div>

      </div>
    </div>
  )
}

export default Lsm