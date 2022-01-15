import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/PizzaCard.module.css';

function PizzaCard({ pizza }) {
  return (
    <div className={styles.container}>
      {/* <Image src="/img/pizza.png" alt="" width="500" height="500" /> */}
      {/* <h1 className={styles.title}>FIORI DI ZUCCA</h1> */}
      {/* <span className={styles.price}>$19.90</span>
      <p className={styles.desc}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </p> */}
      <Link href={`/product/${pizza._id}`} passHref>
        <Image src={pizza.img} alt="" width="500" height="500" />
      </Link>
      <h1 className={styles.title}>{pizza.title}</h1>
      <span className={styles.price}>${pizza.prices[0]}</span>
      <p className={styles.desc}>{pizza.desc}</p>
    </div>
  );
}

export default PizzaCard;
