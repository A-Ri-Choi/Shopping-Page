import React, { useEffect, useState } from "react"
import { Route, Routes, useNavigate } from 'react-router-dom'
import ItemListBox from "./ItemListBox"
import ItemDetailPage from "../ItemDetailPage"
import ItemListPageFashion from "../ItemListPageFashion"
import ItemListPageAccessory from "../ItemListPageAccessory"
import ItemListPageDigital from "../ItemListPageDigital"
import CartPage from "./CartPage"
import NotFound from "./NotFound"
import { ShopData } from "./data"
// import { Redirect } from 'react-router-dom'

interface PageNavigatorProps {
  itemList: any
  cartItems: any
  handleAddProduct: any
  handleRemoveProduct: any
  handleCartClear: any
  setCartItems: any
}


const PageNavigator = ({ itemList, cartItems, setCartItems, handleAddProduct, handleRemoveProduct, handleCartClear }: PageNavigatorProps) => {

  return (
    <>
      <Routes >
        <Route path="/" element={<ItemListBox />} />
        <Route path="/cart" element={<CartPage cartItems={cartItems} handleAddProduct={handleAddProduct} handleRemoveProduct={handleRemoveProduct} handleCartClear={handleCartClear}/>} />
        <Route path="/fashion" element={<ItemListPageFashion itemList={itemList} />} />
        <Route path="/accessory" element={<ItemListPageAccessory itemList={itemList} />} />
        <Route path="/digital" element={<ItemListPageDigital itemList={itemList} />} />
        <Route path="/product/:id" element={<ItemDetailPage handleAddProduct={handleAddProduct}/>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>   
  )
}

export default PageNavigator 