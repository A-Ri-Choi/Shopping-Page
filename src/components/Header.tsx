import React, { useEffect, useRef, useState } from 'react'
import styles from './Header.module.css'
import Space from './Space'
import Tabs from './Tab'
import { Link } from 'react-router-dom';
import { BiCart, BiMoon, BiSun } from "react-icons/bi";
import clsx from 'clsx';

interface HeaderProps {
  cartItems: {
    length: number
  }
  itemList: any
  placeholder: any
}

export default function Header ({ cartItems, itemList, placeholder }:HeaderProps) {

  console.log(itemList)

  const [filteredData, setFilteredData] = useState([])

  const handleFilter = (event: { target: { value: any; }; }) => {
    const searchWord = event.target.value
    const newFilter = itemList.filter((value: { id: number, title: string; }) => {
      return value.title.toLowerCase().includes(searchWord.toLowerCase())
    })
    if (searchWord === "") {
      setFilteredData([])
    } else {
      setFilteredData(newFilter)
    }
  }

  const onClose = () => {
    setFilteredData([])
  }

  const [listBar, setListBar] = useState(false)

  const Toggle = () => {
    if (listBar === false) {
      setListBar(true)
    } else {
      setListBar(false)
    }
  }

  return (
    <>
    <div className={styles.headerContainer}>
      <div className={styles.shopContaienr}>
        <div className={styles.listBtn} onClick={Toggle}>
        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
          <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
        </svg>
        </div>
        <Link to='/' className={styles.link}>
          <div className={styles.shopName}>Ari Shop</div>
        </Link>
        <Tabs />
      </div>
      <div className={styles.findContainer}>
        <div className={styles.SunAndMoonIcon}>
        <BiMoon size={25} className={styles.moonIcon}/>
        <BiSun size={25} className={styles.sunIcon}/>
        </div>
        <Space />
        <div>
        <input
          type="text"
          placeholder={placeholder}
          // onClick={() => setShowModal(true)} 
          className={styles.input} 
          // value={searchValue} 
          onChange={handleFilter}
        />
        {filteredData.length !== 0 &&
        <div className={styles.dataResult}>
          {filteredData.map((value:any, key) => {
            return (
            <Link to={`/product/${value.id}`} className={styles.dataItem}>
            <p onClick={onClose}>{value.title}</p>
            </Link>
            )
          })}
        </div>
          }
        </div>
        <Space />
        <Link to='/cart'>
        <div className={styles.shopCart}>
          <BiCart size={25} className={styles.shopCartIcon}/>
          <div className={styles.circle}>
          {cartItems.length === 0 ? "0" : cartItems.length } 
          </div>
        </div>
        </Link>
        <Space />

      </div>



    </div>
    
    {listBar == true && (
      <div className={clsx(styles.listBar)}>
        <div className={styles.listItems}>
          <Link to='/fashion' onClick={() => setListBar(false)}>
          <div className={styles.listItem}>패션</div>
          </Link>
          <Link to='/accessory' onClick={() => setListBar(false)}>
          <div  className={styles.listItem}>액세서리</div>
          </Link>
          <Link to='/digital' onClick={() => setListBar(false)}>
          <div  className={styles.listItem}>디지털</div>
          </Link>
        </div>
      </div>
    )}
  </>
  )
}