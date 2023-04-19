import React, { ReactNode } from 'react'
import styles from './Button.module.css'

interface Props {
  style?: React.CSSProperties,
  children: React.ReactNode,
  type?: 'button' | 'submit',
}


export default function Button ({ style, children, type = 'button' }: Props) {
  return (
    <button 
      className={styles.button}
      style={style}
      type={type}
    >
      {children}
    </button>
  )
}