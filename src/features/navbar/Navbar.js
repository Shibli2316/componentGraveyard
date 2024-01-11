import React, { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, ShoppingCartIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { Link } from 'react-router-dom'

const user = {
    name: 'Tom Cook',
    email: 'tom@example.com',
    imageUrl:
        'data:image/jpeg;base64,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',
}
const navigation = [
    { name: 'Home', href: '/', current: true },
    { name: 'About', href: '/about', current: false },
    { name: 'Testimonials', href: '/testimonials', current: false },
    { name: 'Sections', href: '/acrylic', current: false },
    { name: 'Contact', href: '/contact', current: false },
]
const userNavigation = [
    { name: 'Your Profile', href: '#' },
    { name: 'Settings', href: '#' },
    { name: 'Sign out', href: '#' },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}


function Navbar() {
    return (
        <div className="min-h-full">
            <Disclosure as="nav" className="bg-gray-800">
                {({ open }) => (
                    <>
                        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                            <div className="flex h-16 items-center justify-between">
                                <div className="flex items-center">
                                    <div className="flex-shrink-0">
                                        <Link to="/">
                                            <img
                                                className="h-8 w-8 rounded-full"
                                                src="data:image/png;base64,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"
                                                alt="Your Company"
                                            />
                                        </Link>
                                    </div>
                                    <div className="hidden md:block">
                                        <div className="ml-10 flex items-baseline space-x-4">
                                            {navigation.map((item) => (
                                                <a
                                                    key={item.name}
                                                    href={item.href}
                                                    className={classNames(
                                                        item.current
                                                            ? 'bg-gray-900 text-white'
                                                            : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                                        'rounded-md px-3 py-2 text-sm font-medium'
                                                    )}
                                                    aria-current={item.current ? 'page' : undefined}
                                                >
                                                    {item.name}
                                                </a>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                                <div className="hidden md:block">
                                    <div className="ml-4 flex items-center md:ml-6">
                                        <Link to="/cart">
                                            <button
                                                type="button"
                                                className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                                            >
                                                <span className="absolute -inset-1.5" />
                                                <span className="sr-only">View notifications</span>
                                                <ShoppingCartIcon className="h-6 w-6" aria-hidden="true" />
                                            </button>
                                        </Link>
                                        <span className="inline-flex items-center rounded-md bg-yellow-50 px-2 py-1 text-xs font-medium mb-7 -ml-3 z-10 text-yellow-800 ring-1 ring-inset ring-yellow-600/20">
                                            3
                                        </span>

                                        {/* Profile dropdown */}
                                        <Menu as="div" className="relative ml-3">
                                            <div>
                                                <Menu.Button className="relative flex max-w-xs items-center rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                                                    <span className="absolute -inset-1.5" />
                                                    <span className="sr-only">Open user menu</span>
                                                    <img className="h-8 w-8 rounded-full" src={user.imageUrl} alt="" />
                                                </Menu.Button>
                                            </div>
                                            <Transition
                                                as={Fragment}
                                                enter="transition ease-out duration-100"
                                                enterFrom="transform opacity-0 scale-95"
                                                enterTo="transform opacity-100 scale-100"
                                                leave="transition ease-in duration-75"
                                                leaveFrom="transform opacity-100 scale-100"
                                                leaveTo="transform opacity-0 scale-95"
                                            >
                                                <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                                    {userNavigation.map((item) => (
                                                        <Menu.Item key={item.name}>
                                                            {({ active }) => (
                                                                <a
                                                                    href={item.href}
                                                                    className={classNames(
                                                                        active ? 'bg-gray-100' : '',
                                                                        'block px-4 py-2 text-sm text-gray-700'
                                                                    )}
                                                                >
                                                                    {item.name}
                                                                </a>
                                                            )}
                                                        </Menu.Item>
                                                    ))}
                                                </Menu.Items>
                                            </Transition>
                                        </Menu>
                                    </div>
                                </div>
                                <div className="-mr-2 flex md:hidden">
                                    {/* Mobile menu button */}
                                    <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                                        <span className="absolute -inset-0.5" />
                                        <span className="sr-only">Open main menu</span>
                                        {open ? (
                                            <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                                        ) : (
                                            <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                                        )}
                                    </Disclosure.Button>
                                </div>
                            </div>
                        </div>

                        <Disclosure.Panel className="md:hidden">
                            <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
                                {navigation.map((item) => (
                                    <Disclosure.Button
                                        key={item.name}
                                        as="a"
                                        href={item.href}
                                        className={classNames(
                                            item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                            'block rounded-md px-3 py-2 text-base font-medium'
                                        )}
                                        aria-current={item.current ? 'page' : undefined}
                                    >
                                        {item.name}
                                    </Disclosure.Button>
                                ))}
                            </div>
                            <div className="border-t border-gray-700 pb-3 pt-4">
                                <div className="flex items-center px-5">
                                    <div className="flex-shrink-0">
                                        <img className="h-10 w-10 rounded-full" src={user.imageUrl} alt="" />
                                    </div>
                                    <div className="ml-3">
                                        <div className="text-base font-medium leading-none text-white">{user.name}</div>
                                        <div className="text-sm font-medium leading-none text-gray-400">{user.email}</div>
                                    </div>
                                    <Link to="/cart">
                                        <button
                                            type="button"
                                            className="relative ml-auto flex-shrink-0 rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                                        >
                                            <span className="absolute -inset-1.5" />
                                            <span className="sr-only">View notifications</span>
                                            <ShoppingCartIcon className="h-6 w-6" aria-hidden="true" />
                                        </button>
                                    </Link>
                                    <span className="inline-flex items-center rounded-md bg-yellow-50 px-2 py-1 text-xs font-medium mb-7 -ml-3 z-10 text-yellow-800 ring-1 ring-inset ring-yellow-600/20">
                                        3
                                    </span>
                                </div>
                                <div className="mt-3 space-y-1 px-2">
                                    {userNavigation.map((item) => (
                                        <Disclosure.Button
                                            key={item.name}
                                            as="a"
                                            href={item.href}
                                            className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
                                        >
                                            {item.name}
                                        </Disclosure.Button>
                                    ))}
                                </div>
                            </div>
                        </Disclosure.Panel>
                    </>
                )}
            </Disclosure>

            {/* <header className="bg-white shadow">
                <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900">Doodle</h1>
                </div>
            </header> */}
            {/* <main>
                <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
                    {children}
                </div>
            </main> */}
        </div>
    );
}

export default Navbar;