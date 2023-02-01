import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import OriData from '../assets/Origins.json'
import styles from '../styles/PageStyles.module.css'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

import arrow3 from '../assets/Images/orifiller/arrow3.png'
import mancode from '../assets/Images/orifiller/mancode.png'
import womancode from '../assets/Images/orifiller/womancode.png'
import piechart from '../assets/Images/EcoImages/ecopie.png'
import location from '../assets/Images/EcoImages/ecolocation.png'
import icon1 from '../assets/Images/Icons/1.svg'
import icon2 from '../assets/Images/Icons/2.svg'
import icon3 from '../assets/Images/Icons/3.svg'
import icon4 from '../assets/Images/Icons/4.svg'
import icon5 from '../assets/Images/Icons/5.svg'
import icon6 from '../assets/Images/Icons/6.svg'
import icon7 from '../assets/Images/Icons/7.svg'
import icon8 from '../assets/Images/Icons/8.svg'
import icon9 from '../assets/Images/Icons/9.svg'
import icon10 from '../assets/Images/Icons/10.svg'
import robo from '../assets/Images/robothand.svg'
import orilogo from '../assets/Images/Logos/orilogo.png'
import quoteData from '../assets/Quotes.json'
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import ArrowBackIos from '@mui/icons-material/ArrowBackIos'
import ArrowForwardIos from '@mui/icons-material/ArrowForwardIos'



