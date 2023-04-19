import React from "react"
import { useState, useEffect } from "react"
import axios from "axios"
import ItemCard from "./components/ItemCard"
import styles from "./ItemListPage.module.css"
import MainSetting from "./components/MainSetting"
import { useLocation, Link } from 'react-router-dom';

interface ItemListProps {
  itemList: {
    id: number
    title: string
    category: string
    image: string
    price: number
  }[]
}

export default function ItemListPageFashion ({ itemList }:ItemListProps) {
  return (
    <MainSetting>
      <div className={styles.topPath}>홈 &nbsp; &gt; &nbsp; 패션</div>
      <div className={styles.itemListBoxContainer}>
        <div className={styles.categoryName}>패션</div>
          <div className={styles.itemCardContainer}>
          {itemList.filter((item) => item.category === "men's clothing").map((item) => (
            <Link to={`/product/${item.id}`}>
              <ItemCard
                key={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
              />
            </Link>
          ))}
        </div>
          <div className={styles.itemCardContainer}>
          {itemList.map((item) => (
            (item.category === "women's clothing" && 
            <Link to={`/product/${item.id}`}>
            <ItemCard
              key={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
            />
            </Link>
            )
          ))}
        </div>
      </div>
    </MainSetting>
  )
}