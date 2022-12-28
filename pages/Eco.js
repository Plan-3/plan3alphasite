import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import BksData from '../assets/Eco.json'
import ecostyles from '../styles/Eco.module.css'
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
import ecologo from '../assets/Images/4.png'
import quoteData from '../assets/Quotes.json'
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import ArrowBackIos from '@mui/icons-material/ArrowBackIos'
import ArrowForwardIos from '@mui/icons-material/ArrowForwardIos'



function Eco() {
  const [i, setI] = useState(0)
  const [toolTip, setToolTip] = useState({ raise: true, invest: false, ats: false })
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
    <div className={ecostyles.bkmain}>
      <Nav />
      <div className={ecostyles.hero}>
        <Image className={ecostyles.image} height={125} width={800} src={ecologo}></Image>
        <p>
          We have a heavy emphasis on ways to leverage blockchain technology to create 
        </p>
        <p>
          enterprise solutions. Disrupting existing solutions in virtually all verticals by building
        </p>
        <p>
          systems efficiently and inline with all regulatory practices.
        </p>
        <div className={ecostyles.herobtn}>
          <button>Speak To An Expert</button>
          <button>About Us</button>
        </div>
      </div>
      <div className={ecostyles.solutions}>
        <div className={ecostyles.solutionsChild}>
          <Image src={icon10} height={100} width={150}></Image>
          <p className={ecostyles.solutionsRainbow}>Avoid ESG blind spots</p>
          <p>With regulations happening frequently, staying on top of changes becomes difficult.</p>
        </div>
        <div className={ecostyles.solutionsChild}>
          <Image src={icon2} height={100} width={150}></Image>
          <p className={ecostyles.solutionsRainbow}>Access New Investors </p>
          <p>ETF investors looking to manage their ESG risks. </p>
        </div>
        <div className={ecostyles.solutionsChild}>
          <Image src={icon1} height={100} width={150}></Image>
          <p className={ecostyles.solutionsRainbow}>A Better Climate </p>
          <p>Global warming is no jokes, reducing crypto emissions is one step closer to a greener world.</p>
        </div>
      </div>
      <div className={ecostyles.mainFocusTitle}>
        <h1>Eco Citizen</h1>
        <h1>Main Areas of Focus</h1>
      </div>
      <div className={ecostyles.mainFocus}>
        {BksData.map((data, index) => {
          return (
            <div className={ecostyles.focusItem} key={index}>
              <div className={ecostyles.focusHeader}>
                {data.image ? <Image height={50} width={50} src={icon[index]} /> : ''}
                <p>{data.title}</p>
              </div>
              <div className={ecostyles.focusText}>
                <p>{data.info}</p>
              </div>
              {/* <img src={data.image} width={40} height={40} /> */}
            </div>
          )
        })}
      </div>
      <div className={ecostyles.customWeb3}>
        <div className={ecostyles.containerWeb3}>
          <div>
            <h1>Time for change</h1>
            <p>Crypto firms will need to consider the new ESG obligations that will apply to their investors and other business partners</p>
          </div>
          <div>
            <Image className={ecostyles.image} height={200} width={450}></Image>
          </div>
        </div>
        <div className={ecostyles.containerWeb3}>
          <div>
            <Image className={ecostyles.image} height={200} width={450}></Image>
          </div>
          <div>
            <h1>Alternative solutions </h1>
            <p>It has been well publicized that some types of cryptocurrency, generally referred to as requiring “proof of work”, use a competitive validation method known as “mining” to achieve goals, such as issuing new crypto currency, and uses a huge amount of computer processing power. </p>
          </div>
        </div>
      </div>
      <div className={ecostyles.quotes}>
        <div className={ecostyles.quote}>
          <FormatQuoteIcon style={{ fontSize: '6rem' }} />
          <p>{quoteData[i].quote}</p>
        </div>
        <div className={ecostyles.quoteNav}>
          <div>
            <button onClick={() => prevRank()}><ArrowBackIos /></button>
            <button onClick={() => nextRank()}><ArrowForwardIos /></button>
          </div>
          <div>
            <button>Meet the Board</button>
          </div>
        </div>
      </div>
      <div className={ecostyles.safety}>
        <div className={ecostyles.safetyCompliance}>
        <div>
          <h1>Compliance First</h1>
          <p>ESG disclosure requirements will become more prominent, the regulatory landscape in this area is dynamic and continually shifting. Stay ready.</p>
          <button>Get Started</button>
        </div>
        <div>
          <Image height={250} width={250}></Image>
        </div>
        </div>
        <div className={ecostyles.safetyApproach}>
          <div>
            <button disabled={true}>We have an ESG focus</button>
            <h1>Enviromental Concerns</h1>
            <p>Many see Crypto as “uninvestable” for failing the “E” criteria among investors with strict environmental, social and corporate governance (“ESG”) concerns as part of their investment mandates.</p>
          </div>
          <div>
            <Image src={robo} className={ecostyles.image} height={300} width={400}></Image>
          </div>
        </div>
        <div className={ecostyles.safetyMarket}>
          <h1>A green Crypto</h1>
          <div className={ecostyles.safetyMarketRow}>
            <div className={ecostyles.safetyMarketContent}>
              <div>
                <p><span style={{ color: '#20880F' }}>56%</span> don't invest in crypto because of environmental concerns.</p>
                <button>Get Started</button>
              </div>
              <div>
                <Image height={150} width={150}></Image>
              </div>
            </div>
            <div className={ecostyles.safetyMarketContent}>
              <div>
                <p><span style={{ color: '#20880F' }}>Carbon</span>  emissions from crypto mining is the primary concern . </p>
                <button>Get Started</button>
              </div>
              <div>
                <Image height={150} width={150}></Image>
              </div>
            </div>
          </div>
        </div>
        <div className={ecostyles.safetyWhy}>
          <div>
            <h1>Why Plan3</h1>
            <h2 onClick={() => setToolTip({ raise: !toolTip.raise })}>RAISE WEB3</h2>
            {toolTip.raise ?
              <div className={ecostyles.safetyTooltip}>
                <p>Asset owners of all types can raise decentralized funding, allowing the opportunity to generate passive revenue and access to liquidity.</p>
                <button>Book a Demo</button>
              </div> : ''
            }
            <h2 onClick={() => setToolTip({ invest: !toolTip.invest })}>Invest</h2>
            {toolTip.invest ?
              <div className={ecostyles.safetyTooltip}>
                <p>Opportunities for investors of all types - previously only reserved for accredited investors, in the form of equity, funds, debt, and real estate.</p>
                <button>Book a Demo</button>
              </div> : ''
            }
            <h2 onClick={() => setToolTip({ ats: !toolTip.ats })}>ATS</h2>
            {toolTip.ats ?
              <div className={ecostyles.safetyTooltip}>
                <p>Secondary trading for private markets. LIQUIDIAN's ATS delivers liquidity for private assets. Add your security to the premier marketplace for trading digital securities.</p>
                <button>Book a Demo</button>
              </div> : ''
            }
          </div>
          <div>
            <Image className={ecostyles.image} height={400} width={300}></Image>
          </div>
        </div>
        <div className={ecostyles.safetyKeep}>
            <p style={{fontSize: '5rem', fontWeight: '700', marginBottom: '0', color:'#20880F'}}>Let's keep in touch</p>
            <p>We've dedicated ourselves to understanding and building the future in the Web3 space.</p>
            <p>We will keeep you in the loop with all the newest stuff!</p>
        <div className={ecostyles.safetyEmail}>
          <input type="email" placeholder='Enter your email' /><button>Subscribe</button>
        </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Eco