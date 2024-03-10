import { Product } from '../products.types'
import { ProductItem } from '@/app/components/product-item'

export async function getProduct(id: string) {
  const data = await fetch(`https://fakestoreapi.com/products/${id}`)
  const products: Product = await data.json()

  return products
}

export default async function Example({ params }: { params: { productId: string } }) {
  const product = await getProduct(params.productId)

  return <ProductItem product={product} />
}
