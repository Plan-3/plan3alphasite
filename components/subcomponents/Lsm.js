import React from 'react'
import styles from '../../styles/Main.module.css'


function Lsm() {
  return (
    <div className={styles.minis}>
      <div className={styles.minisRight}>
        <ul>
          <li>AI | Machine Learning | Data Science</li>
          <li>Web3 Tracking</li>
          <li>Alorithmic Bot Development</li>
          <li>Behavior Prediction</li>
          <li>Lead Scoring</li>
        </ul>
        <button>Explore ➢</button>
      </div>
      <div className={styles.minisLeft}>
        <ul>
          <li>Targeted Customer Selection</li>
          <li>Airdrops</li>
          <li>Data Analytics</li>
          <li>AdPlatform</li>
        </ul>
        <button>Explore ➢</button>
      </div>
      <div>
        <h1>Lionshare Media <span>Vision</span></h1>
        <p> Lionshare brings product analytics to web3. With wide net of capabilities, we use behavioral analytics to build unmatched digital experiences that enable you to measure, iterate, and scale your projects with a data-driven approach. </p>
      </div>
    </div>
  )
}

export default Lsm