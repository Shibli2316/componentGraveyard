import NotFound from "../features/notfound/NotFound";
import Navbar from "../features/navbar/Navbar";

function NotFoundPage() {
    return (
        <>
            <Navbar>
                <NotFound />
            </Navbar>
        </>
    );
}

export default NotFoundPage;