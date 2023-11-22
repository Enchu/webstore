import React, {FC, useContext} from 'react';
import './style.scss'
import {Context} from "../../index";
import BasketHeader from "./BasketHeader";
import BasketFooter from "./BasketFooter";
import BasketProduct from "./BasketProduct";
import {observer} from "mobx-react-lite";
import {IItems} from "../../Interface/Items";

const Basket: FC = observer(() => {
    const {cart} = useContext(Context)

    return (
        <section className='section-cart'>
            <div className="section-cart__header">
                <div className="container">
                    <h1 className='title-1'>Корзина</h1>
                </div>
                <div className="section-cart__body">
                    <div className="container">
                        <section className='cart'>
                            <BasketHeader/>

                            {cart.orders.map((el: IItems) => (
                                <BasketProduct key={el.id} item={el}/>
                            ))}

                            <BasketFooter/>
                        </section>
                    </div>
                </div>
            </div>
        </section>
    );
});

export default Basket;