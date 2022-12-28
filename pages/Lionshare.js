import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import BksData from '../assets/LionshareMedia.json'
import lmstyles from '../styles/Lionshare.module.css'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import Grid2 from '@mui/material/Unstable_Grid2/Grid2'
import icon1 from '../assets/Images/1.svg'
import icon2 from '../assets/Images/2.svg'
import icon3 from '../assets/Images/3.svg'
import icon4 from '../assets/Images/4.svg'
import icon5 from '../assets/Images/5.svg'
import icon6 from '../assets/Images/6.svg'
import icon7 from '../assets/Images/7.svg'
import icon8 from '../assets/Images/8.svg'
import icon9 from '../assets/Images/9.svg'
import icon10 from '../assets/Images/10.svg'
import robo from '../assets/Images/robothand.svg'
import lsmlogo from '../assets/Images/lsmlogo.png'
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
    <div className={lmstyles.bkmain}>
      <Nav />
      <div className={lmstyles.hero}>
        <div className={lmstyles.heroLogo}><Image src={lsmlogo}></Image></div>
        <p>
          Explore the deep treasure of data efficiency with the right expertise
        </p>
        <div className={lmstyles.herobtn}>
          <button>Speak To An Expert</button>
          <button>About Us</button>
        </div>
      </div>
      <div className={lmstyles.solutions}>
        <div className={lmstyles.solutionsChild}>
          <Image src={icon10} height={100} width={150}></Image>
          <p className={lmstyles.solutionsRainbow}>Proprietary Tools</p>
          <p>A long range of assets that enable us to get the most out of every situation.</p>
        </div>
        <div className={lmstyles.solutionsChild}>
          <Image src={icon2} height={100} width={150}></Image>
          <p className={lmstyles.solutionsRainbow}>Revealing The Unknown</p>
          <p>Unlock hidden stories by tracing activity using proprietary analytics tools.</p>
        </div>
        <div className={lmstyles.solutionsChild}>
          <Image src={icon1} height={100} width={150}></Image>
          <p className={lmstyles.solutionsRainbow}>We have comprehensive expertise and experience with data </p>
          <p>Historic data and models give us an unbeatable edge.</p>
        </div>
      </div>
      <div className={lmstyles.mainFocusTitle}>
        <h1>Lionshare Media</h1>
        <h1>Main Areas of Focus</h1>
      </div>
      <div className={lmstyles.mainFocus}>
        {BksData.map((data, index) => {
          return (
            <div className={lmstyles.focusItem} key={index}>
              <div className={lmstyles.focusHeader}>
                {data.image ? <Image height={50} width={50} src={icon[index]} /> : ''}
                <p>{data.title}</p>
              </div>
              <div className={lmstyles.focusText}>
                <p>{data.info}</p>
              </div>
              {/* <img src={data.image} width={40} height={40} /> */}
            </div>
          )
        })}
      </div>
      <div className={lmstyles.customWeb3}>
        <div className={lmstyles.containerWeb3}>
          <div>
            <h1>Data is the way to go</h1>
            <p>Cut your research time and get right to the most promising.</p>
          </div>
          <div>
            <Image className={lmstyles.image} height={200} width={450}></Image>
          </div>
        </div>
        <div className={lmstyles.containerWeb3}>
          <div>
            <Image className={lmstyles.image} height={200} width={450}></Image>
          </div>
          <div>
            <h1>Skip the guesswork</h1>
            <p>Our trends indicator will help you identify market trends early and alert you to exit the conditions turn around.</p>
          </div>
        </div>
      </div>
      <div className={lmstyles.quotes}>
        <div className={lmstyles.quote}>
          <FormatQuoteIcon style={{ fontSize: '6rem' }} />
          <p>{quoteData[i].quote}</p>
        </div>
        <div className={lmstyles.quoteNav}>
          <div>
            <button onClick={() => prevRank()}><ArrowBackIos /></button>
            <button onClick={() => nextRank()}><ArrowForwardIos /></button>
          </div>
          <div>
            <button>Meet the Team</button>
          </div>
        </div>
      </div>
      <div className={lmstyles.safety}>
        <div className={lmstyles.safetyApproach}>
          <div>
            <button disabled={true}>NO MORE GUESSWORK</button>
            <h1>Web3 Predictive Audiences</h1>
            <p>Using groundbreaking prediction analysis from analytics we have collected, brands have the upper-hand in audience targeting with prospects most likely to engage. It's media buying re-imagined..</p>
          </div>
          <div>
            <Image src={robo} className={lmstyles.image} height={300} width={400}></Image>
          </div>
        </div>
        <div className={lmstyles.safetyWhy}>
          <div>
            <h1>The Lionshare Process</h1>
            <h2 onClick={() => setToolTip({ audience: !toolTip.audience })}>Find new audiences</h2>
            {toolTip.audience ?
              <div className={lmstyles.safetyTooltip}>
                <p>With models by incorporating your brand's existing first party data and over our unique data signals..</p>
                <button>Book a Demo</button>
              </div> : ''
            }
            <h2 onClick={() => setToolTip({ algos: !toolTip.algos })}>Customized and proprietary algorithms</h2>
            {toolTip.algos ?
              <div className={lmstyles.safetyTooltip}>
                <p>Built exclusively for each brand and based on a brand's unique KPIs. </p>
                <button>Book a Demo</button>
              </div> : ''
            }
            <h2 onClick={() => setToolTip({ scale: !toolTip.scale })}>Scale profitably</h2>
            {toolTip.scale ?
              <div className={lmstyles.safetyTooltip}>
                <p>Secondary trading for private markets. LIQUIDIAN's ATS delivers liquidity for private assets. Add your security to the premier marketplace for trading digital securities.</p>
                <button>Book a Demo</button>
              </div> : ''
            }
          </div>
          <div>
            <Image className={lmstyles.image} height={400} width={300}></Image>
          </div>
        </div>
        <div className={lmstyles.safetyKeep}>
          <p style={{ fontSize: '5rem', fontWeight: '700', marginBottom: '0', color: '#C89D2E'}}>Let's keep in touch</p>
          <p>We've dedicated ourselves to understanding and building the future in the Web3 space.</p>
          <p>We will keeep you in the loop with all the newest stuff!</p>
          <div className={lmstyles.safetyEmail}>
            <input type="email" placeholder='Enter your email' /><button>Subscribe</button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Lionshare