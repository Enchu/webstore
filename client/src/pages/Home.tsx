import React, {FC, useContext} from 'react';
import Items from "../components/items/Items";
import {Context} from "../index";
import {observer} from "mobx-react-lite";
import '../styles/home.scss'
import {IItems} from "../Interface/Items";
import Search from "../components/UI/search/Search";
import ScrollCategory from "../components/UI/scrollCategory/ScrollCategory";


const Home : FC = observer(() => {
    const {cart} = useContext(Context)

    const products = cart.currentCart.map((item: IItems) => {
        return <Items key={item.id} items={item}/>
    })

    /*
    const [page, setPage] = useState<number>(1)
    const [totalPages, setTotalPages] = useState<number>(0)
    const [limit, setLimit] = useState<number>(10)
    const lastElement = useRef<any>();

    const observer = new IntersectionObserver(callbackFunction, options){
        observer.observe(elementToObserve)
    }

    useObserver(lastElement, page < totalPages ,() => {
        setPage(page + 1)
    });

    useEffect(() => {
        const totalCount = cart.currentCart.length;
        setTotalPages(totalCount > 10 ? getPageCount(totalCount, limit) : totalCount)
    }, []);

    const changePage = (page: number): void => {
        setPage(page)
    }*/

    return (
        <div className="main-container">
            {/*<nav className="sidebar">
                <SlideBar/>
            </nav>*/}
            <main>
                <div className="container">
                    <ScrollCategory/>

                    <Search/>

                    <div className='main-items'>
                        {products}
                    </div>

                </div>


                {/*<div ref={lastElement} className={''}></div>

                <Pagination
                    totalPages={totalPages}
                    page={page}
                    changePage={changePage}
                />*/}

            </main>
        </div>
    );
});

export default Home;
