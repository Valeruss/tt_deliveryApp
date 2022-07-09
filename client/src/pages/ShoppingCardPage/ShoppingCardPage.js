import _ from 'lodash';
import React, { useEffect } from 'react';
import Cart from '../../components/Cart/Cart';
import { useDispatch, useSelector } from 'react-redux';
import { createOrder } from '../../http/ordersAPI';
import './ShoppingCardPage.scss'
import { removeProductAction } from '../../store/cartReducer';

const ShoppingCardPage = () => {
    const [ name, setName ] = React.useState();
    const [ email, setEmail ] = React.useState();
    const [ phone, setPhone ] = React.useState();
    const [ address, setAddress ] = React.useState();
    const [ totalPrice, setTotalPrice ] = React.useState(0);
    const products = useSelector((state) => state.cart.products);
    const dispatch = useDispatch();

    useEffect(() => {
        updateTotalPrice();
    }, [])

    const calcTotalPrice = () => {
        let price = 0;
        _.map(products, (product) => {
            price += (product.count / 1) * product.price;
        })
        return price;
    }

    const updateTotalPrice = () => {
        setTotalPrice(calcTotalPrice());
    }

    const createNewOrder = async () => {
        try {
            if (products.length === 0 || !name || !email || !phone || !address) {
                return alert('Fill all inputs and select product');
            }
            const newOrder = {
                name, email, phone, address, order: products, totalPrice
            };
            await createOrder(newOrder);
    
            setName('');
            setEmail('');
            setPhone('');
            setAddress('');
            _.map(products, (product) => {
                dispatch(removeProductAction(product));
            });
            setTotalPrice(0);
            alert('Order created successfully');
        } catch (error) {
            alert('Error');
        }
        
    }

    return (
        <div>
            <div className='wrapper'>
                <div className='contact-info'>
                    <div className='contact-info-wrapper'>
                        <div className='contact-info-container'>
                            <div className='contact-info-component'>
                                <div>Name</div>
                                <input value={name} onChange={(event) => setName(event.target.value)} />
                            </div>
                            <div className='contact-info-component'>
                                <div>Email</div>
                                <input value={email} onChange={(event) => setEmail(event.target.value)}/>
                            </div>
                            <div className='contact-info-component'>
                                <div>Phone</div>
                                <input value={phone} onChange={(event) => setPhone(event.target.value)}/>
                            </div>
                            <div className='contact-info-component'>
                                <div>Address</div>
                                <input value={address} onChange={(event) => setAddress(event.target.value)}/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='cart'>
                    <Cart updateTotalPrice={updateTotalPrice}/>
                </div>
            </div>
            <div className='submit-area'>
                <div className='cart-bottom'>
                    <div className='cart-submit-btn'>
                        <div 
                            className='sbmt'
                            onClick={createNewOrder}
                        >
                            Sumbit
                        </div>
                    </div>
                    <div className='cart-total-price'>
                        <div className='prc'>Total price: {totalPrice}</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShoppingCardPage;
