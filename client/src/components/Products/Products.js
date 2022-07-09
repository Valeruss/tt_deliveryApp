import React, { useEffect } from 'react';
import { getProductsByShopName } from '../../http/productsAPI';
import ProductItem from '../ProductItem/ProductItem';
import './Products.scss';

const Products = ({shopName = 'Select shop'}) => {
    const [ products, setProducts ] = React.useState([]);

    useEffect(() =>{
        getProductsByShopName(shopName).then(data => {
            setProducts(data);
        })
    }, [shopName]);

    return (
        <div className='products-wrapper'>
            {products.length === 0 ?
                <div>Select shop</div>
                :
                <div className='productslist'>
                    {products.map((product) =>
                        <ProductItem product={product} key={product._id} />
                    )}
                </div>
            }
        </div>
    );
};

export default Products;
