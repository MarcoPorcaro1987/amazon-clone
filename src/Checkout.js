import React from 'react'
import "./Checkout.css"
import Subtotal from './Subtotal';
import CheckoutProduct from './CheckoutProduct';
import { useStateValue } from './StateProvider';

function Checkout() {
    const [{ basket, user }, dispatch] = useStateValue();


    return (
        <div className='checkout'>
            <div className='checkout_left'>
                <img className='checkout_ad' alt='checkout_ad' src="https://m.media-amazon.com/images/S/al-eu-726f4d26-7fdb/06dd061f-bfb4-47c9-8e2c-0eeabed1b19b.jpg" />
                <div>
                    <h3>Hello, {user?.email}</h3>
                    <h2 className='checkout_title'>Your shopping basket</h2>
                    {basket.map(item => (
                        <CheckoutProduct
                            id={item.id}
                            title={item.title}
                            image={item.image}
                            price={item.price}
                            rating={item.rating}
                        />
                    ))}

                </div>
            </div>
            <div className='checkout_right'>
                <Subtotal />
            </div>
        </div>
    );
}

export default Checkout
