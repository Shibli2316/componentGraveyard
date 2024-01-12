import { Link } from "react-router-dom"
import { useSelector, useDispatch } from 'react-redux';
import { selectAllLinearts, fetchAllLineartsAsync } from "../lineartSlice";
import { useEffect } from "react";


export default function LineArt() {
    const dispatch = useDispatch()
    const linearts = useSelector(selectAllLinearts)

    useEffect(()=>{
        dispatch(fetchAllLineartsAsync())
    },[dispatch])
    return (
        <>
            <div className="bg-slate-50">
                <div className="w-11/12 mx-auto">
                    <div className="bg-white">
                        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                            <div className="">
                                <h2 className="text-4xl font-bold tracking-tight text-gray-900 text-center ">Line Art Section</h2>
                            </div>

                            <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                                {linearts?.map((lineart) => (
                                    <Link to='/product' key={lineart.id}>
                                    <div className="group relative">
                                        <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                                            <img
                                                src={lineart.thumbnail}
                                                alt={lineart.title}
                                                className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                                            />
                                        </div>
                                        <div className="mt-4 flex justify-between">
                                            <div>
                                                <h3 className="text-sm text-gray-700">
                                                    <a href={lineart.title}>
                                                        <span aria-hidden="true" className="absolute inset-0" />
                                                        {lineart.title}
                                                    </a>
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
            </div>
        </>
    )
}
