'use client'

import { useState } from 'react'
import SafeImg from '@/components/SafeImg'
import { useCart } from '@/lib/cart-context'
import PriceRequestModal, { type RequestItem } from '@/components/PriceRequestModal'
import {
  PRODUCTS,
  CATEGORY_LABELS,
  formatPrice,
  type Product,
  type Category,
} from '@/lib/products'

const CATEGORIES = Object.keys(CATEGORY_LABELS) as Category[]

export default function Products() {
  const [active, setActive] = useState<Category>('rugs')
  const [toast, setToast] = useState<string | null>(null)
  const { addToCart, isWishlisted, toggleWishlist } = useCart()

  const [requestItems, setRequestItems] = useState<RequestItem[] | null>(null)

  const handleAddToCart = (p: Product) => {
    addToCart(p)
    setToast(`✓ Added to cart: ${p.name}`)
    window.setTimeout(() => setToast(null), 2500)
  }

  return (
    <section
      className="prod-sec"
      id="products"
      style={{ paddingTop: '5rem', paddingBottom: '5rem' }}
    >
      <div className="stag green">The EcoWeave™ Collection</div>
      <h2 style={{ fontSize: 'clamp(2.4rem,5vw,4.2rem)' }}>
        Every thread,
        <br />
        <em>intentional.</em>
      </h2>
      <p
        style={{
          fontSize: '.92rem',
          color: 'var(--ink-mid)',
          lineHeight: 1.85,
          fontWeight: 300,
          maxWidth: 540,
          margin: '1rem auto 2.5rem',
        }}
      >
        Each product is handwoven or handloomed, made with CiCLO® biodegradable
        polyester, and crafted by artisans in Panipat and Sanganer — where the
        yarn is certified and the premium you pay reaches the person who made
        it.
      </p>

      <p className="rq-note">
        <strong>How prices work:</strong> we haven&apos;t listed prices yet.
        Press &ldquo;Request price&rdquo; on any rug, enter your name and
        email, and we&apos;ll send you a quote. It&apos;s a request, not a
        checkout — you don&apos;t pay anything on this site.
      </p>

      {CATEGORIES.length > 1 && (
        <div className="cat-tabs">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              type="button"
              className={`ctab${active === cat ? ' active' : ''}`}
              onClick={() => setActive(cat)}
            >
              {CATEGORY_LABELS[cat]}
            </button>
          ))}
        </div>
      )}

      {CATEGORIES.map((cat) => (
        <div key={cat} className={`pcat${active === cat ? ' vis' : ''}`}>
          <div className="pgrid pgrid-5">
            {PRODUCTS[cat].map((p) => (
              <div className="pc" key={p.id}>
                <div className="piw">
                  <SafeImg
                    src={p.img}
                    alt={p.name}
                    loading="lazy"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      position: 'absolute',
                      inset: 0,
                    }}
                  />
                  <div className="pph" style={{ display: 'none' }}>
                    <span className="pph-icon">{p.icon}</span>
                  </div>
                  <span className="eco-badge">CiCLO®</span>
                  <button
                    type="button"
                    className="pwish"
                    aria-label={
                      isWishlisted(p.id)
                        ? `Remove ${p.name} from wishlist`
                        : `Add ${p.name} to wishlist`
                    }
                    aria-pressed={isWishlisted(p.id)}
                    onClick={() => toggleWishlist(p)}
                  >
                    {isWishlisted(p.id) ? '♥' : '♡'}
                  </button>
                </div>
                <div className="pb2">
                  <div className="pn">{p.name}</div>
                  <div className="pd">{p.desc}</div>
                  <div className="pf">
                    <span className="pp">{formatPrice(p.priceInPaise)}</span>
                    <span className="ptg">{p.unit}</span>
                    <button
                      type="button"
                      className="padd"
                      onClick={() => handleAddToCart(p)}
                    >
                      Add to Cart
                    </button>
                  </div>
                  {p.priceInPaise <= 0 && (
                    <button
                      type="button"
                      className="preq"
                      onClick={() => setRequestItems([{ name: p.name, qty: 1 }])}
                    >
                      Request price
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}

      {requestItems && (
        <PriceRequestModal
          items={requestItems}
          onClose={() => setRequestItems(null)}
        />
      )}

      {toast && (
        <div className="cart-toast" role="status">
          {toast}
        </div>
      )}
    </section>
  )
}
