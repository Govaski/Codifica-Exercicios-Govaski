import { useEffect, useState } from 'react'
import { simulateFetch } from './api/ProductCardApi'
import { useTheme } from '../../contexts/Theme'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import styled from 'styled-components'

const Button = styled.button`
    border: 0;
    padding: .25em;
    border-radius: 3px;
    margin-top: 1em;
`


export default function ProductCard(props) {
    const [product, setProduct] = useState({})
    const [loading, setLoading] = useState(true)

    const { theme, themeStyle } = useTheme()

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await simulateFetch(parseInt(props.id))
                setProduct(data)
            } catch (error) {
                console.log(error)
            } finally {
                setLoading(false)
            }
        }

        fetchData()
    }, [])

    const img = {
        width: "200px",
        height: "200px",
        objectFit: "cover"
    }


let Card = styled.div`
        display: grid;
        grid-template-columns: auto;
        width: 250px;
        justify-content: center;
        padding: 1em;
        background-color: ${themeStyle.bg2};
        &:hover{
        transform: scale(1.01);
        }
    `

    return (
        <>
            <SkeletonTheme baseColor={theme == 'dark' ? '#202020' : 'white'} highlightColor={theme == 'dark' ? '#444' : 'lightgray'}>
                {
                    <Card>
                        {!loading == true ? <img src={product.img} style={img} /> : <Skeleton height={'200px'} width={'200px'} />}
                        <h3>{product.title || <Skeleton />}</h3>
                        <p>{!loading == true ? 'R$' : null}{product.price || <Skeleton />}</p>
                        <p>{!loading == true ? '★' : null}{product.rating || <Skeleton />}</p>
                        {product.new == true ? <p>NOVO</p> : null}
                        {product.promo == true ? <p>PROMO</p> : null}
                        <Button>Adicionar</Button>
                    </Card>
                }
            </SkeletonTheme>
        </>
    )
}