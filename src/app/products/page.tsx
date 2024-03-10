import { ProductCard } from '../components/product-card'
import { Product } from './products.types'

export async function getProducts() {
  const data = await fetch('https://fakestoreapi.com/products')
  const products: Product[] = await data.json()

  return products
}

export default async function Example() {
  const products = await getProducts()
  return (
    <ul
      role="list"
      className="m-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 place-items-center gap-5"
    >
      {products.map((product) => (
        <ProductCard product={product} key={product.id} />
      ))}
    </ul>
  )
}
