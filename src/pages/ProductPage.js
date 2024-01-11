import Footer from "../features/footer/Footer";
import Navbar from "../features/navbar/Navbar";
import Product from "../features/product/Product";
import TestingPage from "./TestingPage";

function ProductPage() {
    return (
        <>
        <Navbar/>
            <Product />
            <Footer />
        </>
    );
}

export default ProductPage;