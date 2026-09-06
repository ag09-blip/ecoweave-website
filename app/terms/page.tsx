import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service — EcoWeave™',
}

export default function TermsPage() {
  return (
    <main className="legal-page">
      <Link href="/" className="auth-logo" style={{ marginBottom: '2.5rem' }}>
        Eco<em>Weave</em>
        <sup>™</sup>
      </Link>

      <h1>Terms of Service</h1>
      <p className="legal-updated">Last updated: September 2026</p>

      <p>
        EcoWeave™ is a student-founded project selling CiCLO® certified home
        textiles and connecting artisan weavers to buyers. By creating an
        account or using this site, you&apos;re agreeing to the following.
      </p>

      <h2>Accounts</h2>
      <p>
        You need an account to check out, save a wishlist tied to your
        profile, or apply to the artisan platform. Keep your password
        private, and let us know if you think someone else has access to
        your account.
      </p>

      <h2>Products &amp; pricing</h2>
      <p>
        Product descriptions, prices, and availability on this site can
        change without notice. We&apos;ll always show you the price before
        you complete an order.
      </p>

      <h2>The artisan platform</h2>
      <p>
        If you apply to join as a weaver, submitting the form doesn&apos;t
        guarantee approval. We review applications and get in touch either
        way.
      </p>

      <h2>No guarantees</h2>
      <p>
        This is an early-stage, student-run project. We do our best to keep
        the site accurate and working, but we can&apos;t promise it will
        always be error-free or uninterrupted.
      </p>

      <h2>Changes</h2>
      <p>
        We may update these terms as the project grows. If we make a
        significant change, we&apos;ll update the date at the top of this
        page.
      </p>

      <h2>Contact</h2>
      <p>
        Questions about these terms can go to{' '}
        <a href="mailto:aarav@ecoweave.in">aarav@ecoweave.in</a>.
      </p>

      <Link href="/" className="auth-back">
        ← Back to Home
      </Link>
    </main>
  )
}
