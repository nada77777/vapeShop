import React from 'react';
import { BiSearchAlt2 } from 'react-icons/bi';
import { BsTwitter, BsFacebook, BsInstagram } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import styles from './header.module.css';
const Header = (props) => {
    const navigate = useNavigate();
    return (
        <header className={styles.header}>
            <div className={styles.icons}>
                <span className={styles.icon}>
                    <BsTwitter />
                </span>
                <span className={styles.icon}>
                    <BsFacebook />
                </span>
                <span className={styles.icon}>
                    <BsInstagram />
                </span>



            </div>
            <div className={styles.link}>
                <p>로그인</p>
                <p>회원가입</p>
                <p onClick={() => navigate('/cartPage')}>장바구니</p>
                <p onClick={() => navigate('/interested')}>관심상품</p>
                <form className={styles.form}>
                    <input type="text" />
                    <BiSearchAlt2 />
                </form>
            </div>
        </header>
    )
}

export default Header;