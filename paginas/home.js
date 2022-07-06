import React from "react";

const HOME = () => {
    return(
        <>
        <body class="home">
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
    <div class="home__hamburguer-nav" id="hamburguer">
        <span class="home__hamburguer-nav__bar"></span>
        <span class="home__hamburguer-nav__bar"></span>
        <span class="home__hamburguer-nav__bar"></span>
    </div>
    <main class="home__main">
        {/*
        HTML, CSS, JS PURE Carousel
        */}
        <div class="home__main__carousel-cont">
            <a class="home__main__carousel-cont__link" id="nav-link" href="./shop.html">See more at shop</a>
            <div class="home__main__carousel-cont__slider" id="slider">
                <div class="home__main__carousel-cont__slider__section" id="slider-section">
                    <img className="home__main__carousel-cont__slider__section__img" src="../src/img/carousel/11.jpeg" alt=""></img>
                </div>
                <div class="home__main__carousel-cont__slider__section" id="slider-section">
                    <img className="home__main__carousel-cont__slider__section__img" src="../src/img/carousel/1.jpeg" alt=""></img>
                </div>
                <div class="home__main__carousel-cont__slider__section" id="slider-section">
                    <img className="home__main__carousel-cont__slider__section__img" src="../src/img/carousel/2.jpeg" alt=""></img>
                </div>
                <div class="home__main__carousel-cont__slider__section" id="slider-section">
                    <img className="home__main__carousel-cont__slider__section__img" src="../src/img/carousel/3.jpeg" alt=""></img>
                </div>
                <div class="home__main__carousel-cont__slider__section" id="slider-section">
                    <img className="home__main__carousel-cont__slider__section__img" src="../src/img/carousel/4.jpeg" alt=""></img>
                </div>
                <div class="home__main__carousel-cont__slider__section" id="slider-section">
                    <img className="home__main__carousel-cont__slider__section__img" src="../src/img/carousel/5.jpeg" alt=""></img>
                </div>
                <div class="home__main__carousel-cont__slider__section" id="slider-section">
                    <img className="home__main__carousel-cont__slider__section__img" src="../src/img/carousel/6.jpeg" alt=""></img>
                </div>
                <div class="home__main__carousel-cont__slider__section" id="slider-section">
                    <img className="home__main__carousel-cont__slider__section__img" src="../src/img/carousel/7.jpeg" alt=""></img>
                </div>
                <div class="home__main__carousel-cont__slider__section" id="slider-section">
                    <img className="home__main__carousel-cont__slider__section__img" src="../src/img/carousel/8.jpeg" alt=""></img>
                </div>
                <div class="home__main__carousel-cont__slider__section" id="slider-section">
                    <img className="home__main__carousel-cont__slider__section__img" src="../src/img/carousel/9.jpeg" alt=""></img>
                </div>
                <div class="home__main__carousel-cont__slider__section" id="slider-section">
                    <img className="home__main__carousel-cont__slider__section__img" src="../src/img/carousel/10.jpeg" alt=""></img>
                </div>
            </div>
            <div class="home__main__carousel-cont__btn home__main__carousel-cont__btn--right" id="btn-right">&#62;</div>
            <div class="home__main__carousel-cont__btn home__main__carousel-cont__btn--left" id="btn-left">&#60;</div>
        </div>
    </main>
    {/*
    Option 1: Bootstrap Bundle with Popper
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
    */}
    <script src="../bundle.js"></script>
</body>

        </>

    );
}

export default HOME;