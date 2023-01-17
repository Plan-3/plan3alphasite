import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import BksData from '../assets/LionshareMedia.json'
import styles from '../styles/PageStyles.module.css'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

import developer from '../assets/Images/lsmfiller/develop.png'
import dots from '../assets/Images/lsmfiller/dots.png'
import tech from '../assets/Images/lsmfiller/tech.png'
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
import lsmlogo from '../assets/Images/Logos/lsmlogo.png'
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
  // useEffect(() => {
  //   let time = setInterval(() => {
  //     setI((i) => {
  //     let newIndex = i + 1
  //     return checkNumber(newIndex)
  //   })
  //   }, 8000)
  // }, [])
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
      <Nav />
      <div className={styles.heroLsm}>
        <div className={styles.heroLogo}><Image src={lsmlogo} height={400} className={styles.image}></Image></div>
        <p>
          Explore the deep treasure of data efficiency with the right expertise
        </p>
        <div className={styles.herobtn}>
          <button><a href="/Contact">Speak To An Expert</a> </button>
          <button><a href="/Team">About Us</a> </button>
        </div>
      </div>
      <div style={{borderColor: '#c89d2e'}} className={styles.solutions}>
        <div className={styles.solutionsChild}>
          <Image src={icon10} height={100} width={150}></Image>
          <p className={styles.solutionsRainbow}>Proprietary Tools</p>
          <p>A long range of assets that enable us to get the most out of every situation.</p>
        </div>
        <div className={styles.solutionsChild}>
          <Image src={icon2} height={100} width={150}></Image>
          <p className={styles.solutionsRainbow}>Revealing The Unknown</p>
          <p>Unlock hidden stories by tracing activity using proprietary analytics tools.</p>
        </div>
        <div className={styles.solutionsChild}>
          <Image src={icon1} height={100} width={150}></Image>
          <p className={styles.solutionsRainbow}>We have comprehensive expertise and experience with data </p>
          <p>Historic data and models give us an unbeatable edge.</p>
        </div>
      </div>
      <div style={{color: '#c89d2e'}} className={styles.mainFocusTitle}>
        <h1>Lionshare Media</h1>
        <h1>Main Areas of Focus</h1>
      </div>
      <div className={styles.mainFocus}>
        {BksData.map((data, index) => {
          return (
            <div className={styles.focusItem} key={index}>
              <div className={styles.focusHeader}>
                {data.image ? <Image height={75} width={75} src={icon[index]} /> : ''}
                <p style={{color: '#c89d2e'}}>{data.title}</p>
              </div>
              <div className={styles.focusText}>
                <p>{data.info}</p>
              </div>
              {/* <img src={data.image} width={40} height={40} /> */}
            </div>
          )
        })}
      </div>
      <div className={styles.customWeb3Lsm}>
        <div className={styles.containerWeb3}>
          <div>
            <h1>Data is the way to go</h1>
            <p>Cut your research time and get right to the most promising.</p>
          </div>
          <div>
            <Image className={styles.image} src={tech} height={300}></Image>
          </div>
        </div>
        <div className={styles.containerWeb3}>
          <div>
            <Image className={styles.image} height={300} src={developer}></Image>
          </div>
          <div>
            <h1>Skip the guesswork</h1>
            <p>Our trends indicator will help you identify market trends early and alert you to exit the conditions turn around.</p>
          </div>
        </div>
      </div>
      <div style={{backgroundColor: '#c89d2e'}} className={styles.quotes}>
        <div className={styles.quote}>
          <FormatQuoteIcon style={{ fontSize: '6rem' }} />
          <p>{quoteData[i].quote}</p>
          <p>{quoteData[i].person}</p>
        </div>
        <div className={styles.quoteNav}>
          <div>
            <button style={{color: '#c89d2e'}} onClick={() => prevRank()}><ArrowBackIos /></button>
            <button style={{color: '#c89d2e'}} onClick={() => nextRank()}><ArrowForwardIos /></button>
          </div>
          <div>
            <button style={{color: '#c89d2e'}}><a href="/Team">Meet the Team</a> </button>
          </div>
        </div>
      </div>
      <div className={styles.specific}>
        <div className={styles.specificApproach}>
          <div>
            <button style={{backgroundColor: '#c89d2e'}} disabled={true}>NO MORE GUESSWORK</button>
            <h1>Web3 Predictive Audiences</h1>
            <p>Using groundbreaking prediction analysis from analytics we have collected, brands have the upper-hand in audience targeting with prospects most likely to engage. It's media buying re-imagined..</p>
          </div>
          <div>
            <Image src={robo} className={styles.image} height={300} width={400}></Image>
          </div>
        </div>
        <div className={styles.specificWhy}>
          <div>
            <h1>The Lionshare Process</h1>
            <h2 onClick={() => setToolTip({ audience: !toolTip.audience })}>Find new audiences</h2>
            {toolTip.audience ?
              <div className={styles.specificTooltip}>
                <p>With models by incorporating your brand's existing first party data and over our unique data signals..</p>
                <button><a href="/Contact"> Book a Demo</a></button>
              </div> : ''
            }
            <h2 onClick={() => setToolTip({ algos: !toolTip.algos })}>Customized and proprietary algorithms</h2>
            {toolTip.algos ?
              <div className={styles.specificTooltip}>
                <p>Built exclusively for each brand and based on a brand's unique KPIs. </p>
                <button><a href="/Contact"> Book a Demo</a></button>
              </div> : ''
            }
            <h2 onClick={() => setToolTip({ scale: !toolTip.scale })}>Scale profitably</h2>
            {toolTip.scale ?
              <div className={styles.specificTooltip}>
                <p>Secondary trading for private markets. LIQUIDIAN's ATS delivers liquidity for private assets. Add your security to the premier marketplace for trading digital securities.</p>
                <button><a href="/Contact"> Book a Demo</a></button>
              </div> : ''
            }
          </div>
          <div>
            <Image className={styles.image} height={400} src={dots}></Image>
          </div>
        </div>
        <div className={styles.specificKeepLsm}>
          <p style={{ fontSize: '5rem', fontWeight: '700', marginBottom: '0', color: '#C89D2E'}}>Let's keep in touch</p>
          <p>We've dedicated ourselves to understanding and building the future in the Web3 space.</p>
          <p>We will keeep you in the loop with all the newest stuff!</p>
          <div className={styles.specificEmail}>
            <input type="email" placeholder='Enter your email' /><button style={{color: '#c89d2e'}}>Subscribe</button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Lionshare