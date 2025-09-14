import { useEffect, useState } from 'react'
import styles from './ProductCard.module.css'
import {simulateFetch} from './api/ProductCardApi'
import {useTheme} from '../../contexts/Theme'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

export default function ProductCard (props) {
    const [product, setProduct] = useState({})
    const [loading, setLoading] = useState(true)

    const {theme} = useTheme()

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await simulateFetch(parseInt(props.id))
                setProduct(data)
            } catch (error) {
                console.log(error)
            } finally{
                setLoading(false)
            }
        }

        fetchData()
    }, [])


    return (
        <>
        <SkeletonTheme baseColor={theme == 'dark' ? '#202020' : 'white'} highlightColor={theme == 'dark' ? '#444' : 'lightgray'}> 
        {
            <div className={`${styles.card} ${theme == 'light' ? styles.cardLight : styles.cardDark}`}>
            {!loading == true ? <img src={product.img} className={styles.img}/> : <Skeleton height={'200px'} width={'200px'}/>}
            <h3>{product.title || <Skeleton/>}</h3>
            <p>{!loading == true ? 'R$' : null }{product.price || <Skeleton/>}</p>
            <p>{!loading == true ? '★' : null }{product.rating || <Skeleton/>}</p>
            {product.new == true ? <p>NOVO</p> : null}
            {product.promo == true ? <p>PROMO</p> : null}
            <button className={`${styles.button} ${theme == 'light' ? styles.buttonLight : styles.buttonDark}`}>Adicionar</button>
        </div> 
        }
        </SkeletonTheme>
        </>
    )
}