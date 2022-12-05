import React, { useEffect, useState } from 'react';
import MainItem from '../../components/main_item/main_item';
import styles from './main_items_page.module.css';
const MainItemsPage = () => {
    const [items, setItems] = useState([]);
    useEffect(() => {
        fetch('/data/info.json')//
            .then(response => response.json())//
            .then(result => setItems(Object.values(result.items)));
    });
    return (
        <>
            <ul className={styles.ul}>
                {items && items.map((item) => <MainItem key={item.id} item={item} />)}
            </ul>
        </>
    );
};

export default MainItemsPage;