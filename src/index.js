import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './page/home_page/home_page';
import MainItemsPage from './page/main_items_page/main_items_page';
import ItemDetailPage from './page/item_detail_page/item_detail_page';
import CartPage from './page/cart_page/cart_page';
import InterestedPage from './page/interested_page/interested_page';
import AppPrc from './appPrc';



const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, path: '/', element: <HomePage />, },
      { path: '/mainItems', element: <MainItemsPage />, },
      { path: '/ItemDetail/:id', element: <ItemDetailPage />, },
      { path: '/cartPage', element: <CartPage />, },
      { path: '/interested', element: <InterestedPage /> },
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  // <RouterProvider router={router} />
  <AppPrc />
  // {/* </React.StrictMode> */}
);
// 108.0.5359.71

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
