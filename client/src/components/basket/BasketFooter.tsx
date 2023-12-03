import React, {FC, useContext} from 'react';
import {Context} from "../../index";
import {ICategory} from "../../Interface/Category";
import {IItems} from "../../Interface/Items";

const BasketFooter: FC = () => {
    const {cart} = useContext(Context)

    const totalPrice = cart.orders.reduce((acc: number, el: IItems) => acc + Number.parseFloat(el.price), 0);
    const totalCount = cart.orders.reduce((acc: number, el: IItems) => acc + el.count, 0);

    return (
        <div className='cart-footer'>
            <div className='cart-footer__count'> {totalCount} ед.</div>
            <div className='cart-footer__price'>
                {new Intl.NumberFormat().format(totalPrice)} $
            </div>
        </div>
    );
};

export default BasketFooter;