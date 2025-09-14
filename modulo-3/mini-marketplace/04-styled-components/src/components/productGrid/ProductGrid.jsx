import ProductCard from '../productCard/ProductCard'
import styled from 'styled-components'


const ProductGridComp = styled.section`
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        gap: 1em;
    
        @media screen and (max-width: 1024px) {
         grid-template-columns: 1fr 1fr 1fr;
        }

        @media screen and (max-width: 768px) {
            grid-template-columns: 1fr 1fr;
        }   

        @media screen and (max-width: 480px) {
            grid-template-columns: 1fr;
        }
    `

export default function ProductGrid() {
    const productsList = [0, 1, 2, 3, 4, 5]

    return (
        <ProductGridComp>
            {productsList.map((id) => {
                return <ProductCard key={id} id={id} />
            })}
        </ProductGridComp>
    )
}