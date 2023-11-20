import React from 'react';
import './style.scss'

const BasketHeader = () => {
    return (
        <section className="cart-header">
            <div className='cart-header__title'>наименование</div>
            <div className='cart-header__count'>количество</div>
            <div className='cart-header__cost'>стоимость</div>
        </section>
    );
};

export default BasketHeader;