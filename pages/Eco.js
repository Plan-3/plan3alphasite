import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import EcoData from '../assets/Eco.json'
import styles from '../styles/PageStyles.module.css'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
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
import ecologo from '../assets/Images/Logos/ecologo.png'
import coffee from '../assets/Images/EcoImages/coffeeeco.png'
import code from '../assets/Images/EcoImages/ecocode.png'
import location from '../assets/Images/EcoImages/ecolocation.png'
import piechart from '../assets/Images/EcoImages/ecopie.png'
import p3 from '../assets/Images/EcoImages/plan3eco.png'
import threecs from '../assets/Images/EcoImages/3cs.png'
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
    <div className={styles.bkmain}>
      <div style={{ position: 'sticky', top: 0 }}>
        <Nav />
      </div>
      <div className={styles.heroEco}>
        <Image className={styles.image} height={125} width={800} src={ecologo}></Image>
        <p>
          Bringing emerging technologies to energy and eco-based markets
        </p>
        {/* <div className={styles.herobtn}>
          <button><a href="/Contact">Speak To An Expert</a> </button>
          <button><a href="/Team">About Us</a> </button>
        </div> */}
      </div>
      <div style={{ borderColor: '#208805' }} className={styles.solutions}>
        <div className={styles.solutionsChild}>
          {/* <Image src={icon10} height={100} width={150}></Image> */}
          <p className={styles.solutionsRainbow}>Avoid ESG blind spots</p>
          <p>With regulations happening frequently, staying on top of changes becomes difficult.</p>
        </div>
        <div className={styles.solutionsChild}>
          {/* <Image src={icon2} height={100} width={150}></Image> */}
          <p className={styles.solutionsRainbow}>Transparent Technology </p>
          <p>Transparency in the energy and eco-blockchain market promotes accountability, increases trust among stakeholders, and helps ensure that sustainable energy practices and eco-friendly products are being effectively implemented and monitored.</p>
        </div>
        <div className={styles.solutionsChild}>
          {/* <Image src={icon1} height={100} width={150}></Image> */}
          <p className={styles.solutionsRainbow}>A Better Tomorrow</p>
          <p>Reducing emissions is one step closer to a greener world.</p>
        </div>
      </div>
      <div style={{ color: '#208805' }} className={styles.mainFocusTitle}>
        <h1 style={{textDecoration: 'underline #208805'}}>Main Areas of Focus</h1>
      </div>
      <div className={styles.mainFocus}>
        {EcoData.map((data, index) => {
          return (
            <div className={styles.focusItem} key={index}>
              <div className={styles.focusHeader}>
                {data.image ? <Image height={50} width={50} src={icon[index]} /> : ''}
                <p style={{ color: '#208805' }}>{data.title}</p>
              </div>
              <div className={styles.focusText}>
                <p>{data.info}</p>
              </div>
              {/* <img src={data.image} width={40} height={40} /> */}
            </div>
          )
        })}
      </div>
      <div className={styles.customWeb3Eco}>
        <div className={styles.containerWeb3}>
          <div>
            <h1 style={{ color: '#20880f' }}>Time for change</h1>
            <p>Businesses will need to consider the new ESG obligations that will apply to their investors and other business partners</p>
          </div>
          <div>
            <Image className={styles.image} height={250} width={250} src={coffee}></Image>
          </div>
        </div>
        <div className={styles.containerWeb3}>
          <div>
            <Image className={styles.image} height={250} width={250} src={code}></Image>
          </div>
          <div>
            <h1 style={{ color: '#20880f' }}>Alternative solutions </h1>
            <p>By utilizing renewable energy sources, distributed validation processes, and more efficient algorithms, we are able to make a positive impact on the environment while still achieving our goals.</p>
          </div>
        </div>
      </div>
      <div style={{ backgroundColor: '#208805' }} className={styles.quotes}>
        <div className={styles.quote}>
          <FormatQuoteIcon style={{ fontSize: '6rem' }} />
          <p>{quoteData[i].quote}</p>
          <p>{quoteData[i].person}</p>
        </div>
        <div className={styles.quoteNav}>
          <div>
            <button style={{ color: '#208805' }} onClick={() => prevRank()}><ArrowBackIos /></button>
            <button style={{ color: '#208805' }} onClick={() => nextRank()}><ArrowForwardIos /></button>
          </div>
          <div>
            <button style={{ color: '#208805' }}><a href="/Team">Meet the Team</a> </button>
          </div>
        </div>
      </div>
      <div className={styles.specific}>
        <div className={styles.specificCompliance}>
          <div>
            <h1 style={{ color: '#208805' }}>Compliance First</h1>
            <p>ESG disclosure requirements will become more prominent, the regulatory landscape in this area is dynamic and continually shifting. Stay ready.</p>
            <button><a href="/Contact">Get Started</a></button>
          </div>
          {/* <div>
            <Image height={450} width={450} src={p3}></Image>
          </div> */}
        </div>
        {/* <div className={styles.specificApproach}>
          <div>
            <button style={{ backgroundColor: '#208805' }} disabled={true}>We have an ESG focus</button>
            <h1>Enviromental Concerns</h1>
            <p>Many see Crypto as “uninvestable” for failing the “E” criteria among investors with strict environmental, social and corporate governance (“ESG”) concerns as part of their investment mandates.</p>
          </div>
          <div>
            <Image src={robo} className={styles.image} height={300} width={400}></Image>
          </div>
        </div> */}
        <div className={styles.specificMarket}>
          <h1 style={{ color: '#208805' }}>A green Crypto</h1>
          <div className={styles.specificMarketRow}>
            <div className={styles.specificMarketContent}>
              <div>
                <p><span style={{ color: '#20880F' }}>56%</span> don't invest in crypto because of environmental concerns.</p>
                <button><a href="/Contact">Get Started</a></button>
              </div>
              <div>
                <Image height={150} width={150} src={piechart}></Image>
              </div>
            </div>
            <div className={styles.specificMarketContent}>
              <div>
                <p><span style={{ color: '#20880F' }}>Carbon</span>  emissions from crypto mining is the primary concern . </p>
                <button><a href="/Contact">Get Started</a></button>
              </div>
              <div>
                <Image height={150} width={150} src={location}></Image>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.specificWhy}>
          <div>
            <h1>Why EcoCitizen</h1>
            <h2 onClick={() => setToolTip({ raise: !toolTip.raise })}>Accessibility, Liquidity, Transparency, Efficiency</h2>
            {toolTip.raise ?
              <div className={styles.specificTooltip}>
                <p>We provide a unique and effective way for companies to increase their sustainability and reduce their carbon footprint while also providing a new source of revenue.</p>
                <button><a href="/Contact"> Book a Demo</a></button>
              </div> : ''
            }
            {/* <h2 onClick={() => setToolTip({ invest: !toolTip.invest })}>Invest</h2>
            {toolTip.invest ?
              <div className={styles.specificTooltip}>
                <p>Opportunities for investors of all types - previously only reserved for accredited investors, in the form of equity, funds, debt, and real estate.</p>
                <button><a href="/Contact"> Book a Demo</a></button>
              </div> : ''
            }
            <h2 onClick={() => setToolTip({ ats: !toolTip.ats })}>ATS</h2>
            {toolTip.ats ?
              <div className={styles.specificTooltip}>
                <p>Secondary trading for private markets. LIQUIDIAN's ATS delivers liquidity for private assets. Add your security to the premier marketplace for trading digital securities.</p>
                <button><a href="/Contact"> Book a Demo</a></button>
              </div> : ''
            } */}
          </div>
          <div>
            <Image className={styles.image} height={400} width={400} src={threecs}></Image>
          </div>
        </div>
        <div className={styles.specificKeepEco}>
          <p style={{ fontSize: '5rem', fontWeight: '700', marginBottom: '0', color: '#20880F' }}>Let's keep in touch</p>
          <p>We've dedicated ourselves to understanding and building the future in the Web3 space.</p>
          <p>We will keeep you in the loop with all the newest stuff!</p>
          <div className={styles.specificEmail}>
            <input type="email" placeholder='Enter your email' /><button style={{ color: '#208805' }}>Subscribe</button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Eco