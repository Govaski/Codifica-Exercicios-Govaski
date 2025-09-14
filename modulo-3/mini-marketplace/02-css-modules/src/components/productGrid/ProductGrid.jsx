import styles from './ProductGrid.module.css'
import ProductCard from '../productCard/ProductCard'

export default function ProductGrid () {
    const productsList = [0, 1, 2, 3, 4, 5]

    return (
        <section className={styles.productGrid}>
            {productsList.map((id)=> {
                return <ProductCard key={id} id={id}/>
            })}
        </section>
    )
}