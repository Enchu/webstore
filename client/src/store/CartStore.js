import {makeAutoObservable} from "mobx";
import any from "../image/any.png";
export default class CartStore {
    constructor() {
        this._cart = [
            {
                id: 1,
                title: 'Стул серый',
                img: any,
                desc: 'Lorem ipsum dolor sit amet, consectetur aipisicing.',
                category: 'chairs',
                count: 1,
                price: 49.99,
                totalprice: 49.99
            },
            {
                id: 2,
                title: 'Стол',
                img: any,
                desc: 'Lorem ipsum dolor sit amet, consectetur aipisicing.',
                category: 'tables',
                count: 1,
                price: 149.99,
                totalprice: 149.99
            },
            {
                id: 3,
                title: 'Диван',
                img: any,
                desc: 'Lorem ipsum dolor sit amet, consectetur aipisicing.',
                category: 'sofa',
                count: 1,
                price: 249.99,
                totalprice: 249.99
            },
            {
                id: 4,
                title: 'Стул серый',
                img: any,
                desc: 'Lorem ipsum dolor sit amet, consectetur aipisicing.',
                category: 'chairs',
                count: 1,
                price: 49.99,
                totalprice: 49.99
            },
            {
                id: 5,
                title: 'Стол',
                img: any,
                desc: 'Lorem ipsum dolor sit amet, consectetur aipisicing.',
                category: 'tables',
                count: 1,
                price: 149.99,
                totalprice: 149.99
            },
            {
                id: 6,
                title: 'Стол',
                img: any,
                desc: 'Lorem ipsum dolor sit amet, consectetur aipisicing.',
                category: 'tables',
                count: 1,
                price: 149.99,
                totalprice: 149.99
            },
            ]
        this._orders = []
        this._category = [
            {
                id:'all',
                name: 'все',
            },
            {
                id:'chairs',
                name: 'стулья',
            },
            {
                id:'tables',
                name: 'столы',
            },
            {
                id:'sofa',
                name: 'диваны'
            }
        ]
        this._currentCart = this._cart
        makeAutoObservable(this)
    }

    setCart(cart){
        this._cart = cart
    }

    setOrder(order){
        this._orders = order._orders
    }

    setCategory(category){
        this._category = category
    }

    setCurrentCart(CurrentCart){
        this._currentCart = CurrentCart
    }

    get carts(){
        return this._cart
    }

    get orders(){
        return this._orders
    }

    get categories(){
        return this._category
    }

    get currentCart(){
        return this._currentCart
    }

    addToOrder(item) {
        let isInArray = false
        this.orders.forEach(el =>{
            if(el.id === item.id){
                isInArray = true
            }
        })

        if(!isInArray){
            this.setOrder({_orders: [...this.orders, item]})
        }
    }

    deleteOrder(id){
        this._orders = this._orders.filter(order => order.id !== id);
    }

    increaseToOrder(id){
        console.log(id)

        let isInArray = false
        this.orders.forEach(el =>{
            if(el.id === id){
                isInArray = true
            }
        })

        if(!isInArray){
            this.setOrder({_orders: [...this.orders, this.orders.count++ ]})
        }
    }

    chooseCategory(category){
        if(category.id === 'all'){
            this._currentCart = this._cart;
        } else{
            this._currentCart = this._cart.filter(el => el.category === category.id);
        }
    }

    filterItemsBySearch(searchTerm) {
        if (!searchTerm.trim()) {
            this.setCurrentCart(this.carts);
        } else {
            const filteredItems = this.carts.filter((item) =>
                item.title.toLowerCase().includes(searchTerm.toLowerCase())
            );
            this.setCurrentCart(filteredItems);
        }
    }
}