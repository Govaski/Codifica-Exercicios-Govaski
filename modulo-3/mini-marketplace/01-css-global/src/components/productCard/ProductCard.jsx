import { useEffect, useState } from 'react'
import {simulateFetch} from './api/ProductCardApi'
import {useTheme} from '../../contexts/Theme'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import '../../app/styles/global.css'

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
            <div className={`card ${theme == 'light' ? "cardLight" : "cardDark"}`}>
            {!loading == true ? <img src={product.img} className="img"/> : <Skeleton height={'200px'} width={'200px'}/>}
            <h3>{product.title || <Skeleton/>}</h3>
            <p>{!loading == true ? 'R$' : null }{product.price || <Skeleton/>}</p>
            <p>{!loading == true ? '★' : null }{product.rating || <Skeleton/>}</p>
            {product.new == true ? <p>NOVO</p> : null}
            {product.promo == true ? <p>PROMO</p> : null}
            <button className={`"button" ${theme == 'light' ? "buttonLight" : "buttonDark"}`}>Adicionar</button>
        </div> 
        }
        </SkeletonTheme>
        </>
    )
}