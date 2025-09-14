import Header from '../../components/header/Header'
import styles from './Home.module.css'
import ProductGrid from '../../components/productGrid/productGrid'

export default function Home() {
    return ( 
        <>
            <Header/>
            <main> 
                <h1 className={styles.title}>HOME (CSS Global)</h1>
                <div className={styles.centered}>
                    <ProductGrid/>
                </div>
            </main>
        </>
    )
}