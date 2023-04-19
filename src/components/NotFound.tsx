import { Link } from 'react-router-dom'
import Button from './Button'
import styles from './NotFound.module.css'
import React from 'react'

const NotFound = () => {
  return (
    <div className={styles.notFound}>
      <h2 className={styles.title}>404</h2>
      <p className={styles.text}>페이지를 찾을 수 없습니다.</p>
      <Link to='/'>
        <Button style={{background: 'rgb(100, 26, 230)', fontSize: '1.2rem', padding: '1rem 2rem'}}>메인으로</Button>
      </Link>
    </div>
  )
}

export default NotFound