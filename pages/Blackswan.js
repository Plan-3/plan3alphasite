import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import BksData from '../assets/BlackSwan.json'
import bkstyles from '../styles/Blackswan.module.css'

/* 
import components 
*/

import Nav from '../components/Nav'
import Footer from '../components/Footer'

/*
import custom images made in canva
*/

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
import icon11 from '../assets/Images/Icons/11.svg'
import icon12 from '../assets/Images/Icons/12.svg'
import robo from '../assets/Images/robothand.svg'
import bkslogo from '../assets/Images/Logos/swan.png'
import meeting from '../assets/Images/BKSImages/web3meeting.svg'
import servers from '../assets/Images/BKSImages/securityserver.svg'
import liquidprism from '../assets/Images/BKSImages/liquidprism.svg'

/*
import data and mui icons
*/

import quoteData from '../assets/Quotes.json'
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import ArrowBackIos from '@mui/icons-material/ArrowBackIos'
import ArrowForwardIos from '@mui/icons-material/ArrowForwardIos'



function Blackswan() {
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
    icon10,
    icon11,
    icon12
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
    <div className={bkstyles.bkmain}>
      <Nav />
      <div className={bkstyles.hero}>
        <div className={bkstyles.heroLogo}><Image src={bkslogo}></Image></div>
        <p>
          Make it simple. We deliver high quality research and intelligence by leveraging the utility of deep and emerging technologies
        </p>
        <p>
          Our applied research connects discoveries to a practical and highly-strategic end;
        </p>
        <p>
          commercialization is focused on delivering value and end results.
        </p>
        <div className={bkstyles.herobtn}>
          <button>Speak To An Expert</button>
          <button>About Us</button>
        </div>
      </div>
      <div className={bkstyles.solutions}>
        <div className={bkstyles.solutionsChild}>
          <Image src={icon10} height={100} width={150}></Image>
          <p className={bkstyles.solutionsRainbow}>Project Discovery</p>
          <p>What is most critical to your business objectives? We will assess your firm to determine which blockchain use cases are most appropriate for it.</p>
        </div>
        <div className={bkstyles.solutionsChild}>
          <Image src={icon2} height={100} width={150}></Image>
          <p className={bkstyles.solutionsRainbow}>Strategy and Consulting</p>
          <p>Different firms require different intelligence. We help strategize to your unique needs and deliver targeted business intelligence</p>
        </div>
        <div className={bkstyles.solutionsChild}>
          <Image src={icon1} height={100} width={150}></Image>
          <p className={bkstyles.solutionsRainbow}>Blockchain Technology Integration</p>
          <p>Capitalize on the tools and resources that can accelerate your business. Our experts will integrate and develop the systems to help achieve your goals</p>
        </div>
      </div>
      <h1>Blackswan</h1>
      <h1>Main Areas of Focus</h1>
      <div className={bkstyles.mainFocus}>
        {BksData.map((data, index) => {
          return (
            <div className={bkstyles.focusItem} key={index}>
              <div className={bkstyles.focusHeader}>
                {data.image ? <Image height={75} width={75} src={icon[index]} /> : ''}
                <p>{data.title}</p>
              </div>
              <div className={bkstyles.focusText}>
                <p>{data.info}</p>
              </div>
              {/* <img src={data.image} width={40} height={40} /> */}
            </div>
          )
        })}
      </div>
      <div className={bkstyles.customWeb3}>
        <div className={bkstyles.containerWeb3}>
          <div>
            <h1>Custom Web3 Solutions</h1>
            <p>Explore custom designed products and services for your business.</p>
          </div>
          <div>
            <Image className={bkstyles.image} height={200} width={450} src={meeting}></Image>
          </div>
        </div>
        <div className={bkstyles.containerWeb3}>
          <div>
            <Image className={bkstyles.image} height={200} width={450} src={servers}></Image>
          </div>
          <div>
            <h1>Untapped Possibilities?</h1>
            <p>Dive into Web3 and investigate new possibilities with our Web3 experts.</p>
          </div>
        </div>
      </div>
      <div className={bkstyles.quotes}>
        <div className={bkstyles.quote}>
          <FormatQuoteIcon style={{ fontSize: '6rem' }} />
          <p>{quoteData[i].quote}</p>
          <p>{quoteData[i].person}</p>
        </div>
        <div className={bkstyles.quoteNav}>
          <button onClick={() => prevRank()}><ArrowBackIos /></button>
          <button onClick={() => nextRank()}><ArrowForwardIos /></button>
          <button><a href="/Team">Meet the Team</a> </button>
        </div>
      </div>
      <div className={bkstyles.safety}>
        <div className={bkstyles.safetyApproach}>
          <div>
            <button disabled={true}>Don't put your users at risk.</button>
            <h1>A safety first approach</h1>
            <p>Security flaws, inefficiencies, and bugs are very expensive when you deploy a Smart Contract. Monetary and emotional damage not only to you, but your users as well.</p>
          </div>
          <div>
            <Image src={robo} className={bkstyles.image} height={300} width={400}></Image>
          </div>
        </div>
        <div className={bkstyles.safetyWhy}>
          <div>
            <h1>Why Black Swan?</h1>
            <h2 onClick={() => setToolTip({ raise: !toolTip.raise })}>Plug into an ecosystem, not an agency</h2>
            {toolTip.raise ?
              <div className={bkstyles.safetyTooltip}>
                <p>Asset owners of all types can raise decentralized funding, allowing the opportunity to generate passive revenue and access to liquidity.</p>
                <button>Book a Demo</button>
              </div> : ''
            }
            <h2 onClick={() => setToolTip({ invest: !toolTip.invest })}>Utilize the tools that make sense for your business</h2>
            {toolTip.invest ?
              <div className={bkstyles.safetyTooltip}>
                <p>Opportunities for investors of all types - previously only reserved for accredited investors, in the form of equity, funds, debt, and real estate.</p>
                <button>Book a Demo</button>
              </div> : ''
            }
            <h2 onClick={() => setToolTip({ ats: !toolTip.ats })}>Strategize and Develop top tier solutions</h2>
            {toolTip.ats ?
              <div className={bkstyles.safetyTooltip}>
                <p>Secondary trading for private markets. LIQUIDIAN's ATS delivers liquidity for private assets. Add your security to the premier marketplace for trading digital securities.</p>
                <button>Book a Demo</button>
              </div> : ''
            }
          </div>
          <div>
            <Image className={bkstyles.image} height={400} width={300} src={liquidprism}></Image>
          </div>
        </div>
        <div className={bkstyles.safetyKeep}>
          <p style={{ fontSize: '5rem', fontWeight: '700', marginBottom: '0' }}>Let's keep in touch</p>
          <p>We've dedicated ourselves to understanding and building the future in the Web3 space.</p>
          <p>We will keeep you in the loop with all the newest stuff!</p>
          <div className={bkstyles.safetyEmail}>
            <input type="email" placeholder='Enter your email' /><button>Subscribe</button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Blackswan