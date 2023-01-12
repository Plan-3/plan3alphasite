import React, { useState } from 'react'
import styles from '../../styles/Main.module.css'
import member from '../../assets/BoardMembers.json'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

function Board() {
  const [readRight, setReadRight] = useState(true)
  const [read, setRead] = useState(true)
  const [readLeft, setReadLeft] = useState(true)
  const [boardMember, setBoardMembers] = useState(1)
  const [boardRight, setBoardRight] = useState(2)
  const [boardLeft, setBoardLeft] = useState(0)


  //start of carousel logic
  //checks index of items
  const checkNumber = (number) => {
    if (number > member.length - 1) {
      return 0
    }
    if (number < 0) {
      return member.length - 1
    }
    return number
  }

  const handleSwitchBack = async () => {
    // pass all indexes into check number in case the index is higher than amount of items in json file
    setBoardLeft((index) => {
      //increase the index
      let newIndex = index + 1;
      //if new index is in acceptable range returns newIndex if not returns 0 and starts over
      return checkNumber(newIndex)
    })
    setBoardMembers((index) => {
      let newIndex = index + 1;
      return checkNumber(newIndex)
    })
    setBoardRight((index) => {
      let newIndex = index + 1;
      return checkNumber(newIndex)
    })
  }
  const handleSwitchForward = async () => {
    // pass all indexes into check number in case the index is higher than amount of items in json file
    setBoardLeft((index) => {
      //increase the index
      let newIndex = index - 1;
      //if new index is in acceptable range returns newIndex if not returns last item in json file and starts over
      return checkNumber(newIndex)
    })
    setBoardMembers((index) => {
      let newIndex = index - 1;
      return checkNumber(newIndex)
    })
    setBoardRight((index) => {
      let newIndex = index - 1;
      return checkNumber(newIndex)
    })
  }

  return (
    <div>
      <div className={styles.board}>
        <div>
          <button onClick={() => handleSwitchForward()}><ArrowBackIosIcon /></button>
        </div>
        <div className={styles.eachBoard} draggable={true}>
          <h1>{member[boardLeft].name}</h1>
          <p>{readLeft ?
            <div>
              <p>{member[boardLeft].info.slice(0, 180)}...</p> 
              <button onClick={() => setReadLeft(!readLeft)}>Read more</button>
            </div>
            :
            <div>
              <p>{member[boardLeft].info}</p>
              <button onClick={() => setReadLeft(!readLeft)}>Read less</button>
            </div>
          }</p>
        </div>
        <div className={styles.eachBoard} draggable={true}>
          <h1>{member[boardMember].name}</h1>
          <p>{read ?
            <div>
              <p>{member[boardMember].info.slice(0, 180)}...</p>
              <button onClick={() => setRead(!read)}>Read more</button>
            </div>
            :
            <div>
              <p>{member[boardMember].info}</p>
              <button onClick={() => setRead(!read)}>Read less</button>
            </div>
          }</p>
        </div>
        <div className={styles.eachBoard} draggable={true}>
          <h1>{member[boardRight].name}</h1>
          <p>{readRight ?
            <div>
              <p>{member[boardRight].info.slice(0, 180)}...</p>
              <button onClick={() => setReadRight(!readRight)}>Read more</button>
            </div>
            :
            <div>
              <p>{member[boardRight].info}</p>
              <button onClick={() => setReadRight(!readRight)}>Read less</button>
            </div>
          }</p>
        </div>
        <div>
          <button onClick={() => handleSwitchBack()}><ArrowForwardIosIcon /></button>
        </div>
      </div>
      {/* Board section for mobile users hidden until 600px width */}
      <div className={styles.boardMobile}>
        <div>
          <button onClick={() => handleSwitchForward()}><ArrowBackIosIcon /></button>
        </div>
        <div className={styles.eachBoard} draggable={true}>
          <h1>{member[boardMember].name}</h1>
          <p>{read ?
            <div>
              <p>{member[boardMember].info.slice(0, 180)}...</p>
              <button onClick={() => setRead(!read)}>Read more</button>
            </div>
            :
            <div>
              <p>{member[boardMember].info}</p>
              <button onClick={() => setRead(!read)}>Read less</button>
            </div>
          }</p>
        </div>
        <div>
          <button onClick={() => handleSwitchBack()}><ArrowForwardIosIcon /></button>
        </div>
      </div>
    </div>
  )
}

export default Board