import type { IusersPromise } from "../type"
import fallbackProductImage from "./products.png"
import { toast } from "react-toastify"

interface CartProps {
    items: IusersPromise[]
    onRemove: (index: number) => void
}

const Cart = ({ items, onRemove }: CartProps) => {
    const totalPrice = items.reduce((total, product) => total + product.price, 0)

    return (
        <section className="container mx-auto my-12 px-4">
            <h2 className="mb-5 text-center text-3xl font-bold text-green-700">
                Added Products
            </h2>

            {items.length === 0 ? (
                <div className="rounded-md border border-dashed border-gray-300 p-8 text-center text-gray-500">
                    No products added yet
                </div>
            ) : (
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    {items.map((product, index) => (
                        <article
                            key={`${product.title}-${index}`}
                            className="rounded-md bg-white p-4 shadow-md"
                        >
                            <img
                                src={product.productsImg}
                                alt={product.title}
                                onError={(event) => {
                                    event.currentTarget.src = fallbackProductImage
                                }}
                                className="h-32 w-full object-contain"
                            />
                            <div className="mt-3 flex items-start justify-between gap-3">
                                <h3 className="font-bold">{product.title}</h3>
                                <p className="shrink-0 rounded-full bg-green-100 px-3 py-1 font-bold text-green-700">
                                    ${product.price.toFixed(2)}
                                </p>
                            </div>
                            <button
                                type="button"
                                onClick={() => {
                                    onRemove(index)
                                    toast.success(`${product.title} order cancelled`)
                                }}
                                className="mt-4 w-full rounded-lg border border-red-200 px-3 py-2 text-sm font-bold text-red-600 transition hover:bg-red-50 focus:outline-none focus:ring-2 focus:ring-red-300"
                            >
                                Cancel Order
                            </button>
                        </article>
                    ))}
                </div>
            )}

            <div className="mt-6 flex items-center justify-between rounded-md border border-green-200 bg-green-50 p-5 shadow-sm">
                <div>
                    <p className="text-sm font-medium text-gray-500">Cart Summary</p>
                    <p className="font-semibold text-gray-700">{items.length} product{items.length === 1 ? "" : "s"} added</p>
                </div>
                <div className="text-right">
                    <p className="text-sm font-medium text-gray-500">Total Price</p>
                    <p className="text-2xl font-bold text-green-700">${totalPrice.toFixed(2)}</p>
                </div>
            </div>
        </section>
    )
}

export default Cart
