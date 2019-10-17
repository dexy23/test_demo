import React from 'react';
import ProductCard from './ProductCard';

const ProductList = ( ) => {
    return (
        <div className="product-list" data-test="product-list">
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
        </div>
    )
}

export default ProductList;