import { Product } from '@/app/products/products.types'
import Image from 'next/image'
import { ButtonAddRemoveCar } from '../button-add-remove-car'
import { ProductItemAction } from '../product-item/product-item-actions'
import { ProductCar } from '@/hooks/useCardShop'

type ProductCarShopProps = {
  item: ProductCar
}

export const ProductCarShop = ({ item }: ProductCarShopProps) => {
  const { product } = item
  const totalProduct = product.price * item.amount
  return (
    <div className="flex justify-end">
      <div className="rounded-2xl bg-gray-50 py-10 ring-1 ring-inset ring-gray-900/5 m-5 w-1/3">
        <div className="px-8 flex items-center gap-5 justify-between">
          <div className="flex items-center gap-5">
            <Image src={product.image} alt={product.title} width={50} height={50} />
            <div className="w-16">
              <span className="text-lg font-bold tracking-tight text-gray-900">{product.price.toFixed(2)}</span>
              <span className="text-xs font-semibold leading-6 tracking-wide text-gray-600">R$</span>
            </div>
          </div>

          <div className="flex gap-3 items-center">
            <ProductItemAction product={product} />
            <span className="text-lg font-bold tracking-tight text-gray-900">Total: </span>
            <span className="text-lg font-bold tracking-tight text-gray-900">{totalProduct.toFixed(2)}</span>
            <span className="text-xs font-semibold leading-6 tracking-wide text-gray-600">R$</span>
          </div>
        </div>
      </div>
    </div>
  )
}
