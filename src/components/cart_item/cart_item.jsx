import React from 'react';
import { useCartContext } from '../../context/cart_context';
import styles from './cart_item.module.css';
const CartItem = ({ item }) => {
    const { deleteCartItem } = useCartContext();

    return (
        <li className={styles.cartItem}>
            <div className={styles.imgBox}>
                <img className={styles.image} src={item.image} alt='img' />
            </div>
            <p>{item.title}</p>
            <p>{item.sale}</p>
            <p>{item.count}</p>
            <p>기본배송</p>
            <p>{item.totalPrice}원</p>
            <div className={styles.buttons}>
                <button>주문하기</button>
                <button>관심상품등록</button>
                <button onClick={() => deleteCartItem(item)}>삭제</button>
            </div>
        </li>
    );
};

export default CartItem;