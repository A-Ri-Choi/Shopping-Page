import { FaShoppingCart, FaRegBookmark, FaStar, FaFireAlt } from 'react-icons/fa';
import styles from "./ItemCard.module.css"
import React from 'react';
import { useLocation, Link, useNavigate } from 'react-router-dom';

interface ItemCardProps {
  id?: number
  image: string
  title: string
  price: number
}

export default function ItemCard ( props:ItemCardProps) {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate(`/product/${props.id}`);
  }
  
  return (
    <>
    <div>
    <div className={styles.itemCardContainer} onClick={handleClick}>
      <div key={props.id} className={styles.cardExample}>
        <div className={styles.imgBox}>
          <img src={props.image} className={styles.itemImg}/>
        </div>
        <div className={styles.content}>
          <p className={styles.description}>{props.title}</p>
          <p className={styles.price}>${props.price}</p>
        </div>
      </div>    
      </div>
    </div>

    </>
  )
}