import React from "react"
import { useState, useEffect } from "react"
import styles from "./ItemListBox.module.css"
import ItemCard from "./ItemCard"
import MainSetting from "./MainSetting"
import { ShopData, ShopDataType } from "./data"
import Slider from "./Slider"


export default function ItemListBox ({ }) {

  const [itemList, setItemList] = useState<ShopDataType | any>([])
  const count = 0

  useEffect(() => {
    (async () => {
      const itemList = await ShopData()
      setItemList(itemList)
    })()
  }, [])

  return (
    <>
    <MainSetting>
    <Slider></Slider>
    <div className={styles.itemListBoxContainer}>
      <div className={styles.categoryName}>패션</div>
        <div className={styles.itemCardContainer}>
        {itemList.map((item:any) => (
          (item.category === "men's clothing" && 
          <ItemCard
            key={item.id}
            id={item.id}
            title={item.title}
            image={item.image}
            price={item.price}
          />
          )
        ))}
      </div>
    </div>

    <div className={styles.itemListBoxContainer}>
      <div className={styles.categoryName}>액세서리</div>
        <div className={styles.itemCardContainer}>
        {itemList.map((item:any) => (
          (item.category === "jewelery" && 
          <ItemCard
            key={item.id}
            id={item.id}
            title={item.title}
            image={item.image}
            price={item.price}
          />
          )
        ))}
      </div>
    </div>

    <div className={styles.itemListBoxContainer}>
    <div className={styles.categoryName}>디지털</div>
      <div className={styles.itemCardContainer}>
      {itemList.filter((item:any) => item.category === "electronics").slice(0, 4).map((item:any) => (
        <ItemCard
          key={item.id}
          id={item.id}
          title={item.title}
          image={item.image}
          price={item.price}
        />
        
      ))}
      </div>
    </div>
    </MainSetting>
    </>
  )
}