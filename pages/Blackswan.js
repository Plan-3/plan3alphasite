import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import BksData from '../assets/BlackSwan.json'
import bkstyles from '../styles/Blackswan.module.css'
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
import quoteData from '../assets/Quotes.json'
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import ArrowBackIos from '@mui/icons-material/ArrowBackIos'
import ArrowForwardIos from '@mui/icons-material/ArrowForwardIos'



function Blackswan() {
  const [i, setI] = useState(0)
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
  //   let time = setInterval()
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
    <div className={bkstyles.bkmain}>
      <Nav />
      <div className={bkstyles.hero}>
        <Image height={125} width={800}></Image>
        <p>
          We make it simple for clients to abandon the outdated model of
        </p>
        <p>
          centralised consensus in favor of the distributed blockchain model,
        </p>
        <p>
          which powers an impressive array of applications.
        </p>
        <div className={bkstyles.herobtn}>
          <button>Speak To An Expert</button>
          <button>About Us</button>
        </div>
      </div>
      <div className={bkstyles.solutions}>
        <div className={bkstyles.solutionsChild}>
          icon
          <p className={bkstyles.solutionsRainbow}>Project Discovery</p>
          <p>What blockchain strategy do you employ? We will assess your firm to determine which blockchain use cases are most appropriate for it.</p>
        </div>
        <div className={bkstyles.solutionsChild}>
          icon
          <p className={bkstyles.solutionsRainbow}>Blockchain Technology Integration</p>
          <p>Different businesses require different blockchain technology. Our experts will develop the technology necessary for front and back end development.</p>
        </div>
        <div className={bkstyles.solutionsChild}>
          icon
          <p className={bkstyles.solutionsRainbow}>Smart Contract Deployment and Auditing</p>
          <p>Whether you are in need of a smart contract or have deployed one already our security experts will make sure a BDL security standard is achieved.</p>
        </div>
      </div>
      <div className={bkstyles.mainFocus}>
        {BksData.map((data, index) => {
          return (
            <div className={bkstyles.focusItem} key={index}>
              <div className={bkstyles.focusHeader}>
                {data.image ? <Image height={50} width={50} src={icon[index]} /> : ''}
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
            <p>Explore tailor-cut products and services for your business</p>
          </div>
          <div>
            <Image height={200} width={450}></Image>
          </div>
        </div>
        <div className={bkstyles.containerWeb3}>
          <div>
            <Image height={200} width={450}></Image>
          </div>
          <div>
            <h1>Untapped Possibilities</h1>
            <p>Our Web3 experts will dive into the blockchain architecture and investigate its potential</p>
          </div>
        </div>
      </div>
      <div className={bkstyles.quotes}>
        <div className={bkstyles.quote}>
          <FormatQuoteIcon style={{ fontSize: '6rem' }} />
          <p>{quoteData[i].quote}</p>
        </div>
        <div className={bkstyles.quoteNav}>
          <button onClick={() => prevRank()}><ArrowBackIos /></button>
          <button onClick={() => nextRank()}><ArrowForwardIos /></button>
          <button>Meet the Board</button>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Blackswan