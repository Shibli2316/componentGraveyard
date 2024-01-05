function Product() {
    return (
        <>
            <div className="w-11/12 mx-auto md:my-2">
                <div className="grid lg:grid-cols-2 gap-4 md:grid-cols-1">
                    <div className="border-solid border-red-500 rounded-lg border-2 h-80">Hello</div>
                    <div className="grid lg:gap-1 md:gap-3">
                        <div className="h-fit border-solid border-red-500 rounded-lg border-2">
                            Hi there
                        </div>
                        <div className="h-fit border-solid border-red-500 rounded-lg border-2">
                            Hi there
                        </div>
                        <div className="h-fit border-solid border-red-500 rounded-lg border-2">
                            Hi there
                        </div>
                        <div className="h-fit border-solid border-red-500 rounded-lg border-2">
                            Hi there
                        </div>
                        <div className="h-fit border-solid border-red-500 rounded-lg border-2">
                            Hi there
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Product;