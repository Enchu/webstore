import React, {FC, useContext, useEffect, useRef, useState} from 'react';
import './scrollcategory.module.scss'
import Image from "../image/ImageProps";
import leftArrow from "../../../image/icons/leftarrow.svg";
import {ICategory} from "../../../Interface/Category";
import rightArrow from "../../../image/icons/rightarrow.svg";
import {Context} from "../../../index";

const ScrollCategory: FC = () => {
    const {cart} = useContext(Context)

    //Add Active Choose Category
    const toggleChooseCategory = (category: any) => {
        cart.chooseCategory(category)
    }

    // Scroll Left and Right
    const scrollRef = useRef<any>(null);
    const [scrollLeft, setScrollLeft] = useState<any>()
    const [scrollRight, setScrollRight] = useState<any>()

    const scrollLeftHandler = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollLeft -= 100;
        }
    };

    const scrollRightHandler = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollLeft += 100;
        }
    };

    useEffect(() => {
        const handleScroll = () => {
            if (scrollRef.current) {
                const canScrollLeft = scrollRef.current.scrollLeft > 0;
                const canScrollRight = scrollRef.current.scrollLeft < scrollRef.current.scrollWidth - scrollRef.current.clientWidth;
                setScrollLeft(canScrollLeft);
                setScrollRight(canScrollRight);
                setScrollLeft(scrollRef.current.scrollLeft);
            }
        };

        if (scrollRef.current) {
            scrollRef.current.addEventListener('scroll', handleScroll);
            handleScroll();
        }

        return () => {
            if (scrollRef.current) {
                scrollRef.current.removeEventListener('scroll', handleScroll);
            }
        };
    })

    //Scroll Mouse
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);

    const handleMouseDown = (event: React.MouseEvent<HTMLUListElement>) => {
        setIsDragging(true);
        if (scrollRef.current) {
            setStartX(event.clientX - scrollRef.current.offsetLeft);
        }
    };

    const handleMouseMove = (event: React.MouseEvent<HTMLUListElement>) => {
        if (!isDragging) return;
        event.preventDefault();
        const x = event.clientX - scrollRef.current.offsetLeft;
        const scrollX = x - startX;
        scrollRef.current.scrollLeft = scrollLeft - scrollX;
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

    return (
        <>
            <div className="main-category">
                <div className={scrollLeft ? `category-button__left image-active` : `category-button__left`}
                     onClick={scrollLeftHandler}>
                    <Image img={leftArrow} alt='' className='category__image'/>
                </div>

                <ul
                    className='category__mas'
                    ref={scrollRef}
                    onMouseDown={handleMouseDown}
                    onMouseMove={handleMouseMove}
                    onMouseUp={handleMouseUp}
                    onMouseLeave={handleMouseUp}
                >
                    {cart.categories.map((category: ICategory) => (
                        <li
                            key={category.id}
                            onClick={() => toggleChooseCategory(category)}
                            className={category.isActive ? 'category__item active' : 'category__item'}
                        >
                            {category.name}
                        </li>
                    ))}
                </ul>

                <div className={scrollRight ? 'category-button__right image-active' : 'category-button__right'}
                     onClick={scrollRightHandler}>
                    <Image img={rightArrow} alt='' className='category__image'/>
                </div>
            </div>
        </>
    );
};

export default ScrollCategory;
