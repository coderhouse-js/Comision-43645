import { Link, useParams } from "react-router-dom";

const CheckoutContainer = () => {
    const { productoTitle } = useParams();
    return (
        <div>
            <img src="/img/logo192.png" />

            <p>Soy el producto {productoTitle.replace(/-/g, ' ')}</p>
            <Link to={"/"}>
                <a>
                    Ir a la home
                </a>
            </Link>
        </div>
    )
}

export default CheckoutContainer;