import React, { useState } from 'react'
import styles from '../../styles/Main.module.css'
import member from '../../assets/BoardMembers.json'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

function Board() {
  const [read, setRead] = useState(true)
  const [boardMember, setBoardMembers] = useState(0)

  const handleSwitchBack = () => {
    if (boardMember >= member.length - 1) {
      setBoardMembers(0)
    }
    setBoardMembers(boardMember + 1)
  }
  return (
    <div className={styles.board}>
      <div>
        <button onClick={() => handleSwitchBack()}><ArrowBackIosIcon /></button>
      </div>
      <div className={styles.eachBoard}>
        <h1>{member[boardMember].name}</h1>
        <p>{read ?
          <div>
            {member[boardMember].info.slice(0, 180)}...
            <button onClick={() => setRead(!read)}>Read more</button>
          </div>
          :
          <div>
            {member[boardMember].info}
            <button onClick={() => setRead(!read)}>Read less</button>
          </div>
        }</p>
      </div>
      <div>
        <button onClick={() => handleSwitchForwards()}><ArrowForwardIosIcon /></button>
      </div>
    </div>
  )
}

export default Board