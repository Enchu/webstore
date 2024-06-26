import React, {FC, useContext} from 'react';
import {Context} from "../../index";
import './SlideBar.scss'

const SlideBar: FC = () => {
    const {cart} = useContext(Context)

    return (
        <div className='sidebar-container'>
            <h3>Category</h3>
            <ul>
                {cart.categories.map((category: any) => (
                    <li key={category.id}>
                        {category.name}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SlideBar;
