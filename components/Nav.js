import React, {useState, useEffect} from 'react'
import styles from '../styles/Home.module.css'
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp'
import CloseIcon from '@mui/icons-material/Close'
import MenuIcon from '@mui/icons-material/Menu'

function Nav() {
  const [menu, setMenu] = useState({ nav: false, menu: false })
  const [tooltip, setTooltip] = useState(false)

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
      <div className={styles.miniNav}>
        {menu.menu ? <button onClick={() => setMenu({ nav: !menu.nav, menu: !menu.menu })}><CloseIcon /></button> : <button onClick={() => setMenu({ nav: !menu.nav, menu: !menu.menu })}><MenuIcon /></button>}
        {menu.nav ?
          <div>
            <ul>
              <li><a href="/">Home</a></li>
              <li style={{ display: 'flex' }}>
                <a style={{ marginRight: '.7em' }} href="/Blackswan">Blackswan</a>
                <a style={{ marginRight: '.7em' }} href="/Lionshare">Lionshare Media</a>
                <a style={{ marginRight: '.7em' }} href="/Origins">Origins</a>
                <a href="/Eco">EcoCitizen</a>
                {/* <select name="dropdownNav" id="dropdownNav">
            <option value="BlackSwan" default={true}>Blackswan</option>
            <option value="Lionshare">Lionshare Media</option>
            <option value="Eco">EcoCitizen</option>
            <option value="Origins">Origins</option>
          </select> */}
              </li>
              <li><a href="/Ecosystem">EcoSystem</a></li>
              <li><a href="/Team">Team</a></li>
            </ul>
          </div>
          :
          ''
        }
        {(scrolled > 200) ? <button onClick={() => scrollUp()}><ArrowCircleUpIcon /></button> : ''}
      </div>
      <nav className={styles.nav}>
        <div>

        </div>
        {/* {(scrolled > 100) ? '' : <Image href={plan3footer} height={100} width={250}></Image>} */}
        <div>
          <ul>
            <li><a href="/">Home</a></li>
            <li className={styles.hoverDropdown} onClick={() => setTooltip(!tooltip)}>
              {/* <div className={styles.dropdown}>
                <button >Solutions</button>
                <div className={styles.dropdownContent}>
                  <a href="/Blackswan">Blackswan</a>
                  <a href="/Lionshare">Lionshare Media</a>
                  <a href="/Origins">Origins</a>
                  <a href="/Eco">EcoCitizen</a>
                </div>
              </div> */}
              {/* <select name="dropdownNav" id="dropdownNav">
              <option value="solutions" default={true}>Solutions</option>
            <option value="BlackSwan">Blackswan</option>
            <option value="Lionshare">Lionshare Media</option>
            <option value="Eco">EcoCitizen</option>
            <option value="Origins">Origins</option>
          </select> */}
          Solutions
            {tooltip ? 
              <div className={styles.dropdownContent}>
                  <a className={styles.linkBks} href="/Blackswan">Blackswan</a>
                  <a className={styles.linkLsm} href="/Lionshare">Lionshare Media</a>
                  <a className={styles.linkOri} href="/Origins">Origins</a>
                  <a className={styles.linkEco} href="/Eco">EcoCitizen</a>
                  <ArrowCircleUpIcon/>
              </div>
              :
              ''
            }
            </li>
            <li><a href="/Ecosystem">EcoSystem</a></li>
            <li><a href="/Team">Team</a></li>
          </ul>
        </div>
        <div className={styles.navBtn}>
          <button>Get Started</button>
        </div>
      </nav>
    </div>
  )
}

export default Nav