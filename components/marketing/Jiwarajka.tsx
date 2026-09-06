export default function Jiwarajka() {
  return (
    <section style={{ background: 'var(--sand)', padding: '3rem 5rem', borderTop: '1px solid var(--rule)' }} id="jiwarajka">
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'start' }}>

        {/* Left: intro */}
        <div>
          <div style={{ fontSize: '.56rem', fontWeight: '500', letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--ink-light)', marginBottom: '.45rem' }}>Supply Chain Partner · CiCLO® Certified Yarn</div>
          <h3 style={{ fontSize: 'clamp(1.3rem,2.5vw,2rem)', fontWeight: '300', fontFamily: 'var(--h)' }}>Jiwarajka × <em>CiCLO®</em> — the yarn partner behind every EcoWeave product.</h3>
          <p style={{ fontSize: '.88rem', color: 'var(--ink-mid)', lineHeight: '1.85', fontWeight: '300', marginTop: '1rem', marginBottom: '1.75rem' }}>Jiwarajka Textile Industries — one of India's leading polyester DTY manufacturers, with facilities in Daman and Silvassa — officially partnered with CiCLO® technology in April 2025. They're EcoWeave's certified yarn supplier: CiCLO® gets mixed into the polyester at the melt stage, and every batch comes with a Certificate of Authenticity. The reason this whole project works is that Jiwarajka agreed to sell that certified yarn in small enough quantities for artisans in Panipat and Sanganer to actually buy — not just big factories.</p>
          <a href="https://www.jiwarajka.com/jiwarajka-partners-with-ciclo-technology-to-advance-eco-conscious-textiles"
             target="_blank" rel="noopener"
             style={{ display: 'inline-flex', alignItems: 'center', gap: '.6rem', background: 'var(--ink)', color: '#fff', padding: '.78rem 1.6rem', fontFamily: 'var(--b)', fontSize: '.73rem', fontWeight: '500', letterSpacing: '.07em', textTransform: 'uppercase', textDecoration: 'none' }} className="btn-ink">
            Read the Jiwarajka × CiCLO® Story ↗
          </a>
        </div>

        {/* Right: 6 support pillars — compact */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1px', background: 'var(--rule)' }}>
          <div style={{ fontSize: '.58rem', fontWeight: '500', letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--ink-light)', padding: '.9rem 1.25rem', background: 'var(--sand)' }}>How Jiwarajka supports the EcoWeave initiative</div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1px', background: 'var(--rule)' }}>
            <div style={{ background: 'var(--paper)', padding: '1.25rem' }}>
              <div style={{ fontSize: '.62rem', color: 'var(--sage)', fontWeight: '500', marginBottom: '.25rem' }}>🧵 Yarn Access</div>
              <p style={{ fontSize: '.73rem', color: 'var(--ink-mid)', lineHeight: '1.6', fontWeight: '300' }}>Sells certified CiCLO® DTY in small enough order sizes for individual weaver clusters — the same yarn big brands use, just in quantities an artisan can actually order.</p>
            </div>
            <div style={{ background: 'var(--cream)', padding: '1.25rem' }}>
              <div style={{ fontSize: '.62rem', color: 'var(--terra)', fontWeight: '500', marginBottom: '.25rem' }}>📜 Certification</div>
              <p style={{ fontSize: '.73rem', color: 'var(--ink-mid)', lineHeight: '1.6', fontWeight: '300' }}>Issues a Certificate of Authenticity per yarn lot — the document that makes every EcoWeave CiCLO® claim independently traceable from fibre to finished product.</p>
            </div>
            <div style={{ background: 'var(--cream)', padding: '1.25rem' }}>
              <div style={{ fontSize: '.62rem', color: 'var(--terra)', fontWeight: '500', marginBottom: '.25rem' }}>🌍 Real Credibility</div>
              <p style={{ fontSize: '.73rem', color: 'var(--ink-mid)', lineHeight: '1.6', fontWeight: '300' }}>The same certified yarn used by Target, Walmart &amp; Billabong. Any buyer can trace an EcoWeave product back to a manufacturer with a real global track record.</p>
            </div>
            <div style={{ background: 'var(--paper)', padding: '1.25rem' }}>
              <div style={{ fontSize: '.62rem', color: 'var(--sage)', fontWeight: '500', marginBottom: '.25rem' }}>♻️ Dope-Dyed &amp; Circular</div>
              <p style={{ fontSize: '.73rem', color: 'var(--ink-mid)', lineHeight: '1.6', fontWeight: '300' }}>Offers dope-dyed CiCLO® variants — richer colour, less water — and maintains rPET recyclability. Recyclable when possible, biodegradable when not.</p>
            </div>
            <div style={{ background: 'var(--paper)', padding: '1.25rem' }}>
              <div style={{ fontSize: '.62rem', color: 'var(--sage)', fontWeight: '500', marginBottom: '.25rem' }}>🤝 Why They Said Yes</div>
              <p style={{ fontSize: '.73rem', color: 'var(--ink-mid)', lineHeight: '1.6', fontWeight: '300' }}>An established manufacturer chose to back a student-founded project — giving EcoWeave the scale and supply chain it needs to actually sell products, not just talk about them.</p>
            </div>
            <div style={{ background: 'var(--cream)', padding: '1.25rem' }}>
              <div style={{ fontSize: '.62rem', color: 'var(--terra)', fontWeight: '500', marginBottom: '.25rem' }}>🏭 20,000+ MT Capacity</div>
              <p style={{ fontSize: '.73rem', color: 'var(--ink-mid)', lineHeight: '1.6', fontWeight: '300' }}>Daman &amp; Silvassa facilities. ISO certified. Big enough that EcoWeave can grow well past this pilot without ever running out of yarn.</p>
            </div>
          </div>

          {/* Note: not a verbatim quote — Jiwarajka's April 2025 announcement didn't
              attribute a direct statement to the company, so this paraphrases what
              it said rather than presenting invented words as their own. */}
          <div style={{ background: 'var(--sage)', padding: '1.5rem 1.75rem' }}>
            <p style={{ fontSize: '.82rem', fontWeight: '300', color: '#fff', lineHeight: '1.7' }}>In its April 2025 announcement, Jiwarajka described the CiCLO® partnership as part of a broader shift toward circular, purpose-driven manufacturing — pairing new technology with the scale it already has in polyester yarn production.</p>
            <div style={{ fontSize: '.6rem', color: 'rgba(255,255,255,.45)', marginTop: '.5rem', fontWeight: '300' }}>— Paraphrased from Jiwarajka Textile Industries' CiCLO® partnership announcement, April 2025</div>
          </div>
        </div>

      </div>
    </section>
  )
}
