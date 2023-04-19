import React from "react"
import styles from "./ItemDetailPage.module.css"
import Button from "./components/Button"
import { useState, useEffect } from "react"
import { Link, useParams } from 'react-router-dom';
import { ShopDataDetailType, ShopDetailData } from "./components/data";
import MainSetting from "./components/MainSetting";
import Star from "./components/Star";
import Space from "./components/Space";

interface ItemDetailPageProps {
  handleAddProduct: any
}


export default function ItemDetailPage ({ handleAddProduct }:ItemDetailPageProps) {

  const { id } = useParams()

  const [itemList, setItemList] = useState<ShopDataDetailType | any>([])

  useEffect(() => {
    if(!id) {
      return
    }
    (async () => {
      const detail = await ShopDetailData(id);
      setItemList(detail);
      console.log(detail)
    })();
  }, [id]);

  const handeClick = () => {
    handleAddProduct(itemList)
  }
  
  return(
    <>
    <MainSetting>
      <div className={styles.mainDefault}>
        <div className={styles.rootName}>
          {itemList.category} &nbsp; &gt; &nbsp; {itemList.title}
        </div>
        <div className={styles.itemDetailContainer}>
            <div className={styles.imgBox}>
              <img src={itemList.image} className={styles.img}/>
            </div>
            <div className={styles.ContentBox}>
              <div className={styles.namePart}>
                <p>{itemList.title}</p>
                <div className={styles.badge}>new</div>
              </div>
              <p className={styles.description}>
                {itemList.description}
              </p>
              <div className={styles.starRate}>
                <Star />
                <div className={styles.productRating}>
                &nbsp; {itemList.rating?.rate} / {itemList.rating?.count} 참여
              </div>
              </div>
              <p className={styles.price}>$ {itemList?.price}</p>
              <div className={styles.button}>
                <button className={styles.cartInBtn} onClick={handeClick}>장바구니에 담기</button>
                <Space />
                <Link to='/cart'>
                <Button>장바구니로 이동</Button>
                </Link>
              </div>
            </div>
          </div>
      </div>
    </MainSetting>
    </>
  )
}