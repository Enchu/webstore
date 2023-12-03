import React, {FC, useEffect, useState} from 'react';
import './style.scss'
import InputMask from "react-input-mask";
import {useCookies} from "react-cookie";

const Checkout: FC = () => {
    const [cookies, setCookie] = useCookies(['userData']);

    const initialState = {
        email: '',
        country: '1',
        firstName: '',
        lastName: '',
        address: '',
        city: '',
        region: '1',
        postalCode: '',
        phone: '',
    };

    const [formData, setFormData] = useState(initialState);

    useEffect(() => {
        const storedData = cookies.userData || {};
        setFormData({ ...initialState, ...storedData });
    }, []);

    const handleChange = (event: any) => {
        const { name, value } = event.target;
        const updatedData = { ...formData, [name]: value };
        setFormData(updatedData);
        setCookie('userData', updatedData, { path: '/' });
    };

    return (
        <>
            <div className="checkout">
                <div className="checkout-container">
                    <div className="checkout-contact">
                        <h1>Contact</h1>
                        <div className="checkout-base">
                            <label>Email</label>
                            <div className='checkout-base__border'>
                                <input type="email"
                                       name="email"
                                       autoComplete='shipping email'
                                       value={formData.email}
                                       onChange={handleChange}/>
                            </div>
                        </div>
                    </div>

                    <div className="checkout-delivery">
                        <div className="checkout-delivery__cn">
                            <h1>Delivery</h1>
                            <div className="checkout-base">
                                <label>Country/Region</label>
                                <div className='checkout-base__border'>
                                    <select name="Country/Region">
                                        <option value="1">Россия</option>
                                    </select>
                                </div>
                            </div>

                            <div className="checkout-delivery__flex">
                                <div className="checkout-base">
                                    <label>First name</label>
                                    <div className='checkout-base__border'>
                                        <input type="text"
                                               name="firstName"
                                               value={formData.firstName}
                                               onChange={handleChange}
                                        />
                                    </div>
                                </div>
                                <div className="checkout-base">
                                    <label>Last name</label>
                                    <div className='checkout-base__border'>
                                        <input
                                            type="text"
                                            name="lastName"
                                            value={formData.lastName}
                                            onChange={handleChange}
                                        />
                                    </div>
                                </div>
                            </div>

                            <div>
                                <div className="checkout-base">
                                    <label>Address</label>
                                    <div className='checkout-base__border'>
                                        <input type="text"
                                               name="address"
                                               value={formData.address}
                                               onChange={handleChange}
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="checkout-delivery__flex">
                                <div className="checkout-base">
                                    <label>City</label>
                                    <div className='checkout-base__border'>
                                        <input type="text"
                                               name="city"
                                               value={formData.city}
                                               onChange={handleChange}
                                        />
                                    </div>
                                </div>
                                <div className="checkout-base">
                                    <label>Region</label>
                                    <div className='checkout-base__border'>
                                        <select name="country">
                                            <option value="1">Москва</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="checkout-base">
                                    <label>Postal code</label>
                                    <div className='checkout-base__border'>
                                        <input type="text"
                                               name="postalCode"
                                               value={formData.postalCode}
                                               onChange={handleChange}
                                        />
                                    </div>
                                </div>
                            </div>

                            <div>
                                <div className="checkout-base">
                                    <label>Phone</label>
                                    <div className='checkout-base__border'>
                                        <InputMask
                                            mask="+7 (999) 999-99-99"
                                            placeholder="+7"
                                            type="text"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                        />
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="checkout-shipping">
                        <h2>Shipping method</h2>
                        <div className="">
                            123
                        </div>
                    </div>
                    <div className="Payment">
                        123
                    </div>
                </div>
            </div>
        </>
    );
};

export default Checkout;