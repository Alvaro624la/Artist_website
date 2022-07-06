import React from "react";

const ABOUT = () => {
    return(
        <>

        <body className="about">
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
            <div className="about__hamburguer-nav" id="hamburguer">
                <span className="about__hamburguer-nav__bar"></span>
                <span className="about__hamburguer-nav__bar"></span>
                <span className="about__hamburguer-nav__bar"></span>
            </div>
            <header className="about__header">
                <h2 className="about__header__title">Get to know Sarah</h2>
                <img className="about__header__img" src="../src/img/about-header.webp"></img>
            </header>
            {/* <main className="about__main">
                <p className="about__main__description-0" aria-label="biografia-sobre-artist-x">
                    Switzerland-based artist Sarah was born in England. Sarah went on to study Art and Art History, and received a BFA with Honors from Mason Gross School of the Arts at Rutgers University (Painting, 2010).
                </p>
                <h3 className="about__main__title-1">
                    &#11093; Gear
                </h3>
                <p className="about__main__description-1">
                    Canon EOS 600D with EF-S 18-55mm.
                </p>
                <h3 className="about__main__title-2">
                    &#11093; Publications
                </h3>
                <p className="about__main__description-2">
                    <a className="about__main__description-2__a" href="#1">
                        Conde Nast Traveller - May & June 19
                    </a>
                    <br>
                    <a className="about__main__description-2__a" href="#2">
                        National Geographic Traveller -  First Edition 2018
                    </a>
                    <br>
                    <a className="about__main__description-2__a" href="#3">
                        SUITCASE Magazine - The Pioneer Edition 2018
                    </a>
                    <br>
                    <a className="about__main__description-2__a" href="#4">
                        Lonely Planet - March Issue 2018
                    </a>
                </p>
                <h3 className="about__main__title-3">
                    &#11093; Collaborations
                </h3>
                <p className="about__main__description-3">
                    Sarah has worked on assignments for such clients as Silverback Films, 66 North, DJI, Icelandair, Olympus, Goretex, Easyrig, Land Rover, Suzuki, National Geographic, Air Iceland Connect, Ólafur Arnalds, Front Runner, Bioeffect.
                </p>
                <h3 className="about__main__title-4">
                    &#11093; Inspirations
                </h3>
                <p className="about__main__description-4">
                    Her works represent the landscape of the psyche: the place where the conscious and unconscious meet, and where our own human nature and outside forces collide as we grapple with our place in an ever-changing and reactive environment.  They are imaginary worlds and inner landscapes. 

                    My painting process reflects the constant push and pull between order and chaos, darkness and light, and the delusion of control.
                </p>
            </main> */}

            <script src="../bundle.js"></script>
        </body>

        </>

    );
}

export default ABOUT;