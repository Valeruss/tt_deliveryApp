import React from 'react';
import Orders from '../../components/Orders/Orders';
import { getByEmailAndPhone } from '../../http/ordersAPI';
import './HistoryPage.scss';

const HisoryPage = () => {
    const [ email, setEmail ] = React.useState();
    const [ phone, setPhone ] = React.useState();
    const [ orders, setOrders ] = React.useState([]);

    const searchOrders = async () => {
        const newOrders = await getByEmailAndPhone({ email, phone });
        setOrders(newOrders);
    }

    return (
        <div className='history-wrapper'>
            <div className='search-component'>
                <div className='h-s-wrapper'>
                    <div className='search-inputs'>
                        <div className='search-email-input'>
                            <div>Email:</div>
                            <input value={email} onChange={(event) => setEmail(event.target.value)}/>
                        </div>
                        <div>
                            <div>Phone:</div>
                            <input value={phone} onChange={(event) => setPhone(event.target.value)}/>
                        </div>
                    </div>
                    <div 
                        className='srch-btn'
                        onClick={searchOrders}
                    >
                        Search
                    </div>
                </div>
            </div>
            <div className='orders-component'>
                <Orders orders={orders} />
            </div>
        </div>
    );
};

export default HisoryPage;
