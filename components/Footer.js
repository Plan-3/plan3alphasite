import React, {useState, useEffect} from 'react'
import styles from '../styles/Home.module.css'
import ArrowCircleUp from '@mui/icons-material/ArrowCircleUp'

function Footer() {
  const [scrolled, setScrolled] = useState(0)
  useEffect(() => {
    document.addEventListener('scroll', () => {
      setScrolled(document.documentElement.scrollTop)
    })

  }, [scrolled])

  const scrollUp = () => {
    document.body.scrollTop = 0
    document.documentElement.scrollTop = 0
  }
  return (
    <div>
      <div className={styles.upbtn}>
        {(scrolled > 200) ? <button onClick={() => scrollUp()}><ArrowCircleUp /></button> : ''}
      </div>
      <footer className={styles.footer}>
        <div className={styles.p3f}>
          <p>Plan_3</p>
          <p>End to end Web3 solutions to build <br /> unmatched digital experiences</p>
        </div>
        <div className={styles.socials}>
          <div className={styles.socialsChildren}>
            <ul>
              <li><h1>Products</h1></li>
              <li><a href="">Black Swan</a></li>
              <li><a href="">Origins</a></li>
              <li><a href="">Lionshare Media</a></li>
              <li><a href="">ECO Citizen</a></li>
            </ul>
          </div>
          <div className={styles.socialsChildren}>
            <ul>
              <li><h1>Social</h1></li>
              <li> <a href="">LinkedIn</a></li>
              <li> <a href="">Facebook</a></li>
              <li><a href="">Telegram</a></li>
            </ul>
          </div>
          <div className={styles.socialsChildren}>
            <ul>
              <li><h1>Legal</h1></li>
              <li> <a href="">Terms of Use</a></li>
              <li><a href="">Privacy Policy</a></li>
              <li><a href="">Legal Notice</a></li>
            </ul>
          </div>
        </div>
        <div className={styles.subscribeEmail}>
          <h1>Subscribe:</h1>
          <label htmlFor="subscribe">E-mail*</label>
          <input type="email" name="subscribe" id="subscribe" />
          <button>Subscribe</button>
        </div>
      </footer>
    </div>
  )
}

export default Footer