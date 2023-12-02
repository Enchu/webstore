import React from 'react';

import any from '../../image/any.png'

interface ImageProps {
    img: any;
    alt: string;
    className?: string;
}

const Image: React.FC<ImageProps> = ({img, alt, className }) => {
    if(!img){
        img = any
    }

    return (
        <img src={img} alt={alt} className={className} />
    );
};

export default Image;