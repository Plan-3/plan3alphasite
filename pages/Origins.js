import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import BksData from '../assets/Origins.json'
import oristyles from '../styles/Origins.module.css'
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
import orilogo from '../assets/Images/3.png'
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
    <div className={oristyles.bkmain}>
      <Nav />
      <div className={oristyles.hero}>
        <Image className={oristyles.image} height={125} width={800} src={orilogo}></Image>
        <p>
          We focus on identifying the right target audience and go-to-market strategy to boost your business and cultivate meaningful relationships with consumers.
        </p>
        <div className={oristyles.herobtn}>
          <button>Speak To An Expert</button>
          <button>About Us</button>
        </div>
      </div>
      <div className={oristyles.solutions}>
        <div className={oristyles.solutionsChild}>
          <Image src={icon10} height={100} width={150}></Image>
          <p className={oristyles.solutionsRainbow}>Market Penetration </p>
          <p>Supercharging growth through targeted community building and campaigns. </p>
        </div>
        <div className={oristyles.solutionsChild}>
          <Image src={icon2} height={100} width={150}></Image>
          <p className={oristyles.solutionsRainbow}>Community & Relevance</p>
          <p>Unlock hidden stories by tracing activity using proprietary analytics tools.</p>
        </div>
        <div className={oristyles.solutionsChild}>
          <Image src={icon1} height={100} width={150}></Image>
          <p className={oristyles.solutionsRainbow}>Developer Marketing</p>
          <p>Helping web3 orgs grow, engage and retain a devoted developer community.</p>
        </div>
      </div>
      <div className={oristyles.mainFocusTitle}>
        <h1>Origins</h1>
        <h1>Main Areas of Focus</h1>
      </div>
      <div className={oristyles.mainFocus}>
        {BksData.map((data, index) => {
          return (
            <div className={oristyles.focusItem} key={index}>
              <div className={oristyles.focusHeader}>
                {data.image ? <Image height={50} width={50} src={icon[index]} /> : ''}
                <p>{data.title}</p>
              </div>
              <div className={oristyles.focusText}>
                <p>{data.info}</p>
              </div>
              {/* <img src={data.image} width={40} height={40} /> */}
            </div>
          )
        })}
      </div>
      <div className={oristyles.customWeb3}>
        <div className={oristyles.containerWeb3}>
          <div>
            <h1>Be Proactive, not Reactive</h1>
            <p>We believe the blockchain space has a massive potential to disrupt every facet of our economy. It’s a matter of when and how not if.</p>
          </div>
          <div>
            <Image className={oristyles.image} height={200} width={450}></Image>
          </div>
        </div>
        <div className={oristyles.containerWeb3}>
          <div>
            <Image className={oristyles.image} height={200} width={450}></Image>
          </div>
          <div>
            <h1>Everything you need</h1>
            <p>We are a full-cycle digital agency that works with Blockchain, Web3, Metaverse and high tech projects </p>
          </div>
        </div>
      </div>
      <div className={oristyles.quotes}>
        <div className={oristyles.quote}>
          <FormatQuoteIcon style={{ fontSize: '6rem' }} />
          <p>{quoteData[i].quote}</p>
        </div>
        <div className={oristyles.quoteNav}>
          <div>
            <button onClick={() => prevRank()}><ArrowBackIos /></button>
            <button onClick={() => nextRank()}><ArrowForwardIos /></button>
          </div>
          <div>
            <button>Meet the Board</button>
          </div>
        </div>
      </div>
      <div className={oristyles.safety}>
        <div className={oristyles.safetyApproach}>
          <div>
            <button disabled={true}>Disclaimer</button>
            <h1>How to really market Web3</h1>
            <p>It's about using purposeful experience design and strategy to leverage data and creating a brand utility that supports your business and marketing efforts.</p>
          </div>
          <div>
            <Image src={robo} className={oristyles.image} height={300} width={400}></Image>
          </div>
        </div>
        <div className={oristyles.safetyMarket}>
          <h1>Media Buy Market is Growing</h1>
          <div className={oristyles.safetyMarketRow}>
            <div className={oristyles.safetyMarketContent}>
              <div>
                <p><span style={{ color: '#CF012D' }}>$297.5B+</span> Ad spend in 2021</p>
                <button>Get Started</button>
              </div>
              <div>
                <Image height={150} width={150}></Image>
              </div>
            </div>
            <div className={oristyles.safetyMarketContent}>
              <div>
                <p><span style={{ color: '#CF012D' }}>$297.5B+</span> Ad spend in 2021</p>
                <button>Get Started</button>
              </div>
              <div>
                <Image height={150} width={150}></Image>
              </div>
            </div>
          </div>
        </div>
        <div className={oristyles.safetyWhy}>
          <div>
            <h1>Web2 to Web3</h1>
            <h2 onClick={() => setToolTip({ audience: !toolTip.audience })}>Understand which Web3 technologies would best suit your business</h2>
            <h2 onClick={() => setToolTip({ algos: !toolTip.algos })}>understand your main objectives</h2>
            <h2 onClick={() => setToolTip({ scale: !toolTip.scale })}>Build and launch your Web3 project</h2>
            <h2 onClick={() => setToolTip({ scale: !toolTip.scale })}>Test and iterate based off initial tests until we scale to the moon</h2>
            <div className={oristyles.safetyTooltip}>
              <button>Book a Demo</button>
            </div>
          </div>
          <div>
            <Image className={oristyles.image} height={400} width={300}></Image>
          </div>
        </div>
        <div className={oristyles.safetyKeep}>
          <p style={{ fontSize: '5rem', fontWeight: '700', marginBottom: '0', color: '#CF012D' }}>Let's keep in touch</p>
          <p>We've dedicated ourselves to understanding and building the future in the Web3 space.</p>
          <p>We will keeep you in the loop with all the newest stuff!</p>
          <div className={oristyles.safetyEmail}>
            <input type="email" placeholder='Enter your email' /><button>Subscribe</button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Lionshare