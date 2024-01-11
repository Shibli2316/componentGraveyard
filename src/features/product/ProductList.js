import { Link } from "react-router-dom"

const products = [
    {
        id: 1,
        name: 'Basic Tee',
        href: '#',
        imageSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQw7RF-JLDTtMIV3Lw1UGZPwUI9FdHujlEfAA&usqp=CAU',
        imageAlt: "Random Doodle",
        price: '$35',
        color: 'Black',
    },
    {
        id: 2,
        name: 'Basic Tee',
        href: '#',
        imageSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQw7RF-JLDTtMIV3Lw1UGZPwUI9FdHujlEfAA&usqp=CAU',
        imageAlt: "Random Doodle",
        price: '$35',
        color: 'Black',
    },
    {
        id: 3,
        name: 'Basic Tee',
        href: '#',
        imageSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQw7RF-JLDTtMIV3Lw1UGZPwUI9FdHujlEfAA&usqp=CAU',
        imageAlt: "Random Doodle",
        price: '$35',
        color: 'Black',
    },
    {
        id: 4,
        name: 'Basic Tee',
        href: '#',
        imageSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQw7RF-JLDTtMIV3Lw1UGZPwUI9FdHujlEfAA&usqp=CAU',
        imageAlt: "Random Doodle",
        price: '$35',
        color: 'Black',
    },
    // More products...
]

export default function ProductList() {
    return (
        <>
            <div className="w-11/12 mx-auto">
                <div className="bg-stone-50 rounded-lg">
                    <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                        <div className="grid grid-cols-8">
                            <h2 className="text-4xl font-bold tracking-tight text-gray-900 col-span-4">Customers also purchased</h2>
                            <div className="justify-items-end col-start-8 grid py-3">
                                <Link to="/" className="">
                                    see more
                                </Link>
                            </div>
                        </div>

                        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                            {products.map((product) => (
                                <div key={product.id} className="group relative">
                                    <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                                        <img
                                            src={product.imageSrc}
                                            alt={product.imageAlt}
                                            className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                                        />
                                    </div>
                                    <div className="mt-4 flex justify-between">
                                        <div>
                                            <h3 className="text-sm text-gray-700">
                                                <a href={product.href}>
                                                    <span aria-hidden="true" className="absolute inset-0" />
                                                    {product.name}
                                                </a>
                                            </h3>
                                            <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                                        </div>
                                        <p className="text-sm font-medium text-gray-900">{product.price}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
