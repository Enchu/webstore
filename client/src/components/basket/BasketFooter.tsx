import React, {FC, useContext} from 'react';
import {Context} from "../../index";

const BasketFooter: FC<any> = () => {
    const {cart} = useContext(Context)

    let summa = 0
    cart.orders.forEach((el: { price: string; }) => summa += Number.parseFloat(el.price))

    let count = 0
    cart.orders.forEach((el: { count: number }) => count += el.count)

    return (
        <div className='cart-footer'>
            <div className='cart-footer__count'> {count} ед.</div>
            <div className='cart-footer__price'>
                {new Intl.NumberFormat().format(summa)} $
            </div>
        </div>
    );
};

export default BasketFooter;