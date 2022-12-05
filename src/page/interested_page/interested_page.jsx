import React from 'react';
import CartItem from '../../components/cart_item/cart_item';
import { useInterestContext } from '../../context/interested';

const InterestedPage = (props) => {
    const { interestItems } = useInterestContext();

    console.log(interestItems);
    return (
        <>
            <h1>interested</h1>
            <ul>
                {interestItems.map((item) => <CartItem item={item} key={Date.now()} />)}
            </ul>
        </>
    );
};

export default InterestedPage;