import { Outlet } from 'react-router-dom';
import styles from './app.module.css';
import Header from './components/header/header';
import { CartContextProvider } from './context/cart_context';
import { InterestContextProvider } from './context/interested';


export default function App() {

  return (
    <>
      <InterestContextProvider>
        <CartContextProvider>
          <div className={styles.app}>
            <Header />
            <Outlet />
          </div>
        </CartContextProvider>
      </InterestContextProvider>
    </>
  );
}
