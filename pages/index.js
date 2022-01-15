import Head from 'next/head';
import Image from 'next/image';
import axios from 'axios';
import Featured from '../components/Featured';
import PizzaList from '../components/PizzaList';
import styles from '../styles/Home.module.css';

export default function Home({ pizzaList }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Pizza Restaurant</title>
        <meta name="description" content="World's famous Pizza" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Featured />
      <PizzaList pizzaList={pizzaList} />
    </div>
  );
}

//server side rendering to get all the data (prefetching)
export const getServerSideProps = async () => {
  const res = await axios.get('http://localhost:3000/api/products');
  return {
    props: {
      pizzaList: res.data,
    },
  };
};
