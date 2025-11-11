import React, { useState } from "react";
import tea from "../images/tea.webp";
import coffee from "../images/coffee.avif";
import Elanji from "../images/Elanji.jpeg";
import kaypola from "../images/kaypola.jpeg";
import ullivada from "../images/ullivada.webp";
import tenderCoconut from "../images/tenderCoconut.jpg";
import bananaHalwa from "../images/bananaHalwa.jpg";


function QuantityButton(props){
    return (
        <React.Fragment >
            <section id="quantity">
                <button onClick={() => props.handleAdd(props.item)}>Add</button>
                <input type="number" placeholder="Quantity" value={props.quantity}/>
                <button onClick={() => props.handleRemove(props.item)}>Remove</button>
            </section>
        </React.Fragment>
        
    )
}

function OrderOnline() {
    const [quantity, setQuantity] = useState({
        tea: 0,
        coffee: 0,
        elanji: 0,
        kaypola: 0,
        ullivada: 0,
        tenderCoconut: 0,
        bananaHalwa: 0,
        total: 0
    });
    const handleAdd = (item) => {
        setQuantity({...quantity,  [item]: quantity[item] + 1, total: quantity.total + 1});
    }
    const handleRemove = (item) => {
        if(quantity[item] > 0){
            setQuantity({...quantity, [item]: quantity[item] - 1, total: quantity.total - 1});
        }
    }
    return (
        <React.Fragment>
            <section id="Menu ">
                <section id="beverages">
                    <header>
                        <h1>Beverages</h1>
                    </header>
                    <section id="beverageList">
                        <section id="tea">
                            <h1>Tea</h1>
                            <img src={tea} alt="tea" />
                            <h2>Rs. 15.00 </h2>
                            <QuantityButton handleAdd={handleAdd} handleRemove={handleRemove} quantity={quantity.tea} item="tea" />
                        </section>
                        <section id="coffee">   
                            <h1>Coffee</h1>
                            <img src={coffee} alt="coffee" />
                            <h2>Rs. 20.00 </h2>
                            <QuantityButton handleAdd={handleAdd} handleRemove={handleRemove} quantity={quantity.coffee} item="coffee" />
                    </section>
                    </section>
                </section>
                <section id="snacks">
                    <header>
                        <h1>Snacks</h1>
                    </header>
                    <section id="snacksList">
                        <section id="elanji">
                            <h1>Elanji</h1>
                            <img src={Elanji} alt="elanji" />
                            <h2>Rs. 30.00 </h2>
                            <QuantityButton handleAdd={handleAdd} handleRemove={handleRemove} quantity={quantity.elanji} item="elanji" />
                        </section>
                        <section id="kaypola">
                            <h1>Kaypola</h1>
                            <img src={kaypola} alt="kaypola" />
                            <h2>Rs. 40.00 </h2>
                            <QuantityButton handleAdd={handleAdd} handleRemove={handleRemove} quantity={quantity.kaypola} item="kaypola" />
                        </section>
                        <section id="ullivada">
                            <h1>Ullivada</h1>
                            <img src={ullivada} alt="ullivada" />
                            <h2>Rs. 50.00 </h2>
                            <QuantityButton handleAdd={handleAdd} handleRemove={handleRemove} quantity={quantity.ullivada} item="ullivada" />
                        </section>
                    </section>
                </section>
                <section id="desserts">
                    <header>
                        <h1>Desserts</h1>
                    </header>
                    <section id="dessertsList">
                        <section id="tenderCocnut">
                            <h1>Tender Coconut Pudding</h1>
                            <img src={tenderCoconut} alt="tenderCoconut" />
                            <h2>Rs. 40.00 </h2>
                            <QuantityButton handleAdd={handleAdd} handleRemove={handleRemove} quantity={quantity.tenderCoconut} item="tenderCoconut" />
                        </section>
                        <section id="bananaHalwa">
                            <h1>Banana Halwa</h1>
                            <img src={bananaHalwa} alt="bananaHalwa" />
                            <h2>Rs. 50.00 </h2> 
                            <QuantityButton handleAdd={handleAdd} handleRemove={handleRemove} quantity={quantity.bananaHalwa} item="bananaHalwa" />
                        </section>
                    </section>
                </section>
            </section>
          

        </React.Fragment>
    );
  }
export { OrderOnline };