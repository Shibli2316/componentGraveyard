import { Link } from "react-router-dom"


const acrylics = [
    {
        id: 1,
        name: 'Basic Doodle',
        href: '/product',
        imageSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQw7RF-JLDTtMIV3Lw1UGZPwUI9FdHujlEfAA&usqp=CAU',
        imageAlt: "Random Doodle.",
        price: '$35',
        color: 'Blue',
    },
    {
        id: 2,
        name: 'Basic Tee',
        href: '#',
        imageSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQw7RF-JLDTtMIV3Lw1UGZPwUI9FdHujlEfAA&usqp=CAU',
        imageAlt: "Random Doodle.",
        price: '$35',
        color: 'Black',
    },
    {
        id: 3,
        name: 'Basic Tee',
        href: '#',
        imageSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQw7RF-JLDTtMIV3Lw1UGZPwUI9FdHujlEfAA&usqp=CAU',
        imageAlt: "Random Doodle.",
        price: '$35',
        color: 'Black',
    },
    {
        id: 4,
        name: 'Basic Tee',
        href: '#',
        imageSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQw7RF-JLDTtMIV3Lw1UGZPwUI9FdHujlEfAA&usqp=CAU',
        imageAlt: "Random Doodle.",
        price: '$35',
        color: 'Black',
    },
    // More products...
]
const doodles = [
    {
        id: 5,
        name: 'Basic Tee',
        href: '/product',
        imageSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQw7RF-JLDTtMIV3Lw1UGZPwUI9FdHujlEfAA&usqp=CAU',
        imageAlt: "Random Doodle.",
        price: '$35',
        color: 'Black',
    },
    {
        id: 6,
        name: 'Basic Tee',
        href: '#',
        imageSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQw7RF-JLDTtMIV3Lw1UGZPwUI9FdHujlEfAA&usqp=CAU',
        imageAlt: "Random Doodle.",
        price: '$35',
        color: 'Black',
    },
    {
        id: 7,
        name: 'Basic Tee',
        href: '#',
        imageSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQw7RF-JLDTtMIV3Lw1UGZPwUI9FdHujlEfAA&usqp=CAU',
        imageAlt: "Random Doodle.",
        price: '$35',
        color: 'Black',
    },
    {
        id: 8,
        name: 'Basic Tee',
        href: '#',
        imageSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQw7RF-JLDTtMIV3Lw1UGZPwUI9FdHujlEfAA&usqp=CAU',
        imageAlt: "Random Doodle.",
        price: '$35',
        color: 'Black',
    },
    // More products...
]
const linearts = [
    {
        id: 9,
        name: 'Basic Tee',
        href: '/product',
        imageSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQw7RF-JLDTtMIV3Lw1UGZPwUI9FdHujlEfAA&usqp=CAU',
        imageAlt: "Random Doodle.",
        price: '$35',
        color: 'Black',
    },
    {
        id: 10,
        name: 'Basic Tee',
        href: '#',
        imageSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQw7RF-JLDTtMIV3Lw1UGZPwUI9FdHujlEfAA&usqp=CAU',
        imageAlt: "Random Doodle.",
        price: '$35',
        color: 'Black',
    },
    {
        id: 11,
        name: 'Basic Tee',
        href: '#',
        imageSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQw7RF-JLDTtMIV3Lw1UGZPwUI9FdHujlEfAA&usqp=CAU',
        imageAlt: "Random Doodle.",
        price: '$35',
        color: 'Black',
    },
    {
        id: 12,
        name: 'Basic Tee',
        href: '#',
        imageSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQw7RF-JLDTtMIV3Lw1UGZPwUI9FdHujlEfAA&usqp=CAU',
        imageAlt: "Random Doodle.",
        price: '$35',
        color: 'Black',
    },
    // More products...
]
const murals = [
    {
        id: 13,
        name: 'Basic Tee',
        href: '/product',
        imageSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQw7RF-JLDTtMIV3Lw1UGZPwUI9FdHujlEfAA&usqp=CAU',
        imageAlt: "Random Doodle.",
        price: '$35',
        color: 'Black',
    },
    {
        id: 14,
        name: 'Basic Tee',
        href: '#',
        imageSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQw7RF-JLDTtMIV3Lw1UGZPwUI9FdHujlEfAA&usqp=CAU',
        imageAlt: "Random Doodle.",
        price: '$35',
        color: 'Black',
    },
    {
        id: 15,
        name: 'Basic Tee',
        href: '#',
        imageSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQw7RF-JLDTtMIV3Lw1UGZPwUI9FdHujlEfAA&usqp=CAU',
        imageAlt: "Random Doodle.",
        price: '$35',
        color: 'Black',
    },
    {
        id: 16,
        name: 'Basic Tee',
        href: '#',
        imageSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQw7RF-JLDTtMIV3Lw1UGZPwUI9FdHujlEfAA&usqp=CAU',
        imageAlt: "Random Doodle.",
        price: '$35',
        color: 'Black',
    },
    // More products...
]

