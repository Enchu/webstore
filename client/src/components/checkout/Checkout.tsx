import React, {FC} from 'react';
import './style.scss'

const Checkout: FC = () => {
    return (
        <>
            <div className="checkout-container">
                <div className="checkout-contact">
                    <h1>Contact</h1>
                    <input type="email"/>
                </div>
                <div className="checkout-delivery">
                    <input type="text" title="Country/Region"/>
                    <div>
                        <input type="text" title="First Name"/>
                        <input type="text" title="Last Name"/>
                    </div>
                    <input type="text" title="Address"/>
                    <div>
                        <input type="text" title="City"/>
                        <input type="text" title="Country"/>
                        <input type="text" title="Postal code"/>
                    </div>
                    <input type="text" title="phone"/>
                </div>
                <div className="checkout-shipping">
                    123
                </div>
                <div className="Payment">
                    123
                </div>
            </div>
            <h2>Express checkout</h2>

        </>
    );
};

export default Checkout;