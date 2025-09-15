import Header from '../../components/header/Header'
import ProductGrid from '../../components/productGrid/productGrid'

export default function Home() {
    return ( 
        <>
            <Header/>
            <main> 
                <h1 className="text-4xl my-3">HOME (Tailwind)</h1>
                <div className="flex justify-center items-center">
                    <ProductGrid/>
                </div>
            </main>
        </>
    )
}