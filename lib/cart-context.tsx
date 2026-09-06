'use client'

/**
 * Cart + wishlist state — kept in localStorage, not Supabase.
 *
 * Products are hardcoded (lib/products.ts), there's no `orders` table yet,
 * and guests should be able to add to cart without logging in. A DB table
 * would need real checkout/auth wiring to be worth it; localStorage gives a
 * genuinely working cart with zero extra setup. Revisit this if EcoWeave
 * ever needs carts to follow a signed-in user across devices.
 */

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from 'react'

export type CartLineInput = {
  id: string
  name: string
  unit: string
  priceInPaise: number
  img: string
}

export type CartItem = CartLineInput & { qty: number }
export type WishlistItem = CartLineInput

type CartContextValue = {
  items: CartItem[]
  wishlist: WishlistItem[]
  cartCount: number
  addToCart: (product: CartLineInput) => void
  removeFromCart: (id: string) => void
  setQty: (id: string, qty: number) => void
  moveToWishlist: (id: string) => void
  moveToCart: (id: string) => void
  removeFromWishlist: (id: string) => void
  isWishlisted: (id: string) => boolean
  toggleWishlist: (product: CartLineInput) => void
}

const CartContext = createContext<CartContextValue | null>(null)

const CART_KEY = 'ecoweave_cart_v1'
const WISHLIST_KEY = 'ecoweave_wishlist_v1'

function readStorage<T>(key: string): T[] {
  if (typeof window === 'undefined') return []
  try {
    const raw = window.localStorage.getItem(key)
    return raw ? (JSON.parse(raw) as T[]) : []
  } catch {
    return []
  }
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([])
  const [wishlist, setWishlist] = useState<WishlistItem[]>([])
  const [hydrated, setHydrated] = useState(false)

  // Server render has no localStorage, so state starts empty and loads for
  // real right after mount — reading it during the initial render would
  // make the client's first pass disagree with the server-rendered HTML
  // (a hydration mismatch), which is worse than the extra render here.
  /* eslint-disable react-hooks/set-state-in-effect */
  useEffect(() => {
    setItems(readStorage<CartItem>(CART_KEY))
    setWishlist(readStorage<WishlistItem>(WISHLIST_KEY))
    setHydrated(true)
  }, [])
  /* eslint-enable react-hooks/set-state-in-effect */

  useEffect(() => {
    if (!hydrated) return
    try {
      window.localStorage.setItem(CART_KEY, JSON.stringify(items))
    } catch {}
  }, [items, hydrated])

  useEffect(() => {
    if (!hydrated) return
    try {
      window.localStorage.setItem(WISHLIST_KEY, JSON.stringify(wishlist))
    } catch {}
  }, [wishlist, hydrated])

  const addToCart = (product: CartLineInput) => {
    setItems((prev) => {
      const existing = prev.find((i) => i.id === product.id)
      if (existing) {
        return prev.map((i) =>
          i.id === product.id ? { ...i, qty: i.qty + 1 } : i
        )
      }
      return [...prev, { ...product, qty: 1 }]
    })
  }

  const removeFromCart = (id: string) => {
    setItems((prev) => prev.filter((i) => i.id !== id))
  }

  const setQty = (id: string, qty: number) => {
    if (qty < 1) {
      removeFromCart(id)
      return
    }
    setItems((prev) => prev.map((i) => (i.id === id ? { ...i, qty } : i)))
  }

  const addToWishlist = (product: CartLineInput) => {
    setWishlist((prev) =>
      prev.some((i) => i.id === product.id) ? prev : [...prev, product]
    )
  }

  const removeFromWishlist = (id: string) => {
    setWishlist((prev) => prev.filter((i) => i.id !== id))
  }

  const moveToWishlist = (id: string) => {
    const item = items.find((i) => i.id === id)
    if (!item) return
    removeFromCart(id)
    addToWishlist(item)
  }

  const moveToCart = (id: string) => {
    const item = wishlist.find((i) => i.id === id)
    if (!item) return
    removeFromWishlist(id)
    addToCart(item)
  }

  const isWishlisted = (id: string) => wishlist.some((i) => i.id === id)

  const toggleWishlist = (product: CartLineInput) => {
    if (isWishlisted(product.id)) removeFromWishlist(product.id)
    else addToWishlist(product)
  }

  const cartCount = items.reduce((sum, i) => sum + i.qty, 0)

  return (
    <CartContext.Provider
      value={{
        items,
        wishlist,
        cartCount,
        addToCart,
        removeFromCart,
        setQty,
        moveToWishlist,
        moveToCart,
        removeFromWishlist,
        isWishlisted,
        toggleWishlist,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error('useCart must be used within a CartProvider')
  return ctx
}
