import Image from 'next/image';
import Link from 'next/link';
import { useSelector } from 'react-redux';

import styles from '../styles/Navbar.module.css';

function Navbar() {
  const quantity = useSelector((state) => state.cart.quantity);
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.callButton}>
          <Image
            src="/img/telephone.png"
            alt="phone"
            width="32"
            height="32"
          ></Image>
        </div>
        <div className={styles.text}>Order</div>
        <div className={styles.text}>012 345 6666</div>
      </div>
      <div className={styles.item}>
        <ul className={styles.list}>
          <li className={styles.listItem}>Homepage</li>
          <li className={styles.listItem}>Products</li>
          <li className={styles.listItem}>Menu</li>
          <Image src="/img/logo.png" alt="logo" width="160px" height="69px" />
          <li className={styles.listItem}>Events</li>
          <li className={styles.listItem}>Blog</li>
          <li className={styles.listItem}>Contact</li>
        </ul>
      </div>
      <Link passHref href={'/cart'}>
        <div className={styles.item}>
          <div className={styles.cart}>
            <Image src="/img/cart.png" alt="logo" width="30px" height="30px" />
            <div className={styles.counter}>{quantity}</div>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default Navbar;
