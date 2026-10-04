'use server'

/**
 * Price request — buyer ka naam/email/details leke owner ko email bhejta hai.
 *
 * Email Resend (https://resend.com) ke through jaati hai. Ye teen env vars
 * chahiye (dekho .env.local.example):
 *   RESEND_API_KEY     — Resend dashboard se
 *   REQUEST_TO_EMAIL   — jis address pe requests aani chahiye
 *   REQUEST_FROM_EMAIL — (optional) default: onboarding@resend.dev
 */

export type RequestState = {
  error?: string
  success?: string
  values?: Record<string, string>
} | null

type Item = { name: string; qty: number }

const esc = (s: string) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')

export async function sendPriceRequest(
  _prev: RequestState,
  formData: FormData
): Promise<RequestState> {
  // Honeypot — bots ye hidden field bhar dete hain
  if (String(formData.get('website') ?? '')) {
    return { success: 'Thanks! Your request has been sent.' }
  }

  const name = String(formData.get('name') ?? '').trim()
  const email = String(formData.get('email') ?? '').trim()
  const phone = String(formData.get('phone') ?? '').trim()
  const city = String(formData.get('city') ?? '').trim()
  const message = String(formData.get('message') ?? '').trim()
  const values = { name, email, phone, city, message }

  let items: Item[] = []
  try {
    const parsed = JSON.parse(String(formData.get('items') ?? '[]'))
    if (Array.isArray(parsed)) {
      items = parsed
        .slice(0, 30)
        .map((i) => ({
          name: String(i?.name ?? '').slice(0, 120),
          qty: Math.max(1, Math.min(999, Number(i?.qty) || 1)),
        }))
        .filter((i) => i.name)
    }
  } catch {
    /* ignore */
  }

  if (!name || !email) {
    return { error: 'Please enter your name and email.', values }
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { error: 'Please enter a valid email address.', values }
  }
  if (phone && !/^[0-9+\s-]{7,15}$/.test(phone)) {
    return { error: 'Please enter a valid phone number.', values }
  }
  if (items.length === 0) {
    return { error: 'No rugs selected — please try again.', values }
  }
  if (message.length > 2000) {
    return { error: 'Message is too long (max 2000 characters).', values }
  }

  const apiKey = process.env.RESEND_API_KEY
  const to = process.env.REQUEST_TO_EMAIL
  if (!apiKey || !to) {
    console.error('Price request: RESEND_API_KEY / REQUEST_TO_EMAIL not set')
    return {
      error:
        'Sorry, requests are not switched on yet. Please email us directly instead.',
      values,
    }
  }

  const from = process.env.REQUEST_FROM_EMAIL || 'EcoWeave <onboarding@resend.dev>'
  const lines = items.map((i) => `${i.name} × ${i.qty}`)

  const text = [
    'New price request from the EcoWeave website',
    '',
    `Name: ${name}`,
    `Email: ${email}`,
    `Phone: ${phone || '—'}`,
    `City: ${city || '—'}`,
    '',
    'Rugs:',
    ...lines.map((l) => `  - ${l}`),
    '',
    `Message: ${message || '—'}`,
  ].join('\n')

  const html = `<h2>New price request</h2>
<p><b>Name:</b> ${esc(name)}<br><b>Email:</b> ${esc(email)}<br><b>Phone:</b> ${esc(phone || '—')}<br><b>City:</b> ${esc(city || '—')}</p>
<p><b>Rugs:</b></p><ul>${lines.map((l) => `<li>${esc(l)}</li>`).join('')}</ul>
<p><b>Message:</b><br>${esc(message || '—').replace(/\n/g, '<br>')}</p>`

  try {
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: email,
        subject: `Price request: ${items[0].name}${items.length > 1 ? ` +${items.length - 1} more` : ''} — ${name}`,
        text,
        html,
      }),
    })
    if (!res.ok) {
      console.error('Price request: Resend error', res.status, await res.text())
      return { error: 'Could not send your request. Please try again.', values }
    }
  } catch (e) {
    console.error('Price request failed', e)
    return { error: 'Could not send your request. Please try again.', values }
  }

  return {
    success: "Thanks! Your request has been sent — we'll email you with prices soon.",
  }
}
