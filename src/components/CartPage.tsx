import React, { useEffect, useState } from 'react'
import styles from './CartPage.module.css'
import MainSetting from './MainSetting'
import NoItem from './NoItem'
import Swal from 'sweetalert2'
// import { useRecoilState } from 'recoil'
// import CartItemAtom from '../recoil/CartItemAtom'

type CartPageProps = {
  cartItems: any
  handleAddProduct: any
  handleRemoveProduct: any
  handleCartClear: any
}

export default function CartPage ({ cartItems, handleAddProduct, handleRemoveProduct, handleCartClear }:CartPageProps) {  

const Alert = () => {
  Swal.fire({
    title: '정말로 구매하시겠습니까?',
    text: "장바구니의 모든 상품들이 삭제됩니다.",
    showCancelButton: true,
    confirmButtonColor: "rgb(100, 26, 230)",
    background: "rgb(43, 51, 61)",
    color: "rgb(166, 173, 186)",
    confirmButtonText: "네",
    cancelButtonText: "아니오"
  }).then((result) => {
    if (result.isConfirmed) {
      handleCartClear()
    }
  })
}
const totalPrice = cartItems.reduce(
  (price: number, item: { quantity: number; price: number }) => Math.floor(price + item.quantity * item.price),
  0
)

  return (
    <>
    <MainSetting>
      <div>
        <div className={styles.topPath}>홈 - 장바구니</div>
          {cartItems.length === 0 && (
            // <div>No items</div>
            <NoItem />
          )}

        <div className={styles.pageContainer}>
          <div>            
            {cartItems && cartItems.map((item: { 
              image: string | undefined;
              title: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined;
              price: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined;
              quantity: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined 
            }, index: any) => {
              return (
                  <>
                    <div className={styles.cartItemList}>
                      <div className={styles.itemListBoxContainer}>
                        <img src={item.image} className={styles.imgBox}/>
                        <div className={styles.contentBox}>
                          <div className={styles.box}>
                            <div className={styles.title}>{item.title}</div>
                            <div className={styles.price}>{item.price}$ price</div>
                            <div className={styles.countButton}>
                              <button className={styles.addRemoveBtn} onClick={() => handleRemoveProduct(item)}>-</button>
                              <div className={styles.buttonMiddle}>
                              <span>{item.quantity}</span>
                              </div>
                              <button className={styles.addRemoveBtn} onClick={() => handleAddProduct(item)}>+</button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                </>
              );
            })}
            </div>
        <div>
          <div className={styles.buyButton}>
            <div className={styles.all}>총: ${totalPrice}</div>

            {cartItems.length >= 1 && (
              <button className={styles.buyBtn} onClick={Alert}>구매하기</button>
            )}
            </div>
          </div>
        </div>
      </div>
    </MainSetting>
    </>
  )
}