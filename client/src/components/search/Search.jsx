import React, {FC, useContext, useState} from 'react';
import {FaSearch} from "react-icons/fa";
import {Context} from "../../index";
import './search.scss'

const Search = () => {
    const { cart } = useContext(Context);
    const [searchTerm, setSearchTerm] = useState('');
    const handleSearch = (e) => {
        const term = e.target.value;
        setSearchTerm(term);
        cart.filterItemsBySearch(term);
    };

    return (
        <>
            <div className="search-container">
                <div className="nav__search">
                    <div className="nav__search-form">
                        <div className='nav__search-icon'>
                            <FaSearch/>
                        </div>
                        <div className='nav__search-w'>
                            <input
                                value={searchTerm}
                                autoComplete="off"
                                placeholder="Поиск"
                                onChange={handleSearch}
                                type="text"
                                className="nav__search-input"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Search;
