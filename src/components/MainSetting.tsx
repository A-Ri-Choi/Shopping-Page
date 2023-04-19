import React, { Children, ReactNode } from 'react'
import styles from './MainSetting.module.css'

interface MainSettingProps {
  children: ReactNode
}

export default function MainSetting ({ children }:MainSettingProps) {
  return (
    <div className={styles.mainContainer}>
      {children}
    </div>
  )
}