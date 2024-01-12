import { Link } from "react-router-dom";

const products = [
    {
        id: 1,
        name: 'Throwback Hip Bag',
        href: '#',
        color: 'Salmon',
        price: '$90.00',
        quantity: 1,
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-01.jpg',
        imageAlt: 'Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt.',
    },
    {
        id: 2,
        name: 'Medium Stuff Satchel',
        href: '#',
        color: 'Blue',
        price: '$32.00',
        quantity: 1,
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-02.jpg',
        imageAlt:
            'Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch.',
    },
    // More products...
]


function Cart() {
    return (
        <>
            <div className="bg-white h-screen py-8">
                <div className="container mx-auto px-4">
                    <h1 className="text-2xl font-semibold mb-4">Shopping Cart</h1>
                    <div className="flex flex-col md:flex-row gap-4">
                        <div className="md:w-3/4">
                            <div className="bg-white rounded-lg shadow-md p-6 mb-4">
                                <table className="w-full">
                                    <thead>
                                        <tr>
                                            <th className="text-left font-semibold">Product</th>
                                            <th className="text-left font-semibold">Price</th>
                                            <th className="text-left font-semibold">Quantity</th>
                                            <th className="text-left font-semibold">Total</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                    {products.map((product) => (
                                        <tr>
                                            <td className="py-4">
                                                <div className="flex items-center">
                                                    <img className="h-16 w-16 mr-4" src={product.imageSrc} alt={product.imageAlt} />
                                                    <span className="font-semibold">{product.name}</span>
                                                </div>
                                            </td>
                                            <td className="py-4">{product.price}</td>
                                            <td className="py-4">
                                                <div className="flex items-center">

                                                    <select className="rounded-lg">
                                                        <option value="1">1</option>
                                                        <option value="2">2</option>
                                                    </select>

                                                </div>
                                            </td>
                                            <td className="py-4">{product.price}</td>
                                        </tr>
))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className="md:w-1/4">
                            <div className="bg-white rounded-lg shadow-md p-6">
                                <h2 className="text-lg font-semibold mb-4">Summary</h2>
                                <div className="flex justify-between mb-2">
                                    <span>Subtotal</span>
                                    <span>$19.99</span>
                                </div>
                                <div className="flex justify-between mb-2">
                                    <span>Taxes</span>
                                    <span>$1.99</span>
                                </div>
                                <div className="flex justify-between mb-2">
                                    <span>Shipping</span>
                                    <span>$0.00</span>
                                </div>
                                <hr className="my-2" />
                                <div className="flex justify-between mb-2">
                                    <span className="font-semibold">Total</span>
                                    <span className="font-semibold">$21.98</span>
                                </div>
                                <Link to="/checkout">
                                    <button className="bg-blue-500 text-white py-2 px-4 rounded-lg mt-4 w-full">Checkout</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Cart;