import React from 'react'
import styles from './NoItem.module.css'
import { Link } from 'react-router-dom'

export default function NoItem () {
  return (
    <div className={styles.noItemcontainer}>
      <p className={styles.noItemMessage}>장바구니에 물품이 없습니다!</p>
      <Link to="/">
      <button className={styles.gotoPickBtn}>담으러가기</button>
      </Link>
    </div>
  )
}
