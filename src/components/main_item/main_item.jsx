import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './main_item.module.css';
const MainItem = ({ item }) => {
    const { title, price, sale, percent, image, description, id } = item;
    const navigate = useNavigate();
    return (
        <li onClick={() => navigate(`/ItemDetail/${id}`, { state: { item } })} className={styles.mainItem}>
            <img className={styles.img} src={image} alt="img" />
            <div className={styles.mainItem__inner}>
                <h1 className={styles.title}>{title}</h1>
                <div className={styles.price__info}>
                    <p className={styles.price}>{price}원</p>
                    <p className={styles.sale}>{sale}원</p>
                    <p className={styles.percent}>{percent}%</p>
                </div>
            </div>
            <p className={styles.description}>{description}</p>
        </li>
    );
};

export default MainItem;

// title": "[VPS] 피치 홀릭 0.3 (폐호흡)",
//             "id": "1312",
//             "price": 35000,
//             "sale": 24000,
//             "percent": 32,
//             "image": "https://res.cloudinary.com/dyh89cs5ea/image/upload/v1669730405/liquid/zombie_peach_zummev.jpg",
//             "description": "빠져나올수 없는 진한 복숭아의 늪 !"