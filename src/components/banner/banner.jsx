import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './banner.module.css';
const Banner = (props) => {
    const navigate = useNavigate();
    return (
        <section onClick={() => navigate('/')} className={styles.section}>
            <img src='/imgs/banner1.jpg' alt='banner_img' className={styles.banner} />
        </section>
    );
};

export default Banner;