import { Product } from '@/app/products/products.types'
import Image from 'next/image'
import { ButtonAddRemoveCar } from '../button-add-remove-car'

type ProductCardProps = {
  product: Product
}

export const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <li
      key={product.id}
      className="flex gap-x-6 py-5 flex-col justify-between border-gray-400 border-2 rounded-md h-500 w-full p-4"
    >
      <div className="flex gap-x-4 flex-col justify-center">
        <a href={`/products/${product.id}`} className="cursor-pointer">
          <Image
            className="h-40 w-40 flex-none bg-gray-50 block"
            src={product.image}
            alt={product.title}
            width={400}
            height={400}
          />
          <div className="min-w-0 flex-auto">
            <p className="text-sm font-semibold leading-6 text-gray-900">{product.title}</p>
            <p className="mt-1 truncate text-xs leading-5 text-gray-500">{product.description}</p>
          </div>
        </a>
      </div>
      <div className="hidden shrink-0 sm:flex sm:flex-col">
        <p className="text-sm leading-6 text-gray-900">{product.category}</p>
        <div className="mt-1 flex items-center gap-x-1.5">
          <div className="flex-none rounded-full bg-emerald-500/20 p-1">
            <div className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
          </div>
          <p className="text-xs leading-5 text-gray-500">{product.price.toFixed(2)}</p>
        </div>
      </div>
      <ButtonAddRemoveCar product={product} />
    </li>
  )
}
