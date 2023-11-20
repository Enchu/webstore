import React from 'react';
import internal from "stream";

export interface IItems {
    id: any;
    title: string;
    img: any;
    desc: string;
    category: string;
    count: any
    price: any;
}

export interface IPropsItems{
    items: IItems[]
}