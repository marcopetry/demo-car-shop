import { Product } from '@/app/products/products.types'
import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'

type ProductCar = {
  product: Product
  amount: number
}

type CarShopState = {
  items: ProductCar[]
  addProduct: (product: Product) => void
  getItemAmount: (productId: number) => number
  increaseItem: (productId: number) => void
  decreaseItem: (productId: number) => void
  setAmount: (productId: number, amount: number) => void
  removeItem: (productId: number) => void
}

export const useCarShop = create<CarShopState>()(
  persist(
    (set, get) => {
      return {
        items: JSON.parse(localStorage.getItem('car-shop') ?? '[]'),
        addProduct: (product: Product) =>
          set((state) => ({
            items: [...state.items, { product, amount: 1 }],
          })),
        getItemAmount: (productId: number): number => {
          return get().items.find((item) => item.product.id === productId)?.amount ?? 0
        },
        increaseItem: (productId: number): void => {
          set((state) => ({
            items: state.items.map((item) => {
              if (item.product.id === productId) {
                return {
                  ...item,
                  amount: item.amount + 1,
                }
              }
              return item
            }),
          }))
        },
        decreaseItem: (productId: number): void => {
          set((state) => ({
            items: state.items
              .map((item) => {
                if (item.product.id === productId) {
                  return {
                    ...item,
                    amount: item.amount - 1,
                  }
                }
                return item
              })
              .filter((item) => !!item.amount),
          }))
        },
        setAmount: (productId: number, amount: number): void => {
          set((state) => ({
            items: state.items
              .map((item) => {
                if (item.product.id === productId) {
                  return {
                    ...item,
                    amount,
                  }
                }
                return item
              })
              .filter((item) => !!item.amount),
          }))
        },
        removeItem: (productId: number): void => {
          set((state) => ({
            items: state.items.filter((item) => item.product.id !== productId),
          }))
        },
      }
    },
    {
      name: 'car-shop',
      storage: createJSONStorage(() => localStorage),
    }
  )
)
