import React, {FC, useEffect, useState} from 'react';
import './style.scss'
import {useCookies} from "react-cookie";
import axios from "axios";
import {City} from "../../Interface/City";
import { XMLParser } from 'fast-xml-parser';
import MaskedInput from 'react-text-mask';

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

    const apiKey = process.env.CDEK_TEST_API;
    const deliveryEndpoint = 'https://integration.cdek.ru/pvzlist/v1/json';
    const citiesEndpoint = 'https://integration.cdek.ru/v1/location/cities';

    const [cities, setCities] = useState<City[]>([]);

    const getDeliveryInfo = async () => {
        try {
            const response = await axios.post(deliveryEndpoint, {}, {
                headers: {
                    Authorization: `Bearer ${apiKey}`,
                    'Content-Type': 'application/json',
                },
            });

            console.log(response.data);
            return response.data;
        } catch (error) {
            console.error('Ошибка при получении информации о доставке:', error);
            throw error;
        }
    };

    const getCityList = async () => {
        try {
            const response = await axios.get(citiesEndpoint);
            const xmlData = response.data;

            const options = {
                ignoreAttributes: false,
                attributeNamePrefix: '',
            };

            const parser = new XMLParser(options);
            const jsonObj = parser.parse(xmlData);

            const cities = jsonObj.Locations.Location.map((city: any) => ({
                cityName: city.cityName,
                cityCode: city.cityCode,
                cityUuid: city.cityUuid,
            }));

            setCities(cities);

            return cities;
        } catch (error) {
            console.error('Ошибка при получении списка городов:', error);
            throw error;
        }
    }

    useEffect(() => {
        getCityList();
    }, []);

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
                                        <select className='checkout-base__select'>
                                            {cities.map((city) => (
                                                <option key={city.cityUuid} value={city.cityCode}>
                                                    {city.cityName}
                                                </option>
                                            ))}
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
                                        <MaskedInput
                                            mask={['+', '7', ' ', '(', /\d/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, '-', /\d/, /\d/]}
                                            placeholder="+7 (___) ___-__-__"
                                            guide={false}
                                            value={formData.phone}
                                            onChange={handleChange}
                                            name="phone"
                                        />
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                    {/*<div className="checkout-shipping">*/}
                    {/*    <h2>Shipping method</h2>*/}
                    {/*    <div className="">*/}
                    {/*        123*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                    {/*<div className="Payment">*/}
                    {/*    123*/}
                    {/*</div>*/}
                </div>
            </div>
        </>
    );
};

export default Checkout;