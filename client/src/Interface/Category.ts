
export interface ICategory {
    id: any;
    title: string;
    img: any;
    category: string;
    desc: string;
    price: any;
}

export interface IItemCategory{
    items: ICategory[];
}