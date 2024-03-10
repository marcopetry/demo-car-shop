import { Product } from '@/app/products/products.types'
import { ProductItemAction } from './product-item-actions'
import Image from 'next/image'
import { ButtonAddRemoveCar } from '../button-add-remove-car'

type ProductItemProps = {
  product: Product
}

export const ProductItem = ({ product }: ProductItemProps) => {
  return (
    <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
      <div className="rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
        <div className="mx-auto max-w-xs px-8">
          <Image src={product.image} alt={product.title} width={400} height={400} />
          <p className="mt-6 flex items-baseline justify-center gap-x-2">
            <span className="text-5xl font-bold tracking-tight text-gray-900">{product.price.toFixed(2)}</span>
            <span className="text-sm font-semibold leading-6 tracking-wide text-gray-600">R$</span>
          </p>
          <ButtonAddRemoveCar product={product} />
          <ProductItemAction product={product} />
        </div>
      </div>
    </div>
  )
}
