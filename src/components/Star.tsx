import React, { useState } from 'react'
import styles from './Star.module.css'
import cx from 'clsx'
import { FaStar } from "react-icons/fa";


const Star = () => {
  // const star = []
  // let starCount = Math.floor(rateNumber )
  // for (let i=0; i<starCount; i++) {
  //   if(i%2 === 0) {
  //     star.push
  //   }
  // }

  // const [score, setScore] = useState([false, false, false, false, false]);

  // const starScore = (index: number) => {
  //   let star = [...score]
  //   for(let i=0; i<5; i++) {
  //     star[i] = i <= index ? true :  false
  //   }
  //   setScore(star)
  // }
  
  return (
    <>
      <div className={styles.starRatingContainer}>
        {[...Array(5)].map((el, index) => {
          return (
            <label key={index}>
          <FaStar key={index} size={23} className={styles.star}/>
          </label>
          )
        })}
          {/* <FaStarHalfAlt size={23}/> */}
      </div>

      </>
  )
}

export default Star