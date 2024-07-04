'use client'
import { useCarShop } from '@/hooks/useCardShop'
import { ProductCarShop } from '../components/product-car-shop'

const CarShop = () => {
  const { items } = useCarShop()
  return (
    <>
      {items.map((item) => (
        <ProductCarShop item={item} key={item.product.id} />
      ))}

      <button>Adicionar mais produtos</button>
    </>
  )
}

export default CarShop
