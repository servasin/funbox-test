import Head from 'next/head'
import GoodItem from 'components/GoodItem'
import styles from 'styles/pages/Home.module.scss'
import goods from '../data'

export default function Home() {
  return (
    <div className={styles.background}>
      <Head>
        <title>Ты сегодня покормил кота?</title>
      </Head>

     <h1 className={styles.title}>Ты сегодня покормил кота?</h1>

     <div className={styles.goods}>
      {goods.map((good, i) => <GoodItem key={good.id} good={goods[i]}/>)}
     </div>

    </div>
  )
}
