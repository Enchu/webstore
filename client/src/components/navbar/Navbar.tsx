import React, {FC, useContext, useEffect, useRef, useState} from 'react';
import './navbar.scss'
import {NavLink} from "react-router-dom";
import BtnDarkMode from "../UI/btnDarkMode/BtnDarkMode";
import {FaBasketShopping} from "react-icons/fa6";
import ModalAuth from "../modalAuth/ModalAuth";
import {Context} from "../../index";
import {observer} from "mobx-react-lite";
import ShowOrders from "../order/ShowOrders";
import {FaSearch, FaUserCircle} from "react-icons/fa";
import UserMenu from "../userMenu/UserMenu";

const showNothing = () => {
    return (
        <div className='empty'>
            <h2>Товаров нет</h2>
        </div>)
}

const Navbar: FC = observer(() => {
    const { cart, user } = useContext(Context);

    const [cartOpen, setCartOpen] = useState(false);
    const [authOpen, setAuthOpen] = useState(false);
    const [userOpen, setUserOpen] = useState(false);

    const activeLink = 'nav-list__link nav-list__link--active'
    const normalLink = 'nav-list__link'

    const handleMouseEnter = () => {
        setCartOpen(true);
    };

    const handleMouseLeave = () => {
        setCartOpen(false);
    };

    return (
        <header className="nav">
            <div className="container">
                <div className="nav-row">
                    <NavLink to="/" className="nav-logo">
                        <strong>Enchu</strong>
                    </NavLink>

                    <BtnDarkMode/>

                    <ul className="nav-list">
                        <li className="nav-list__item">
                            <NavLink to="/" className="nav-list__link">
                                Home
                            </NavLink>
                        </li>

                        <li className="nav-list__item">
                            <NavLink to='/contacts' className={({isActive}) => isActive ? activeLink : normalLink}>Contacts</NavLink>
                        </li>

                        <li className="nav-list__item">
                            {user.isAuth
                                ? (
                                    <div className="navbar-avatar">
                                        <FaUserCircle onClick={() => setUserOpen((prevUserOpen) => !prevUserOpen)} />
                                    </div>
                                )
                                : (
                                    <span className="auth" onClick={() => setAuthOpen((prevAuthOpen) => !prevAuthOpen)}>
                                        Войти
                                    </span>
                                )
                            }
                        </li>
                    </ul>

                    <div className="cart-container" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                        <div className="cart-icon">
                            <NavLink to={cart.orders.length > 0 ? '/basket' : '/'}>
                                <FaBasketShopping className={`shop-cart-button ${cart.orders.length > 0 ? 'active' : ''}`} />
                            </NavLink>

                            {cartOpen && (
                                <div className="shop-cart">
                                    {cart.orders.length > 0
                                        ? (
                                            <div className="shop-cart-content">
                                                <ShowOrders props={cart} />
                                            </div>
                                        )
                                        : showNothing()
                                    }
                                </div>
                            )}
                        </div>
                    </div>

                    {authOpen && (
                        <div className="auth-cart">
                            <div className="dialog__container">
                                <ModalAuth onClose={() => setAuthOpen(false)} />
                            </div>
                        </div>
                    )}

                    {userOpen && (
                        <div className="navbar-user__menu">
                            <UserMenu onClose={() => setUserOpen(false)} />
                        </div>
                    )}
                </div>
            </div>
        </header>
    );
});

export default Navbar;
