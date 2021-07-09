import Head from 'next/head'
import Image from 'next/image'
import wagon from '../public/wagon.png'
import logo from '../public/logo_1.png'

import { info } from '../pageData/index'

import styles from '../styles/Home.module.css'

export default function Home() {
    const menuItems = info.menu.map(menuItem => {
        return (
            <div className={styles.menuItem} key={menuItem.title}>
                <div className={styles.menuItem__textColumn}>
                    <div className={styles.menuItem__title}>{menuItem.title}</div>
                    <div className={styles.menuItem__recipe}>{menuItem.recipe}</div>
                    <div className={styles.menuItem__price}>Цена: {menuItem.price}</div>
                </div>
                <Image
                    src={'/' + menuItem.image}
                    className={styles.menuItem__image}
                    width={200}
                    height={200}
                    layout={"fixed"}
                />
            </div>
        )
    })

  return (
    <div className={styles.container}>
      <Head>
        <title>Friendzone Season menu</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <div className={styles.main}>
            <Image src={logo} className={styles.logo}/>
            <span className={styles.subtitle}>Season menu</span>

            <div className={styles.menuItemWrapper}>
                {menuItems}
            </div>
            <div className={styles.sun}/>
            <div className={styles.moon}/>
        </div>
      <footer className={styles.footer}>
        <Image src={wagon} className={styles.footer__image}/>
        <div className={styles.sea}/>
      </footer>
    </div>
  )
}