function Lionshare() {
  const [i, setI] = useState(0)
  const [toolTip, setToolTip] = useState({ audience: true, algos: false, scale: false })
  let icon = [
    icon1,
    icon2,
    icon3,
    icon4,
    icon5,
    icon6,
    icon7,
    icon8,
    icon9,
    icon10
  ]
  useEffect(() => {
    let time = setInterval(() => {
      setI((i) => {
        let newIndex = i + 1
        return checkNumber(newIndex)
      })
    }, 8000)
  }, [])
  const checkNumber = (number) => {
    if (number >= quoteData.length) {
      return 0;
    }
    if (number <= 0) {
      return quoteData.length - 1;
    }
    return number;
  };

  const nextRank = () => {
    setI((i) => {
      let newIndex = i + 1;
      return checkNumber(newIndex);
    });
  };

  const prevRank = () => {
    setI((i) => {
      let newIndex = i - 1;
      return checkNumber(newIndex);
    });
  };
  //console.log(quoteData.length) = 16
  return (
    <div className={styles.bkmain}>
      <div style={{ position: 'sticky', top: 0 }}>
        <Nav />
      </div>
      <div className={styles.heroOri}>
        <Image className={styles.heroLogo} height={125} width={800} src={orilogo}></Image>
        <p>
        The web3 infrastructure and marketing solution
        </p>
        <div className={styles.herobtn}>
          <button><a href="/Contact">Speak To An Expert</a> </button>
          <button><a href="/Team">About Us</a> </button>
        </div>
      </div>
      <div style={{ color: '#cf012d' }} className={styles.solutions}>
        <div className={styles.solutionsChild}>
          <Image src={icon10} height={100} width={150}></Image>
          <p className={styles.solutionsRainbow}>Campaign Management</p>
          <p>Maximize your growth potential with our wealth of marketing expertise and technology.</p>
        </div>
        <div className={styles.solutionsChild}>
          <Image src={icon2} height={100} width={150}></Image>
          <p className={styles.solutionsRainbow}>Community Management</p>
          <p>Build and maintain a strong customer base across multiple channels.</p>
        </div>
        <div className={styles.solutionsChild}>
          <Image src={icon1} height={100} width={150}></Image>
          <p className={styles.solutionsRainbow}>Strategy & Growth</p>
          <p>Identify and capitalize on opportunities for growth with a focus on customer acquisition, retention, and loyalty.</p>
        </div>
      </div>
      <div style={{ color: '#cf012d' }} className={styles.mainFocusTitle}>
        <h1 style={{textDecoration: 'underline #cf012d'}}>Origins Services</h1>
      </div>
      <div className={styles.mainFocus}>
        {OriData.map((data, index) => {
          return (
            <div className={styles.focusItem} key={index}>
              <div className={styles.focusHeader}>
                {/* {data.image ? <Image height={50} width={50} src={icon[index]} /> : ''} */}
                <p style={{ color: '#cf012d' }}>{data.title}</p>
              </div>
              <div className={styles.focusText}>
                <p>{data.info}</p>
              </div>
              {/* <img src={data.image} width={40} height={40} /> */}
            </div>
          )
        })}
      </div>
      <div className={styles.customWeb3Ori}>
        <div className={styles.containerWeb3}>
          <div>
            <h1>Be Proactive, not Reactive</h1>
            <p>We believe there is massive potential to disrupt every facet of our economy. Start today with multiple revenue streams.</p>
          </div>
          <div>
            <Image className={styles.image} height={400} src={mancode}></Image>
          </div>
        </div>
        <div className={styles.containerWeb3}>
          <div>
            <Image className={styles.image} height={400} src={womancode}></Image>
          </div>
          <div>
            <h1>Everything you need</h1>
            <p>We are a full-cycle digital marketing team to bring your vision to reality with a data driven approach.</p>
          </div>
        </div>
      </div>
      <div style={{ backgroundColor: '#cf012d' }} className={styles.quotes}>
        <div className={styles.quote} key={quoteData[i]}>
          <FormatQuoteIcon style={{ fontSize: '4rem' }} />
          <p>{quoteData[i].quote}</p>
          <p>{quoteData[i].person}</p>
        </div>
        <div className={styles.quoteNav}>
          <div>
            <button style={{ color: '#cf012d' }} onClick={() => prevRank()}><ArrowBackIos /></button>
            <button style={{ color: '#cf012d' }} onClick={() => nextRank()}><ArrowForwardIos /></button>
          </div>
          <div>
            <button style={{ color: '#cf012d' }}><a href="/Team">Meet the Team</a></button>
          </div>
        </div>
      </div>
      <div className={styles.specific}>
        <div className={styles.specificApproach}>
          <div>
            <button style={{ backgroundColor: '#cf012d' }} disabled={true}>Disclaimer</button>
            <h1>How to really market Web3</h1>
            <p>It's about using purposeful experience design and strategy to leverage data and creating a brand utility that supports your business and marketing efforts.</p>
          </div>
          <div>
            <Image src={robo} className={styles.image} height={300} width={400}></Image>
          </div>
        </div>
        <div className={styles.specificMarket}>
          <h1 style={{ color: '#cf012d' }}>Media Buy Market is Growing</h1>
          <div className={styles.specificMarketRow}>
            <div className={styles.specificMarketContent}>
              <div>
                <p><span style={{ color: '#CF012D' }}>$297.5B+</span> Ad spend in 2021</p>
                <button><a href="/Contact">Get Started</a></button>
              </div>
              <div>
                <Image height={150} src={location}></Image>
              </div>
            </div>
            <div className={styles.specificMarketContent}>
              <div>
                <p><span style={{ color: '#CF012D' }}>$297.5B+</span> Ad spend in 2021</p>
                <button><a href="/Contact">Get Started</a></button>
              </div>
              <div>
                <Image height={150} src={piechart}></Image>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.specificWhy}>
          <div>
            <h1>Web2 to Web3</h1>
            <h2 onClick={() => setToolTip({ audience: !toolTip.audience })}>Understand which Web3 technologies would best suit your business</h2>
            <h2 onClick={() => setToolTip({ algos: !toolTip.algos })}>Understand your main objectives</h2>
            <h2 onClick={() => setToolTip({ scale: !toolTip.scale })}>Build and launch your Web3 project</h2>
            <h2 onClick={() => setToolTip({ scale: !toolTip.scale })}>Test and iterate based off initial tests until we scale to the moon</h2>
            <div className={styles.specificTooltip}>
              <button><a href="/Contact"> Get in Touch</a></button>
            </div>
          </div>
          <div>
            <Image className={styles.image} height={400} src={arrow3}></Image>
          </div>
        </div>
        <div className={styles.specificKeepOri}>
          <p style={{ fontSize: '5rem', fontWeight: '700', marginBottom: '0', color: '#CF012D' }}>Let's keep in touch</p>
          <p>We've dedicated ourselves to understanding and building the future in the Web3 space.</p>
          <p>We will keeep you in the loop with all the newest stuff!</p>
          <div className={styles.specificEmail}>
            <input type="email" placeholder='Enter your email' /><button style={{ backgroundColor: '#cf012d' }}>Subscribe</button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Lionshare