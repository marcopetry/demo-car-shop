'use client'
import { MdAdd, MdRemove } from 'react-icons/md'
import { Product } from '@/app/products/products.types'
import { useCarShop } from '@/hooks/useCardShop'

type ProductItemActionProps = {
  product: Product
}

export const ProductItemAction = ({ product }: ProductItemActionProps) => {
  const { increaseItem, decreaseItem, getItemAmount, setAmount, addProduct } = useCarShop()

  const amountItem = getItemAmount(product.id)
  const handleAdd = () => {
    if (amountItem) {
      increaseItem(product.id)
    } else {
      addProduct(product)
    }
  }
  return (
    <div className="flex align-baseline justify-center gap-5">
      <button className="rounded-full p-2 bg-red-500" onClick={() => decreaseItem(product.id)}>
        <MdRemove size={24} />
      </button>
      <input
        className="w-14 border rounded-md pl-4"
        value={amountItem}
        type="number"
        onChange={(e) => setAmount(product.id, Number(e.target.value))}
      />
      <button className="rounded-full p-2 bg-green-500" onClick={handleAdd}>
        <MdAdd size={24} />
      </button>
    </div>
  )
}
