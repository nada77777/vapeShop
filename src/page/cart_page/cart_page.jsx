import React from 'react';
import styles from './cart_page.module.css';
import { useCartContext } from '../../context/cart_context';
import CartItem from '../../components/cart_item/cart_item';

const CartPage = (props) => {
    const { cartItems } = useCartContext();
    // const { title, count, image, totalPrice } = cartItems;
    console.log(cartItems && cartItems);
    console.log(useCartContext());
    return (
        <section className={styles.cartPage}>
            <h1 className={styles.cartPageTitle}>장바구니</h1>
            <div className={styles.cartItemsBox}>
                <ul className={styles.receipt}>
                    <li className={styles.img}>이미지</li>
                    <li className={styles.cartItemInfo}>상품정보</li>
                    <li>판매가</li>
                    <li>수량</li>
                    <li>배송구분</li>
                    <li>합계</li>
                    <li>선택</li>
                </ul>
                <ul className={styles.cartItemList}>
                    {cartItems.map((item) => <CartItem item={item} key={item.newId} />)}
                </ul>
            </div>
        </section>
    );
};

export default CartPage;
// 이미지	상품정보	판매가	수량 배송구분 합계	선택