import React, {FC, useContext, useEffect, useRef, useState} from 'react';
import './style.scss'
import {NavLink} from "react-router-dom";
import BtnDarkMode from "../btnDarkMode/BtnDarkMode";
import {FaBasketShopping} from "react-icons/fa6";
import ModalAuth from "../modalAuth/ModalAuth";
import {Context} from "../../index";
import Order from "../order/Order";
import internal from "stream";
import {observer} from "mobx-react-lite";
import ShowOrders from "../order/ShowOrders";

const showNothing = () => {
    return (
        <div className='empty'>
            <h2>Товаров нет</h2>
        </div>)
}

const Navbar: FC = observer(() => {
    const {cart} = useContext(Context)

    const [cartOpen, setCartOpen] = useState(false)
    const [authOpen, setAuthOpen] = useState(false)
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setCartOpen((prevCartOpen) => !prevCartOpen)
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setCartOpen((prevCartOpen) => !prevCartOpen)
        setIsHovered(false);
    };

    const activeLink = 'nav-list__link nav-list__link--active'
    const normalLink = 'nav-list__link'

    return (
        <header className="nav">
            <div className="container">
                <div className="nav-row">

                    <NavLink to='/' className="logo">
                        <strong>Enchu</strong>
                    </NavLink>

                    <BtnDarkMode/>

                    <ul className="nav-list">
                        <li className="nav-list__item">
                            <NavLink to='/' className={({isActive}) => isActive ? activeLink : normalLink}>
                                Home
                            </NavLink>
                        </li>

                        <li className="nav-list__item">
                            <NavLink to='/admin' className={({isActive}) => isActive ? activeLink : normalLink}>
                                Admin
                            </NavLink>
                        </li>

                        <li className="nav-list__item">
                            <span className='auth' onClick={() => setAuthOpen((prevCartOpen) => !prevCartOpen)}>
                                Войти
                            </span>
                        </li>
                    </ul>

                    <NavLink to={'/basket'}>
                        <FaBasketShopping
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                            className={`shop-cart-button ${isHovered && 'active'}`}
                        />
                    </NavLink>

                    {isHovered && (
                        <div className='shop-cart' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                            {cartOpen && (
                                <div className='shop-cart-content'>
                                    {cart.orders.length > 0 ? <ShowOrders props={cart} /> : showNothing()}
                                </div>
                            )}
                        </div>
                    )}

                    {
                        authOpen && (
                            <div className='auth-cart'>
                                <div className='dialog__container'>
                                        <ModalAuth onClose={() => setAuthOpen(false)}/>
                                </div>
                            </div>
                        )
                    }

                </div>
            </div>
        </header>
    );
});

export default Navbar;