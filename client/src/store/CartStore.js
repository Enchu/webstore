import {makeAutoObservable} from "mobx";
import any from "../image/any.png";
import transliterateToRussianWithKeyCode from "../utils/transliterate";
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
            {
                id: 7,
                title: 'Стол',
                img: any,
                desc: 'Lorem ipsum dolor sit amet, consectetur aipisicing.',
                category: 'tables',
                count: 1,
                price: 149.99,
                totalprice: 149.99
            },
            {
                id: 8,
                title: 'Стол',
                img: any,
                desc: 'Lorem ipsum dolor sit amet, consectetur aipisicing.',
                category: 'tables',
                count: 1,
                price: 149.99,
                totalprice: 149.99
            },
            {
                id: 9,
                title: 'Стол',
                img: any,
                desc: 'Lorem ipsum dolor sit amet, consectetur aipisicing.',
                category: 'tables',
                count: 1,
                price: 149.99,
                totalprice: 149.99
            },
            {
                id: 10,
                title: 'Стол',
                img: any,
                desc: 'Lorem ipsum dolor sit amet, consectetur aipisicing.',
                category: 'tables',
                count: 1,
                price: 149.99,
                totalprice: 149.99
            },
            {
                id: 11,
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
                isActive: true,
            },
            {
                id:'chairs',
                name: 'стулья',
                isActive: false,
            },
            {
                id:'tables',
                name: 'столы',
                isActive: false,
            },
            {
                id:'sofa',
                name: 'диваны',
                isActive: false,
            },
            {
                id:'bed',
                name: 'кровати',
                isActive: false,
            },
            {
                id:'desk',
                name: 'парты',
                isActive: false,
            },
            {
                id:'wardrobe',
                name: 'шкафы',
                isActive: false,
            },
            {
                id:'bookcase',
                name: 'книжные шкафы',
                isActive: false,
            },
            {
                id:'shelving units',
                name: 'стелажи',
                isActive: false,
            },
            {
                id:'bag',
                name: 'сумки',
                isActive: false,
            },
            {
                id:'lighting',
                name: 'свет',
                isActive: false,
            },
            {
                id:'storage',
                name: 'хранилище',
                isActive: false,
            },
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
        this._category.forEach(item => item.isActive = false);

        const selectedCategory = this._category.find(item => item.id === category.id);
        if (selectedCategory) {
            selectedCategory.isActive = true;
        }

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
            let russianSearchTerm = transliterateToRussianWithKeyCode(searchTerm.toLowerCase());
            const filteredItems = this.carts.filter((item) =>
                item.title.toLowerCase().includes(searchTerm.toLowerCase())
            );
            this.setCurrentCart(filteredItems);
        }
    }
}
