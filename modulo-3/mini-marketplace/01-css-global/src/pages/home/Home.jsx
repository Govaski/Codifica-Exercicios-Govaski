import Header from '../../components/header/Header'
import ProductGrid from '../../components/productGrid/productGrid'

export default function Home() {
    return ( 
        <>
            <Header/>
            <main> 
                <h1 className="title">HOME (CSS Global)</h1>
                <div className="centered">
                    <ProductGrid/>
                </div>
            </main>
        </>
    )
}