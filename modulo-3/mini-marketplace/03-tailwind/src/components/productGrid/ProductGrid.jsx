import ProductCard from '../productCard/ProductCard'

export default function ProductGrid () {
    const productsList = [0, 1, 2, 3, 4, 5]

    return (
        <section className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {productsList.map((id)=> {
                return <ProductCard key={id} id={id}/>
            })}
        </section>
    )
}