import { use } from "react"
import type { Dispatch } from "react"
import { toast } from "react-toastify"
import type { IusersPromise } from "../type"
import fallbackProductImage from "./products.png"

interface PapularProductsProps {
    usersPromise: Promise<IusersPromise[]>
    dispatch: Dispatch<{ type: 'add'; product: IusersPromise }>
}

const Papular_products = (props: PapularProductsProps) => {

    console.log(props.usersPromise)

    const data = use(props.usersPromise)
    const addToCart = (product: IusersPromise) => {
        try {
            if (!product.title) {
                throw new Error("Product is unavailable")
            }

            props.dispatch({ type: 'add', product })
            toast.success(`${product.title} added to cart`)
        } catch {
            toast.error("Could not add product to cart")
        }
    }

    console.log(data)

    return (
        <div className="my-20 container mx-auto">

            <h1 className="text-4xl font-bold text-center mb-2 text-green-700">
                Popular Products
            </h1>
            <div className="grid grid-cols-12 gap-4 items-stretch">

                {/* 30% */}
                <div className="relative col-span-12 overflow-hidden rounded-2xl bg-gradient-to-br from-green-800 via-green-600 to-lime-500 p-6 text-white shadow-xl sm:col-span-4">
                    <div className="absolute -right-10 -top-10 h-36 w-36 rounded-full bg-white/10" />
                    <div className="absolute -bottom-12 -left-8 h-32 w-32 rounded-full bg-lime-300/20" />

                    <div className="relative flex h-full flex-col">
                        <span className="mb-5 w-fit rounded-full bg-yellow-300 px-3 py-1 text-sm font-extrabold text-green-900">
                            LIMITED OFFER
                        </span>
                        <h2 className="text-3xl font-extrabold leading-tight">
                            Save 30% today
                        </h2>
                        <p className="mt-3 text-sm leading-6 text-green-50">
                            Pick your favorite products and enjoy an exclusive discount on your order.
                        </p>

                        <div className="mt-6 rounded-xl bg-white/15 p-4 backdrop-blur-sm">
                            <p className="text-xs font-semibold uppercase tracking-widest text-green-100">Special deal</p>
                            <p className="mt-1 text-2xl font-black">30% OFF</p>
                        </div>

                        <button className="mt-auto rounded-lg bg-white px-4 py-3 font-bold text-green-800 transition hover:bg-yellow-300 hover:text-green-950 focus:outline-none focus:ring-2 focus:ring-yellow-200">
                            Shop now
                        </button>
                    </div>

                </div>

                {/* 70% */}
                <div className="col-span-8">

                    <div className="grid grid-cols-12 gap-4 p-4">
                        {data.map((product) => {
                            return (
                                <div
                                    key={product.title}
                                    onClick={() => addToCart(product)}
                                    className="col-span-12 cursor-pointer rounded-md bg-white p-4 shadow transition hover:-translate-y-1 hover:shadow-lg sm:col-span-4"
                                >
                                    <img
                                        src={product.productsImg}
                                        alt={product.title}
                                        onError={(event) => {
                                            event.currentTarget.src = fallbackProductImage
                                        }}
                                        className="h-32 w-full object-contain"
                                    />
                                    <h2 className="font-bold">{product.title}</h2>
                                    <p>${product.price}</p>
                                    <p>Rating: {product.rating}</p>
                                    <button
                                        type="button"
                                        onClick={(event) => {
                                            event.stopPropagation()
                                            addToCart(product)
                                        }}
                                        className="mt-3 w-full rounded-lg bg-green-600 px-3 py-2 text-sm font-bold text-white transition hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-300"
                                    >
                                        Add to Cart
                                    </button>
                                </div>
                            )
                        })}
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Papular_products