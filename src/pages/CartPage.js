import Cart from "../features/cart/Cart";
import Footer from "../features/footer/Footer";
import Navbar from "../features/navbar/Navbar";

function CartPage() {
    return (
        <>
        <Navbar />
            <Cart />
            <Footer />
        </>
    );
}

export default CartPage;