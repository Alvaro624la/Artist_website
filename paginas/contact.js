import React from "react";

const CONTACT = () => {
    return(
        <>

<body className="contact">
    <nav className="shop__nav">
        <ul className="shop__nav__ul" id="nav-menu">
            <li className="shop__nav__ul__li" id="nav-li">
                <a className="shop__nav__ul__li__a" id="nav-link" href="./home.html">Home</a>
            </li>
            <li className="shop__nav__ul__li" id="nav-li">
                <a className="shop__nav__ul__li__a" id="nav-link" href="./shop.html">Shop</a>
            </li>
            <li className="shop__nav__ul__li" id="nav-li">
                <a className="shop__nav__ul__li__a" id="nav-link" href="./about.html">About</a>
            </li>
            <li className="shop__nav__ul__li" id="nav-li">
                <a className="shop__nav__ul__li__a" id="nav-link" href="./contact.html">Contact</a>
            </li>
        </ul>
    </nav>
    <div className="contact__hamburguer-nav" id="hamburguer">
        <span className="contact__hamburguer-nav__bar"></span>
        <span className="contact__hamburguer-nav__bar"></span>
        <span className="contact__hamburguer-nav__bar"></span>
    </div>
    <main className="contact__main">
        <h2 className="contact__main__title">Direct to Sarah</h2>
        <div className="contact__main__mail-cont" aria-label="enviar-email">
            <a className="contact__main__mail-cont__btn"  href="mailto: alvarodepradotrabajo@gmail.com">Send an e-mail</a>
        </div>
        <div className="contact__main__tlf-cont" aria-label="llamar-telefono">
            <a className="contact__main__tlf-cont__btn" href="tel: 628251720">
                <img className="contact__main__tlf-cont__btn__img" src="../src/img/phone.svg"></img>
            </a>
            <p className="contact__main__tlf-cont__numero">628 25 17 20</p>
        </div>
        <div className="contact__main__redes-cont" aria-label="redes-sociales">
            <a className="contact__main__redes-cont__instagram-cont" href="https://www.instagram.com/#/"  target="_blank">
                <img className="contact__main__redes-cont__instagram-cont__img" src="../src/img/instagram.svg"></img>
                <p className="contact__main__redes-cont__instagram-cont__p">@Sara-h66</p>
            </a>
            <a className="contact__main__redes-cont__facebook-cont" href="https://www.facebook.com/#" target="_blank">
                <img className="contact__main__redes-cont__facebook-cont__img" src="../src/img/facebook.svg"></img>
                <p className="contact__main__redes-cont__facebook-cont__p">@SarahSil</p>
            </a>
        </div>
    </main>

    <script src="../bundle.js"></script>
</body>

        </>

    );
}

export default CONTACT;