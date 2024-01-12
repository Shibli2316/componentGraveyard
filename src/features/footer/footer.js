import { Link } from "react-router-dom";


function Footer() {
    return (
        <>
            <footer className="mx-auto w-full relative text-center bg-zinc-300 text-black">
                <div className="px-6 py-8 md:py-14 xl:pt-20 xl:pb-12">
                    <h2 className="font-bold text-3xl xl:text-4xl leading-snug">
                        Would you like to work along?
                    </h2>
                    <Link className="mt-8 xl:mt-12 px-12 py-5 text-lg font-medium leading-tight inline-block bg-gray-800 rounded-full shadow-xl border border-transparent hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-sky-999 focus:bg-zinc-500 text-white"
                        to="/contact">Collaborate</Link>
                    <div className="mt-14 xl:mt-20">
                        <nav className="flex flex-wrap justify-center text-lg font-medium">
                            <div className="px-5 py-2"><Link to="/contact">Contact</Link></div>
                            <div className="px-5 py-2"><Link to="/home">Products</Link></div>
                            <div className="px-5 py-2"><Link to="/about">About</Link></div>
                            <div className="px-5 py-2"><Link to="/contact">Facebook</Link></div>
                            <div className="px-5 py-2"><Link to="/contact">Instagram</Link></div>
                        </nav>
                        <p className="mt-7 text-base">© 2024, pandoraBytes</p>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default Footer;