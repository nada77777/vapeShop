import React, { useState } from 'react';
import styles from './item_detail_page.module.css';
import { useLocation } from 'react-router-dom';
import Button from '../../components/button/button';
import { useCartContext } from '../../context/cart_context';
import { useInterestContext } from '../../context/interested';
const ItemDetailPage = (props) => {
    const item = useLocation().state.item;
    const { title, image, percent, price, sale, description } = item;
    const [count, setCount] = useState(1);
    const { onAddCartItems } = useCartContext();
    const { addInterestItem } = useInterestContext();

    const onClickItemCount = (event) => {
        setCount(event.target.value);
    };

    const onClickCartBtn = () => {
        console.log('pageDetail_item', item);
        const newItem = { ...item, count: parseInt(count), totalPrice: count * sale, newId: Date.now() };
        onAddCartItems(newItem);
    };

    const onClickInterestBtn = () => {
        addInterestItem(item);
    };

    return (
        <section className={styles.itemDetailPage}>
            <div className={styles.imgBox}>
                <div className={styles.imgInner}>
                    <img src={image} alt='detail_img' />
                </div>
            </div>
            <div className={styles.itemInfo}>
                <h1 className={styles.title}>{title}</h1>
                <p className={styles.description}>{description}</p>
                <p className={styles.priceInfo}>
                    <span className={styles.consumerPrice}>소비자가</span>
                    <span className={styles.price}>{price}원</span>
                </p>
                <p className={styles.priceInfo}>
                    <span className={styles.sellerPrice}>할인가격</span>
                    <span className={styles.sale}>{sale}원</span>
                    <span className={styles.percent}>{percent}%</span>
                </p>
                <div className={styles.orderBox}>
                    <div className={styles.orderInfo}>
                        <p>상품명</p>
                        <p>상품수</p>
                        <p>가격</p>
                    </div>
                    <div className={styles.orderResult}>
                        <p>{title}</p>
                        <input type="number" defaultValue='1' onClick={onClickItemCount} />
                        <p>{count * sale}원</p>
                    </div>
                </div>

                <div className={styles.totalInfo}>
                    <p>총 상품금액</p>
                    <p>{count * sale}원 ({count}개)</p>
                </div>
                <div className={styles.buttons}>
                    <Button text={'장바구니'} item={item} onClickBtn={onClickCartBtn} />
                    <Button text={'관심상품'} item={item} onClickBtn={onClickInterestBtn} />
                </div>

            </div>

        </section>
    );
};

export default ItemDetailPage;


{/* <img className={styles.img} src={image} alt="img" />
<div className={styles.mainItem__inner}>
    <h1 className={styles.title}>{title}</h1>
    <div className={styles.price__info}>
        <p className={styles.price}>{price}원</p>
        <p className={styles.sale}>{sale}원</p>
        <p className={styles.percent}>{percent}%</p> */}