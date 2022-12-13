import React from 'react'
import Image from 'next/image'
import BksData from '../assets/BlackSwan.json'


function Blackswan() {
  return (
    <div className='Blackswan main'>
      <div className='hero'>
        <Image height={450} width={200}></Image>
        <p>
        We make it simple for clients to abandon the outdated model of
        centralised consensus in favor of the distributed blockchain model,
        which powers an impressive array of applications.
        </p>
        <button>Speak To An Expert</button>
        <button>About Us</button>
      </div>
      <div className='small info'>
        <div>
          icon
          <p className='project title'>Project Discovery</p>
          <p>What blockchain strategy do you employ? We will assess your firm to determine which blockchain use cases are most appropriate for it.</p>
        </div>
        <div>
          icon
          <p className='project title'>Blockchain Technology Integration</p>
          <p>Different businesses require different blockchain technology. Our experts will develop the technology necessary for front and back end development.</p>
        </div>
        <div>
          icon
          <p className='project title'>Smart Contract Deployment and Auditing</p>
          <p>Whether you are in need of a smart contract or have deployed one already our security experts will make sure a BDL security standard is achieved.</p>
        </div>
      </div>
      <div className='BKS focus'>
        {BksData.map((data, index) => {
          return(
            <div key={index}>
              {/* <img src={data.image} width={40} height={40} /> */}
              <h1>{data.title}</h1>
              <p>{data.info}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default BlackSwan