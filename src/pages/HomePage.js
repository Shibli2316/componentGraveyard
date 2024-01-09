import Footer from "../features/footer/Footer";
import Home from "../features/home/Home";
import Navbar from "../features/navbar/Navbar";

function HomePage() {
    return (
        <>
        <Navbar />
            <Home />
            <Footer />
        </>
    );
}

export default HomePage;