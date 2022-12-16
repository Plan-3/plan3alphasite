import React from 'react'
import styles from '../../styles/Main.module.css'
import Image from 'next/image'
import collect from '../../assets/Images/collect.svg'
import monetize from '../../assets/Images/monetize.svg'


function Lsm() {
  return (
    <div className={styles.minis}>
      <div className={styles.minisRight}>
        <div>
          <ul>
            <li>AI | Machine Learning | Data Science</li>
            <li>Web3 Tracking</li>
            <li>Alorithmic Bot Development</li>
            <li>Behavior Prediction</li>
            <li>Lead Scoring</li>
          </ul>
          <button>Explore ➢</button>
        </div>
        <div>
          <Image height={250} width={250} src={monetize}></Image>
        </div>
      </div>
      <div className={styles.minisLeft}>
        <div>
          <Image height={250} width={250} src={collect}></Image>
        </div>
        <div>
          <ul>
            <li>Targeted Customer Selection</li>
            <li>Airdrops</li>
            <li>Data Analytics</li>
            <li>AdPlatform</li>
          </ul>
          <button>Explore ➢</button>
        </div>

      </div>
      <div>
        <h1>Lionshare Media <span>Vision</span></h1>
        <p> Lionshare brings product analytics to web3. With wide net of capabilities, we use behavioral analytics to build unmatched digital experiences that enable you to measure, iterate, and scale your projects with a data-driven approach. </p>
      </div>
    </div>
  )
}

export default Lsm