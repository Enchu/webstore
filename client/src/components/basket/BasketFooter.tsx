import React, {FC, useContext} from 'react';
import {Context} from "../../index";
import {ICategory} from "../../Interface/Category";
import {IItems} from "../../Interface/Items";

const BasketFooter: FC = () => {
    const {cart} = useContext(Context)

    let summa = 0
    cart.orders.forEach((el: IItems) => summa += Number.parseFloat(el.price))

    let count = 0
    cart.orders.forEach((el: IItems) => count += el.count)

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