import React from "react";
import tea from "../images/tea.webp";
import coffee from "../images/coffee.avif";
import Elanji from "../images/Elanji.jpeg";
import kaypola from "../images/kaypola.jpeg";
import ullivada from "../images/ullivada.webp";
import tenderCoconut from "../images/tenderCoconut.jpg";
import bananaHalwa from "../images/bananaHalwa.jpg";

function OrderOnline() {
    return (
        <React.Fragment>
            <section id="beverages">
                <header>
                    <h1>Beverages</h1>
                </header>
                <section id="tea">
                    <h1>Tea</h1>
                    <img src={tea} alt="tea" />
                    <h2>Rs. 15.00 </h2>
                </section>
                <section id="coffee">   
                    <h1>Coffee</h1>
                    <img src={coffee} alt="coffee" />
                    <h2>Rs. 20.00 </h2>
                </section>
            </section>
            <section id="snacks">
                <header>
                    <h1>Snacks</h1>
                </header>
                <section id="elanji">
                    <h1>Elanji</h1>
                    <img src={Elanji} alt="elanji" />
                    <h2>Rs. 30.00 </h2>
                </section>
                <section id="kaypola">
                    <h1>Kaypola</h1>
                    <img src={kaypola} alt="kaypola" />
                    <h2>Rs. 40.00 </h2>
                </section>
                <section id="ullivada">
                    <h1>Ullivada</h1>
                    <img src={ullivada} alt="ullivada" />
                    <h2>Rs. 50.00 </h2>
                </section>
            </section>
            <section id="desserts">
                <header>
                    <h1>Desserts</h1>
                </header>
                <section id="tenderCocnut">
                    <h1>Tender Coconut Pudding</h1>
                    <img src={tenderCoconut} alt="tenderCoconut" />
                    <h2>Rs. 40.00 </h2>
                </section>
                <section id="banana Halwa">
                    <h1>Banana Halwa</h1>
                    <img src={bananaHalwa} alt="bananaHalwa" />
                    <h2>Rs. 50.00 </h2>
                </section>
            </section>
        </React.Fragment>
    );
  }
export { OrderOnline };