export default function Home() {
    return (
        <>

            <div className="relative h-screen w-full">
                <img src="https://images.unsplash.com/photo-1494783367193-149034c05e8f" alt="Background" className="absolute inset-0 w-full h-full object-cover filter blur-sm" />
                <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <h1 className="text-4xl text-white font-bold">Hello, World!</h1>
                    <p className="text-xl text-white mt-4">Doodles incoming</p>
                </div>
            </div>



            <div className="w-11/12 mx-auto mt-2">
                <div className="bg-white rounded-lg">
                    <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                        <div className="grid grid-cols-8">
                            <h2 className="text-4xl font-bold tracking-tight text-gray-900 col-span-4">Acrylics</h2>
                            <div className="justify-items-end col-start-8 grid py-3">
                                <Link to="/acrylic" className="">
                                    see more
                                </Link>
                            </div>
                        </div>

                        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                            {acrylics.map((acrylic) => (
                                <Link to={acrylic.href} key={acrylic.id}>
                                    <div className="group relative">

                                        <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                                            <img
                                                src={acrylic.imageSrc}
                                                alt={acrylic.imageAlt}
                                                className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                                            />
                                        </div>
                                        <div className="mt-4 flex justify-between">
                                            <div>
                                                <h3 className="text-sm text-gray-700">

                                                    <span aria-hidden="true" className="absolute inset-0" />
                                                    {acrylic.name}

                                                </h3>
                                            </div>
                                            <p className="text-sm font-medium text-gray-900">{acrylic.price}</p>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>


            <div className="w-11/12 mx-auto mt-2">
                <div className="bg-stone-50 ">
                    <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                        <div className="grid grid-cols-8">
                            <h2 className="text-4xl font-bold tracking-tight text-gray-900 col-span-4">Doodles</h2>
                            <div className="justify-items-end col-start-8 grid py-3">
                                <Link to="/doodle" className="">
                                    see more
                                </Link>
                            </div>
                        </div>

                        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                            {doodles.map((doodle) => (
                                <Link to={doodle.href} key={doodle.id}>
                                    <div className="group relative">
                                        <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                                            <img
                                                src={doodle.imageSrc}
                                                alt={doodle.imageAlt}
                                                className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                                            />
                                        </div>
                                        <div className="mt-4 flex justify-between">
                                            <div>
                                                <h3 className="text-sm text-gray-700">

                                                    <span aria-hidden="true" className="absolute inset-0" />
                                                    {doodle.name}

                                                </h3>
                                            </div>
                                            <p className="text-sm font-medium text-gray-900">{doodle.price}</p>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>


            <div className="w-11/12 mx-auto mt-2">
                <div className="bg-white rounded-lg">
                    <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                        <div className="grid grid-cols-8">
                            <h2 className="text-4xl font-bold tracking-tight text-gray-900 col-span-4">Line Art</h2>
                            <div className="justify-items-end col-start-8 grid py-3">
                                <Link to="/lineart" className="">
                                    see more
                                </Link>
                            </div>
                        </div>

                        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                            {linearts.map((lineart) => (
                                <Link to={lineart.href} key={lineart.id}>
                                    <div className="group relative">
                                        <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                                            <img
                                                src={lineart.imageSrc}
                                                alt={lineart.imageAlt}
                                                className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                                            />
                                        </div>
                                        <div className="mt-4 flex justify-between">
                                            <div>
                                                <h3 className="text-sm text-gray-700">

                                                    <span aria-hidden="true" className="absolute inset-0" />
                                                    {lineart.name}

                                                </h3>
                                            </div>
                                            <p className="text-sm font-medium text-gray-900">{lineart.price}</p>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>


            <div className="w-11/12 mx-auto mt-2 mb-4">
                <div className="bg-stone-50">
                    <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                        <div className="grid grid-cols-8">
                            <h2 className="text-4xl font-bold tracking-tight text-gray-900 col-span-4">Murals</h2>
                            <div className="justify-items-end col-start-8 grid py-3">
                                <Link to="/murals" className="">
                                    see more
                                </Link>
                            </div>
                        </div>

                        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                            {murals.map((mural) => (
                                <Link to={mural.href} key={mural.id}>
                                    <div className="group relative">
                                        <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                                            <img
                                                src={mural.imageSrc}
                                                alt={mural.imageAlt}
                                                className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                                            />
                                        </div>
                                        <div className="mt-4 flex justify-between">
                                            <div>
                                                <h3 className="text-sm text-gray-700">

                                                    <span aria-hidden="true" className="absolute inset-0" />
                                                    {mural.name}

                                                </h3>
                                            </div>
                                            <p className="text-sm font-medium text-gray-900">{mural.price}</p>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
