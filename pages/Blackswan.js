import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import BksData from '../assets/BlackSwan.json'
import styles from '../styles/PageStyles.module.css'

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
import bkslogo from '../assets/Images/Logos/swanlogo.png'
import meeting from '../assets/Images/block1.svg'
import servers from '../assets/Images/block2.svg'
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
    <div className={styles.bkmain}>
      <div style={{ position: 'sticky', top: 0 }}>
        <Nav />
      </div>
      <div className={styles.heroBsr}>
        <div className={styles.heroLogo}><Image src={bkslogo} width={200}></Image></div>
        <p>
          Make it simple. We deliver high quality research and intelligence by leveraging the utility of deep and emerging technologies
        </p>
        <p>
          Our applied research connects discoveries to a practical and highly-strategic end;
        </p>
        <p>
          commercialization is focused on delivering value and end results.
        </p>
        <div className={styles.herobtn}>
          <button><a href="/Contact">Speak To An Expert</a> </button>
          <button><a href="/Team">About Us</a> </button>
        </div>
      </div>
      <div className={styles.solutions}>
        <div className={styles.solutionsChild}>
          <Image src={icon10} height={100} width={150}></Image>
          <p className={styles.solutionsRainbow}>Project Discovery</p>
          <p>What is most critical to your business objectives? We will assess your firm to determine which blockchain use cases are most appropriate for it.</p>
        </div>
        <div className={styles.solutionsChild}>
          <Image src={icon2} height={100} width={150}></Image>
          <p className={styles.solutionsRainbow}>Strategy and Consulting</p>
          <p>Different firms require different intelligence. We help strategize to your unique needs and deliver targeted business intelligence</p>
        </div>
        <div className={styles.solutionsChild}>
          <Image src={icon1} height={100} width={150}></Image>
          <p className={styles.solutionsRainbow}>Blockchain Technology Integration</p>
          <p>Capitalize on the tools and resources that can accelerate your business. Our experts will integrate and develop the systems to help achieve your goals</p>
        </div>
      </div>
      <h1 style={{textDecoration: 'underline white'}}>Main Areas of Focus</h1>
      <div className={styles.mainFocus}>
        {BksData.map((data, index) => {
          return (
            <div className={styles.focusItem} key={index}>
              <div className={styles.focusHeader}>
                {/* {data.image ? <Image height={75} width={75} src={icon[index]} /> : ''} */}
                <p>{data.title}</p>
              </div>
              <div className={styles.focusText}>
                <p>{data.info}</p>
              </div>
              {/* <img src={data.image} width={40} height={40} /> */}
            </div>
          )
        })}
      </div>
      <div className={styles.customWeb3Bsr}>
        <div className={styles.containerWeb3}>
          <div>
            <h1>Custom Web3 Solutions</h1>
            <p>Explore custom designed products and services for your business.</p>
          </div>
          <div>
            <Image className={styles.image} height={200} width={450} src={meeting}></Image>
          </div>
        </div>
        <div className={styles.containerWeb3}>
          <div>
            <Image className={styles.image} height={200} width={450} src={servers}></Image>
          </div>
          <div>
            <h1>Untapped Possibilities?</h1>
            <p>Dive into Web3 and investigate new possibilities with our Web3 experts.</p>
          </div>
        </div>
      </div>
      <div className={styles.quotes}>
        <div className={styles.quote}>
          <FormatQuoteIcon style={{ fontSize: '6rem' }} />
          <p>{quoteData[i].quote}</p>
          <p>{quoteData[i].person}</p>
        </div>
        <div className={styles.quoteNav}>
          <div>
            <button onClick={() => prevRank()}><ArrowBackIos /></button>
            <button onClick={() => nextRank()}><ArrowForwardIos /></button>
          </div>
          <div>
            <button><a href="/Team">Meet the Team</a> </button>
          </div>
        </div>
      </div>
      <div className={styles.specific}>
        <div className={styles.specificApproach}>
          <div>
            <button style={{ backgroundColor: '#005eff' }} disabled={true}>Don't put your users at risk.</button>
            <h1>A safety first approach</h1>
            <p>Security flaws, inefficiencies, and bugs are very expensive when you deploy a Smart Contract. Monetary and emotional damage not only to you, but your users as well.</p>
          </div>
          <div>
            <Image src={robo} className={styles.image} height={300} width={400}></Image>
          </div>
        </div>
        <div className={styles.specificWhy}>
          <div>
            <h1>Why Black Swan?</h1>
            <h2 onClick={() => setToolTip({ raise: !toolTip.raise })}>Plug into an ecosystem, not an agency</h2>
            {toolTip.raise ?
              <div className={styles.specificTooltip}>
                <p>Asset owners of all types can raise decentralized funding, allowing the opportunity to generate passive revenue and access to liquidity.</p>
                <button><a href="/Contact"> Get in Touch</a></button>
              </div> : ''
            }
            <h2 onClick={() => setToolTip({ invest: !toolTip.invest })}>Utilize the tools that make sense for your business</h2>
            {toolTip.invest ?
              <div className={styles.specificTooltip}>
                <p>Opportunities for investors of all types - previously only reserved for accredited investors, in the form of equity, funds, debt, and real estate.</p>
                <button><a href="/Contact"> Get in Touch</a></button>
              </div> : ''
            }
            <h2 onClick={() => setToolTip({ ats: !toolTip.ats })}>Strategize and Develop top tier solutions</h2>
            {toolTip.ats ?
              <div className={styles.specificTooltip}>
                <p>Secondary trading for private markets. LIQUIDIAN's ATS delivers liquidity for private assets. Add your security to the premier marketplace for trading digital securities.</p>
                <button><a href="/Contact"> Get in Touch</a></button>
              </div> : ''
            }
          </div>
          <div>
            <Image className={styles.image} height={400} width={300} src={liquidprism}></Image>
          </div>
        </div>
        <div className={styles.specificKeepBsr}>
          <p style={{ fontSize: '5rem', fontWeight: '700', marginBottom: '0' }}>Let's keep in touch</p>
          <p>We've dedicated ourselves to understanding and building the future in the Web3 space.</p>
          <p>We will keeep you in the loop with all the newest stuff!</p>
          <div className={styles.specificEmail}>
            <input type="email" placeholder='Enter your email' /><button style={{ backgroundColor: '#005eff' }}>Subscribe</button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Blackswan