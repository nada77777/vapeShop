import React from 'react';
import Banner from '../../components/banner/banner';
import MainItemsPage from '../main_items_page/main_items_page';



const HomePage = (props) => {
    console.log('home');
    return (
        <>
            <Banner />
            <MainItemsPage />
        </>
    );
};

export default HomePage;