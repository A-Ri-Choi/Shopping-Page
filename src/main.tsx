import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import ScrollToTop from './ScrollToTop'
import { RecoilRoot } from 'recoil'

// import { configureStore } from '@reduxjs/toolkit'
// import { Provider } from 'react-redux'

// import productsReducer, { productsFetch } from './features/productsSlice'

// const store = configureStore({
//   reducer: {
//     products: productsReducer,
//   },
// })

// store.dispatch(productsFetch())

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <BrowserRouter>
  <RecoilRoot>
    {/* <Provider store={store}> */}
      <ScrollToTop />
      <App />
    {/* </Provider> */}
    </RecoilRoot>
  </BrowserRouter>,
)
