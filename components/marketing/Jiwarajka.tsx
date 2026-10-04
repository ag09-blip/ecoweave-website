export default function Jiwarajka() {
  return (
    <section style={{ background: 'var(--sand)', padding: '3rem 5rem', borderTop: '1px solid var(--rule)' }} id="jiwarajka">
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'start' }}>

        {/* Left: intro */}
        <div>
          <div style={{ fontSize: '.56rem', fontWeight: '500', letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--ink-light)', marginBottom: '.45rem' }}>Yarn Source · CSR Supply</div>
          <h3 style={{ fontSize: 'clamp(1.3rem,2.5vw,2rem)', fontWeight: '300', fontFamily: 'var(--h)' }}>Where our <em>CiCLO®</em> yarn comes from.</h3>
          <p style={{ fontSize: '.88rem', color: 'var(--ink-mid)', lineHeight: '1.85', fontWeight: '300', marginTop: '1rem', marginBottom: '1rem' }}>Jiwarajka Textile Industries is a polyester yarn manufacturer that partnered with CiCLO® technology in April 2025. Jiwarajka supplies the CiCLO® yarn to us through its CSR (corporate social responsibility) work.</p>
          <p style={{ fontSize: '.88rem', color: 'var(--ink-mid)', lineHeight: '1.85', fontWeight: '300', marginBottom: '1.75rem' }}>EcoWeave doesn&apos;t make or sell yarn. What we do is take that yarn and redistribute it to the artisans who weave our rugs.</p>
          <a href="https://www.jiwarajka.com/jiwarajka-partners-with-ciclo-technology-to-advance-eco-conscious-textiles"
             target="_blank" rel="noopener"
             style={{ display: 'inline-flex', alignItems: 'center', gap: '.6rem', background: 'var(--ink)', color: '#fff', padding: '.78rem 1.6rem', fontFamily: 'var(--b)', fontSize: '.73rem', fontWeight: '500', letterSpacing: '.07em', textTransform: 'uppercase', textDecoration: 'none' }} className="btn-ink">
            Read the Jiwarajka × CiCLO® Story ↗
          </a>
        </div>

        {/* Right: how it works */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1px', background: 'var(--rule)' }}>
          <div style={{ fontSize: '.58rem', fontWeight: '500', letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--ink-light)', padding: '.9rem 1.25rem', background: 'var(--sand)' }}>How the yarn gets to the weavers</div>

          <div style={{ background: 'var(--paper)', padding: '1.25rem' }}>
            <div style={{ fontSize: '.62rem', color: 'var(--sage)', fontWeight: '500', marginBottom: '.25rem' }}>🧵 1. Jiwarajka supplies the yarn</div>
            <p style={{ fontSize: '.73rem', color: 'var(--ink-mid)', lineHeight: '1.6', fontWeight: '300' }}>CiCLO® yarn comes to us through Jiwarajka&apos;s CSR work.</p>
          </div>
          <div style={{ background: 'var(--cream)', padding: '1.25rem' }}>
            <div style={{ fontSize: '.62rem', color: 'var(--terra)', fontWeight: '500', marginBottom: '.25rem' }}>🔁 2. EcoWeave redistributes it</div>
            <p style={{ fontSize: '.73rem', color: 'var(--ink-mid)', lineHeight: '1.6', fontWeight: '300' }}>We pass the yarn on to the artisans who weave the rugs.</p>
          </div>
          <div style={{ background: 'var(--paper)', padding: '1.25rem' }}>
            <div style={{ fontSize: '.62rem', color: 'var(--sage)', fontWeight: '500', marginBottom: '.25rem' }}>🤝 3. We&apos;re independent</div>
            <p style={{ fontSize: '.73rem', color: 'var(--ink-mid)', lineHeight: '1.6', fontWeight: '300' }}>EcoWeave is a student-run project. Jiwarajka supports the yarn supply only — it isn&apos;t responsible for our rugs, prices or claims.</p>
          </div>
        </div>

      </div>
    </section>
  )
}
