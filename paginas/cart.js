import React from "react";

const CART = () => {
    return(
        <>

<body className="cart">
    <nav className="cart__nav">
        <ul className="cart__nav__ul" id="nav-menu">
            <li className="cart__nav__ul__li" id="nav-li">
                <a className="cart__nav__ul__li__a" id="nav-link" href="./home.html">Home</a>
            </li>
            <li className="cart__nav__ul__li" id="nav-li">
                <a className="cart__nav__ul__li__a" id="nav-link" href="./shop.html">Shop</a>
            </li>
            <li className="cart__nav__ul__li" id="nav-li">
                <a className="cart__nav__ul__li__a" id="nav-link" href="./about.html">About</a>
            </li>
            <li className="cart__nav__ul__li" id="nav-li">
                <a className="cart__nav__ul__li__a" id="nav-link" href="./contact.html">Contact</a>
            </li>
        </ul>
    </nav>
    <div className="cart__hamburguer-nav" id="hamburguer">
        <span className="cart__hamburguer-nav__bar"></span>
        <span className="cart__hamburguer-nav__bar"></span>
        <span className="cart__hamburguer-nav__bar"></span>
    </div>
    <main className="cart__main">
        {/* <!--CART PAGE CONTENT--> */}
        <div className="cart-container">
            <div className="cart-container__cart">
                <p>Cart</p>
                <button id="cartClose">X</button>
                <div id="cartContainer">
                    {/* <!--JS CART-PRODUCTS CONTENT--> */}
                </div>
                <p className="priceProduct">Total amount: $<span id="priceTotal">0</span></p>
                <button id="cleanCart" className="cart-container__cart__add">'Remove' cart</button>
            </div>
        </div>
    </main>

    <script src="../bundle.js"></script>
</body>

        </>

    );
}

export default CART;