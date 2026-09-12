import { Suspense, useReducer } from 'react'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import './App.css'
import Banner from './component/banner'
import Cart from './component/cart'
import Footer from './component/footer'
import Nav from './component/nav'
import Papular_products from './component/papular_products'
import Servaices from './component/servaices'
import type { ApiProduct, IusersPromise } from './type'



interface ApiProductsResponse {
  products: ApiProduct[]
}

type CartAction = {
  type: 'add' | 'remove'
  product?: IusersPromise
  index?: number
}

const usersFace = async (): Promise<IusersPromise[]> => {
  const responce = await fetch("https://dummyjson.com/products?limit=9")
  const data: ApiProductsResponse = await responce.json()

  return data.products.map((product) => ({
    productsImg: product.images[0],
    title: product.title,
    price: product.price,
    rating: product.rating,
  }))
}

const usersPromise = usersFace()

function App() {
  const [cartItems, dispatch] = useReducer(
    (items: IusersPromise[], action: CartAction) => {
      if (action.type === 'add') {
        return action.product ? [...items, action.product] : items
      }

      if (action.type === 'remove' && action.index !== undefined) {
        return items.filter((_, index) => index !== action.index)
      }

      return items
    },
    [],
  )

  return (
    <>
      <Nav cartCount={cartItems.length} />
      <Banner />
      <Servaices />
      <Cart
        items={cartItems}
        onRemove={(index) => dispatch({ type: 'remove', index })}
      />
      <Suspense
        fallback={
          <p className="my-20 text-center text-lg font-semibold text-green-700">
            Loading products...
          </p>
        }
      >
        <Papular_products usersPromise={usersPromise} dispatch={dispatch} />
      </Suspense>
      <Footer />
      <ToastContainer position="top-right" autoClose={2000} />
    </>
  )
}

export default App