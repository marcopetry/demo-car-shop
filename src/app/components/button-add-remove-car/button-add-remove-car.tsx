'use client'

import { Product } from '@/app/products/products.types'
import { useCarShop } from '@/hooks/useCardShop'

type ButtonAddRemoveCarProps = {
  product: Product
}

export const ButtonAddRemoveCar = ({ product }: ButtonAddRemoveCarProps) => {
  const { addProduct, getItemAmount, removeItem } = useCarShop()
  const hasProductInCar = !!getItemAmount(product.id)
  return (
    <button
      className={`mt-10 block w-full rounded-md ${hasProductInCar ? 'bg-red-500' : 'bg-lime-500'} px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600`}
      onClick={() => {
        if (hasProductInCar) {
          removeItem(product.id)
        } else {
          addProduct(product)
        }
      }}
    >
      {hasProductInCar ? 'Remover do carrinho' : 'Adicionar no carrinho'}
    </button>
  )
}
