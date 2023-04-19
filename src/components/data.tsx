import axios from "axios"

const remote = axios.create()

export interface ShopDataType {
  id: number,
  title: string,
  price: number,
  description: string,
  category: string,
  image: string,
}

export interface ShopDataDetailType {
  id: number,
  title: string,
  price: number,
  description: string,
  category: string,
  image: string,
  rating: {
    rate: number,
    count: number
  }
}

export const ShopData = async () => {
  const defaultUrl = 'https://fakestoreapi.com/products'

  const response = await remote.get<ShopDataType>(defaultUrl)

  return response.data
}

export const ShopDetailData = async (id: string | number) => {
  const defaultUrl = `https://fakestoreapi.com/products/${id}`

  const result = await remote.get<ShopDataDetailType>(defaultUrl)
  const dataResult = result.data
  console.log(dataResult)

  return {
    id: dataResult.id,
    title: dataResult.title,
    price: dataResult.price,
    description: dataResult.description,
    category: dataResult.category,
    image: dataResult.image,
    rating: {
      rate: dataResult.rating.rate,
      count: dataResult.rating.count
    }
  } 
}