import React, { useEffect } from 'react';
import { getShops } from '../../http/shopsAPI';
import './Shops.scss';

const Shops = ({setShopName}) => {
    const [ shops, setShops ] = React.useState([]);

    useEffect(() => {
        getShops().then(data => {
            setShops(data);
        });
    }, []);

    return (
        <div>
            {shops?.map(shop =>
                <div
                    className='shop' 
                    key={shop._id}
                    onClick={() => setShopName(shop.shopName)}
                >
                    {shop.shopName}
                </div>    
            )}
        </div>
    );
};

export default Shops;
