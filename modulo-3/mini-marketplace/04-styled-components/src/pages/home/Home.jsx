import '../../app/styles/global.css'
import Header from '../../components/header/Header'
import ProductGrid from '../../components/productGrid/productGrid'
import styled from 'styled-components'
import { useTheme } from '../../contexts/Theme'

export default function Home() {
    const {theme, themeStyle} = useTheme() 
    
    let Main = styled.main`
        padding-top: 50px;
        background-color: ${themeStyle.bg};
        color: ${themeStyle.fg}
    `

    const centered = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    }

    return ( 
        <>
            <Header/>
            <Main> 
                <h1 style={{margin: ".5em"}}>HOME (Styled Components)</h1>
                <div style={centered}>
                    <ProductGrid/>
                </div>
            </Main>
        </>
    )
}