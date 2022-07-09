import React from 'react';
import Products from '../../components/Products/Products';
import Shops from '../../components/Shops/Shops';
import './ShopsPage.scss';

const ShopsPage = () => {
    const [ shopName, setShopName ] = React.useState();

    return (
        <div className='wrapper'>
            <div className='shops'>
                <Shops setShopName={setShopName} />
            </div>
            <div className='products'>
                <Products shopName={shopName} />
            </div>
        </div>
    );
};

export default ShopsPage;
