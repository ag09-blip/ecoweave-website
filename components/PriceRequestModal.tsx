'use client'

import { useActionState, useEffect } from 'react'
import { sendPriceRequest, type RequestState } from '@/app/request/actions'

export type RequestItem = { name: string; qty: number }

export default function PriceRequestModal({
  items,
  onClose,
}: {
  items: RequestItem[]
  onClose: () => void
}) {
  const [state, action, pending] = useActionState<RequestState, FormData>(
    sendPriceRequest,
    null
  )

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [onClose])

  const v = state?.values ?? {}

  return (
    <div
      className="rq-overlay"
      role="dialog"
      aria-modal="true"
      aria-label="Request a price"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="rq-box">
        <button type="button" className="rq-close" aria-label="Close" onClick={onClose}>
          ×
        </button>
        <div className="stag green">Price Request</div>
        <h3>Ask us for a price</h3>
        <p className="rq-sub">
          This isn&apos;t a checkout. Fill in your details and we&apos;ll email
          you the price and how to order.
        </p>

        <ul className="rq-items">
          {items.map((i) => (
            <li key={i.name}>
              {i.name}
              {i.qty > 1 ? ` × ${i.qty}` : ''}
            </li>
          ))}
        </ul>

        {state?.success ? (
          <>
            <div className="msg msg-ok">{state.success}</div>
            <button type="button" className="btn btn-sage" onClick={onClose}>
              Close
            </button>
          </>
        ) : (
          <form action={action}>
            <input type="hidden" name="items" value={JSON.stringify(items)} />
            {/* honeypot — real users never see/fill this */}
            <input
              type="text"
              name="website"
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
              style={{ position: 'absolute', left: '-9999px' }}
            />
            {state?.error && <div className="msg msg-error">{state.error}</div>}

            <div className="field">
              <label htmlFor="rq-name">Your name *</label>
              <input id="rq-name" name="name" required defaultValue={v.name} />
            </div>
            <div className="field">
              <label htmlFor="rq-email">Email *</label>
              <input id="rq-email" name="email" type="email" required defaultValue={v.email} />
            </div>
            <div className="field-row">
              <div className="field">
                <label htmlFor="rq-phone">Phone</label>
                <input id="rq-phone" name="phone" type="tel" defaultValue={v.phone} />
              </div>
              <div className="field">
                <label htmlFor="rq-city">City</label>
                <input id="rq-city" name="city" defaultValue={v.city} />
              </div>
            </div>
            <div className="field">
              <label htmlFor="rq-msg">Anything else? (size, colour, quantity)</label>
              <textarea id="rq-msg" name="message" defaultValue={v.message} />
            </div>
            <button type="submit" className="btn btn-primary" disabled={pending}>
              {pending ? 'Sending…' : 'Send request'}
            </button>
          </form>
        )}
      </div>
    </div>
  )
}
