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
import {FaUserCircle} from "react-icons/fa";
import UserMenu from "../userMenu/UserMenu";

const showNothing = () => {
    return (
        <div className='empty'>
            <h2>Товаров нет</h2>
        </div>)
}

const Navbar: FC = observer(() => {
    const {cart, user} = useContext(Context)

    const [cartOpen, setCartOpen] = useState(false)
    const [authOpen, setAuthOpen] = useState(false)
    const [userOpen, setUserOpen] = useState(false)
    const [isHovered, setIsHovered] = useState(false);
    const [searchTerm, setSearchTerm] = useState('')

    const handleMouseEnter = () => {
        setCartOpen((prevCartOpen) => !prevCartOpen)
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setCartOpen((prevCartOpen) => !prevCartOpen)
        setIsHovered(false);
    };

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value);
        cart.filterItemsBySearch(e.target.value);
    };

    const activeLink = 'nav-list__link nav-list__link--active'
    const normalLink = 'nav-list__link'

    return (
        <header className="nav">
            <div className="container">
                <div className="nav-row">

                    <NavLink to='/' className="nav-logo">
                        <strong>Enchu</strong>
                    </NavLink>

                    <div className="nav-search">
                        <input
                            value={searchTerm}
                            autoComplete="off"
                            placeholder="Поиск"
                            onChange={(e) => handleSearch(e)}
                            type="text"
                            className="nav-search-input"
                        />
                    </div>

                    <BtnDarkMode/>

                    <ul className="nav-list">
                        <li className="nav-list__item">
                            <NavLink to='/' className={({isActive}) => isActive ? activeLink : normalLink}>
                                Home
                            </NavLink>
                        </li>

                        {/*<li className="nav-list__item">*/}
                        {/*    <NavLink to='/admin' className={({isActive}) => isActive ? activeLink : normalLink}>*/}
                        {/*        Admin*/}
                        {/*    </NavLink>*/}
                        {/*</li>*/}

                        <li className="nav-list__item">
                            {
                                user.isAuth
                                    ? (
                                        <div className='navbar-avatar'>
                                            <FaUserCircle onClick={() => setUserOpen((prevCartOpen) => !prevCartOpen)}/>
                                        </div>
                                    )
                                    : (
                                        <span className='auth' onClick={() => setAuthOpen((prevUserOpen) => !prevUserOpen)}>Войти</span>
                                    )
                            }
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

                    {
                        userOpen && (
                            <div className="navbar-user__menu">
                                <UserMenu onClose={() => setUserOpen(false)}/>
                            </div>
                        )
                    }

                </div>
            </div>
        </header>
    );
});

export default Navbar;