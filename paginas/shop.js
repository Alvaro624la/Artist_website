import React from "react";

const SHOP = () => {
    return(
        <>

<body id="body" class="shop">
    <nav class="shop__nav">
        <ul class="shop__nav__ul" id="nav-menu">
            <li class="shop__nav__ul__li" id="nav-li">
                <a class="shop__nav__ul__li__a" id="nav-link" href="./home.html">Home</a>
            </li>
            <li class="shop__nav__ul__li" id="nav-li">
                <a class="shop__nav__ul__li__a" id="nav-link" href="./shop.html">Shop</a>
            </li>
            <li class="shop__nav__ul__li" id="nav-li">
                <a class="shop__nav__ul__li__a" id="nav-link" href="./about.html">About</a>
            </li>
            <li class="shop__nav__ul__li" id="nav-li">
                <a class="shop__nav__ul__li__a" id="nav-link" href="./contact.html">Contact</a>
            </li>
        </ul>
    </nav>
    <div class="shop__hamburguer-nav" id="hamburguer">
        <span class="shop__hamburguer-nav__bar"></span>
        <span class="shop__hamburguer-nav__bar"></span>
        <span class="shop__hamburguer-nav__bar"></span>
    </div>
    <main id="main" class="shop__main">
        <article class='shop__main__grid-1'>
            <section class='shop__main__grid-1__nav-cont'>
                <ul class='shop__main__grid-1__nav-cont__ul'>
                    <li class='shop__main__grid-1__nav-cont__ul__index-one__index-two' id="seeAll">See all</li>
                    <li class='shop__main__grid-1__nav-cont__ul__index-one'>Prints
                        <li class='shop__main__grid-1__nav-cont__ul__index-one__index-two' id="nature">Nature
                            {/* <!-- <li class='shop__main__grid-1__nav-cont__ul__index-one__index-two__index-three' id="animals">Animals</li>
                            <li class='shop__main__grid-1__nav-cont__ul__index-one__index-two__index-three' id="landscapes">Landscapes</li> --> */}
                        </li>
                        <li class='shop__main__grid-1__nav-cont__ul__index-one__index-two' id="sculptures">Sculptures</li>
                        <li class='shop__main__grid-1__nav-cont__ul__index-one__index-two' id="models">Models</li>
                    </li>
                    <li class='shop__main__grid-1__nav-cont__ul__index-one'>Paintings
                        <li class='shop__main__grid-1__nav-cont__ul__index-one__index-two' id="oil">Oil</li>
                    </li>
                    {/* <!-- <li class='shop__main__grid-1__nav-cont__ul__index-one--checkbox'>
                        <input type="radio" name="marco" value="Con marco" id="frame"> Frame
                    </li>
                    <li class='shop__main__grid-1__nav-cont__ul__index-one--checkbox'>
                        <input type="radio" name="marco" value="Sin marco" id="noFrame"> No frame
                    </li> --> */}
                </ul>
            </section>
            {/* <!--MODAL--> */}
            <a class="shop__main__grid-1__shop-cont__go-cart-btn" id="go-cart-btn" href="#modalCart">Cart</a>
            <div id="modalCart" class="shop__main__grid-1__shop-cont__modal-cart">
                {/* <!-- <a href="#" class="modal-cart__close"></a> --><!--for ONLY-CSS modal--> */}
                <div class="shop__main__grid-1__shop-cont__modal-cart__content">

                    <div class="shop__main__grid-1__shop-cont__modal-cart__content__flex">
                        <p class="shop__main__grid-1__shop-cont__modal-cart__content__flex__p">Cart</p>
                        <button class="shop__main__grid-1__shop-cont__modal-cart__content__flex__button-close" id="cartClose" href="#">❌</button>
                    </div>
                    
                    <div id="cartContainer" class="shop__main__grid-1__shop-cont__modal-cart__content__cartContainer">
                        {/* <!--JS CART-PRODUCTS CONTENT--> */}
                    </div>

                    <p class="shop__main__grid-1__shop-cont__modal-cart__content__priceProduct">Total amount: <span id="totalPrice">0</span>€</p>
                    <button id="cleanCart" class="shop__main__grid-1__shop-cont__modal-cart__content__button-clear">Clear cart</button>

                </div>
            </div>
            <ul class='shop__main__grid-1__shop-cont' id="shop-cont">
                {/* <!-- <li class='shop__main__grid-1__shop-cont__card' id="000001">
                    <div class='shop__main__grid-1__shop-cont__card__img-cont' id="card-img-cont">
                        <img class='shop__main__grid-1__shop-cont__card__img-cont__img'  src="../src/img/shop/monalisa.jpeg" alt="" id="card-img">
                    </div>
                    <div class='shop__main__grid-1__shop-cont__card__description-cont'>
                        <p id="name" class='shop__main__grid-1__shop-cont__card__description-cont__name'>
                            Monalisa
                        </p>
                        <p id="size" class='shop__main__grid-1__shop-cont__card__description-cont__size'>
                            120x50cm
                        </p>
                        <p id="price" class='shop__main__grid-1__shop-cont__card__description-cont__price'>
                            70€
                        </p>
                    </div>
                </li> --> */}
            </ul>
        </article>
    </main>

    <script src="../bundle.js"></script>
</body>

        </>

    );
}

export default SHOP;