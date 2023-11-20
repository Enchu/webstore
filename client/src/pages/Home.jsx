import React, {useContext} from 'react';
import Items from "../components/items/Items";
import {Context} from "../index";
import {observer} from "mobx-react-lite";
import SlideBar from "../components/slidebar/SlideBar";


const Home = observer(() => {
    const {cart} = useContext(Context)

    const products = cart.carts.map((item) => {
        return <Items key={item.id} items={item}/>
    })

    return (
        <main>
            <div className='main-items'>
                {products}
            </div>
        </main>
    );
});

export default Home;