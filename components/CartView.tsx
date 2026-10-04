'use client'

import Link from 'next/link'
import { useState } from 'react'
import PriceRequestModal from '@/components/PriceRequestModal'
import SafeImg from '@/components/SafeImg'
import { useCart } from '@/lib/cart-context'
import { formatPrice } from '@/lib/products'

export default function CartView() {
  const {
    items,
    wishlist,
    removeFromCart,
    setQty,
    moveToWishlist,
    moveToCart,
    removeFromWishlist,
  } = useCart()

  const subtotalPaise = items.reduce(
    (sum, i) => sum + i.priceInPaise * i.qty,
    0
  )
  const hasUnpriced = items.some((i) => i.priceInPaise <= 0)
  const [requesting, setRequesting] = useState(false)

  return (
    <main className="cart-page" style={{ paddingTop: 'calc(65px + 3.5rem)' }}>
      <div style={{ padding: '0 5rem 2rem' }}>
        <div className="stag green">Your Bag</div>
        <h2>Your cart<br /><em>so far.</em></h2>
      </div>

      <div className="cart-wrap">
        <section>
          {items.length === 0 ? (
            <div className="cart-empty">
              <p>Your cart is empty right now.</p>
              <Link href="/#products" className="btn-p" style={{ marginTop: '1rem' }}>
                Browse the Collection
              </Link>
            </div>
          ) : (
            <div className="cart-list">
              {items.map((item) => (
                <div className="cart-row" key={item.id}>
                  <div className="cart-thumb">
                    <SafeImg src={item.img} alt={item.name} />
                    <div className="cart-thumb-bg" style={{ display: 'none' }}>🧵</div>
                  </div>
                  <div className="cart-info">
                    <div className="cart-name">{item.name}</div>
                    <div className="cart-unit">{item.unit}</div>
                    <div className="cart-row-actions">
                      <button type="button" onClick={() => moveToWishlist(item.id)}>
                        ♡ Add to Wishlist
                      </button>
                      <button type="button" onClick={() => removeFromCart(item.id)}>
                        Remove
                      </button>
                    </div>
                  </div>
                  <div className="cart-qty">
                    <button
                      type="button"
                      aria-label={`Decrease quantity of ${item.name}`}
                      onClick={() => setQty(item.id, item.qty - 1)}
                    >
                      −
                    </button>
                    <span>{item.qty}</span>
                    <button
                      type="button"
                      aria-label={`Increase quantity of ${item.name}`}
                      onClick={() => setQty(item.id, item.qty + 1)}
                    >
                      +
                    </button>
                  </div>
                  <div className="cart-price">
                    {item.priceInPaise > 0
                      ? formatPrice(item.priceInPaise * item.qty)
                      : formatPrice(0)}
                  </div>
                </div>
              ))}
            </div>
          )}

          {items.length > 0 && (
            <div className="cart-summary">
              <span>Subtotal</span>
              <strong>
                {hasUnpriced && subtotalPaise === 0
                  ? 'Price on request'
                  : formatPrice(subtotalPaise)}
              </strong>
              {hasUnpriced && subtotalPaise > 0 && (
                <span>+ items with price on request</span>
              )}
              {hasUnpriced && (
                <button
                  type="button"
                  className="btn btn-primary btn-auto"
                  onClick={() => setRequesting(true)}
                >
                  Request prices for my cart
                </button>
              )}
            </div>
          )}
        </section>

        <section className="wishlist-section">
          <div className="wishlist-head">Wishlist</div>
          {wishlist.length === 0 ? (
            <p className="wishlist-empty">
              Nothing saved yet — use the heart icon on a product, or move an
              item out of your cart above.
            </p>
          ) : (
            <div className="wishlist-list">
              {wishlist.map((item) => (
                <div className="wishlist-row" key={item.id}>
                  <div className="cart-thumb">
                    <SafeImg src={item.img} alt={item.name} />
                    <div className="cart-thumb-bg" style={{ display: 'none' }}>🧵</div>
                  </div>
                  <div className="cart-info">
                    <div className="cart-name">{item.name}</div>
                    <div className="cart-unit">{formatPrice(item.priceInPaise)} · {item.unit}</div>
                  </div>
                  <div className="cart-row-actions">
                    <button type="button" onClick={() => moveToCart(item.id)}>
                      Move to Cart
                    </button>
                    <button type="button" onClick={() => removeFromWishlist(item.id)}>
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>
      </div>
      {requesting && (
        <PriceRequestModal
          items={items.map((i) => ({ name: i.name, qty: i.qty }))}
          onClose={() => setRequesting(false)}
        />
      )}
    </main>
  )
}
