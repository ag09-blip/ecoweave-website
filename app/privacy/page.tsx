import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy — EcoWeave™',
}

export default function PrivacyPage() {
  return (
    <main className="legal-page">
      <Link href="/" className="auth-logo" style={{ marginBottom: '2.5rem' }}>
        Eco<em>Weave</em>
        <sup>™</sup>
      </Link>

      <h1>Privacy Policy</h1>
      <p className="legal-updated">Last updated: September 2026</p>

      <p>
        EcoWeave™ is a student-run project, and this page explains — in plain
        language — what happens to your information when you use this site.
      </p>

      <h2>What we collect</h2>
      <p>
        When you create an account, we collect your name, email address,
        password, and phone number if you give us one. If you apply to join
        the artisan platform, we also collect the details from that form
        (your craft, cluster, loom count, and so on). We use Supabase to
        store this data and handle logins — your password is never stored
        or seen by us in plain text.
      </p>

      <h2>Why we collect it</h2>
      <p>
        We use your account information to let you log in, track your
        artisan application status if you submit one, and show your order
        history in future. We don&apos;t use your data for anything beyond
        running the site.
      </p>

      <h2>What we don&apos;t do</h2>
      <p>
        We do not sell your data. We do not share it with advertisers or
        other companies. We do not use it for anything other than running
        EcoWeave™.
      </p>

      <h2>Price requests</h2>
      <p>
        If you use the &ldquo;Request price&rdquo; form, we collect the name,
        email, phone, city and message you type in, plus the rugs you picked.
        It is sent to us by email so we can reply with a quote. We use an
        email service (Resend) to deliver it, and we only use it to answer
        your request.
      </p>

      <h2>Cart &amp; wishlist</h2>
      <p>
        Items you add to your cart or wishlist are stored in your own
        browser (using localStorage), not on our servers, and not tied to
        your account. Clearing your browser data will clear them.
      </p>

      <h2>Your choices</h2>
      <p>
        You can ask us to delete your account and the data tied to it at
        any time by emailing us at{' '}
        <a href="mailto:aarav@ecoweave.in">aarav@ecoweave.in</a>.
      </p>

      <h2>Questions</h2>
      <p>
        If anything here is unclear, email{' '}
        <a href="mailto:aarav@ecoweave.in">aarav@ecoweave.in</a> and we&apos;ll
        answer directly — this is a small project, not a company with a
        legal department.
      </p>

      <Link href="/" className="auth-back">
        ← Back to Home
      </Link>
    </main>
  )
}
