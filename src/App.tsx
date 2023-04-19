import React, { useEffect, useState } from 'react'
import Header from './components/Header'
import './App.css'
import Footer from './components/Footer'
import PageNavigator from './components/PageNavigator'
import { ShopData, ShopDataType } from './components/data'



interface CartItemProps {
  id: number
  cartItems: {
    id: number
    title: string
    quantity: number
  }[]
}

function App() {
  const [itemList, setItemList] = useState<ShopDataType | any>([])

  useEffect(() => {
    (async () => {
      const itemList = await ShopData()
      setItemList(itemList)
    })()
  }, [])

  const [cartItems, setCartItems] = useState<CartItemProps[] | any>([])

  const handleAddProduct = (product: CartItemProps) => {
    const ProductExist = cartItems.find((item: { id: number }) => item.id === product.id)
    if (ProductExist) {
      setCartItems(
        cartItems.map((item: { id: number }) =>
          item.id === product.id
            ? { ...ProductExist, quantity: ProductExist.quantity + 1 }
            : item
        )
      )
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }])
    }
  }

  const handleRemoveProduct = (product: { id: number }) => {
    const ProductExist = cartItems.find((item: { id: number }) => item.id === product.id)
    if(ProductExist.quantity === 1){
      setCartItems(cartItems.filter((item: { id: number }) => item.id !== product.id))
    } else {
      setCartItems(
        cartItems.map((item: { id: number }) => item.id === product.id ? {...ProductExist, quantity: ProductExist.quantity -1}
        : item
        )
      )
    }
  }

  const handleCartClear = () => {
    setCartItems([])
  }




  return (
    <>
      <Header cartItems={cartItems} itemList={itemList} placeholder="검색"/>
      <PageNavigator itemList={itemList} cartItems={cartItems} handleAddProduct={handleAddProduct} setCartItems={setCartItems} handleRemoveProduct={handleRemoveProduct} handleCartClear={handleCartClear}/>
      {/* <Routes>
        <Route path="/" element={<Section />} />
        <Route path="/fashion" element={<ItemListPage />} />
      </Routes> */}
      {/* <Main /> */}
      {/* <ItemDetailPage /> */}
      <Footer />
    </>
  )
}

export default App
