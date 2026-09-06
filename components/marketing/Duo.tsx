export default function Duo() {
  return (
    <section className="pad" id="duo" style={{ background: 'var(--sand)' }}>
      <div className="stag green">The Co-Founders</div>
      <h2>Two siblings.<br />One <em>conviction.</em></h2>
      <p className="sec-lead" style={{ marginTop: '.75rem', marginBottom: '3.5rem' }}>EcoWeave was co-founded by Aarav and Navya Gupta — a brother and sister from Jaipur who share the belief that sustainable design must serve two masters equally: the planet, and the artisan who makes the product possible. Aarav leads the venture as Managing Head, running the CiCLO®/Jiwarajka partnership and the commercial side of things. Navya leads as Art Head, making sure every product is nice enough to actually want and honest enough to mean something.</p>

      {/* CO-FOUNDER CARDS — equal weight, side by side */}
      <div className="duo-grid" style={{ display: 'grid', gap: '1px', background: 'var(--rule)' }}>

        {/* AARAV — Left */}
        <div className="duo-card" style={{ background: 'var(--cream)', display: 'flex', flexDirection: 'column' }}>
          {/* Aarav Photo — height fixed karne ki jagah aspect-ratio fix kiya hai,
              taaki har screen size pe crop bilkul same dikhe. Pehle height:380px
              tha par card ki width screen ke saath badalti thi, isse container ka
              shape badal jaata aur object-fit:cover alag-alag crop dikhata. */}
          <div style={{ aspectRatio: '4 / 5', overflow: 'hidden', position: 'relative' }}>
            <img src="/images/aarav.jpg"
                 alt="Aarav Gupta — Co-Founder &amp; Managing Head, EcoWeave™"
                 style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 18%', display: 'block' }} />
            <div style={{ position: 'absolute', inset: '0', background: 'linear-gradient(to top,rgba(28,20,8,.55) 0%,transparent 55%)' }}></div>
            <div style={{ position: 'absolute', bottom: '1.5rem', left: '1.75rem', right: '1.75rem' }}>
              <div style={{ fontSize: '.55rem', fontWeight: '500', letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--sage-l)', marginBottom: '.3rem' }}>🌿 Co-Founder &amp; Managing Head</div>
              <div style={{ fontFamily: 'var(--h)', fontSize: '2rem', fontWeight: '400', color: '#fff', lineHeight: '1.05' }}>Aarav Gupta</div>
              <div style={{ fontSize: '.64rem', color: 'rgba(255,255,255,.65)', marginTop: '.2rem', fontWeight: '300' }}>Managing Head · Jaipur, Rajasthan</div>
            </div>
          </div>
          {/* Aarav writeup */}
          <div style={{ padding: '2.25rem 2.5rem', flex: '1', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <blockquote style={{ fontSize: '1.02rem', borderLeftColor: 'var(--sage)' }}>"EcoWeave was born from a simple conviction — that sustainable textiles must be economically superior for the producer, or they will never scale."</blockquote>
            <div>
              <div style={{ fontSize: '.56rem', fontWeight: '500', letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--sage)', marginBottom: '.38rem' }}>Leading the Mission</div>
              <p style={{ fontSize: '.84rem', color: 'var(--ink-mid)', lineHeight: '1.82', fontWeight: '300' }}>Aarav leads EcoWeave as Managing Head. He identified the microplastic crisis in synthetic home textiles, discovered CiCLO® technology, and built the artisan platform model from scratch — including getting Jiwarajka to make certified yarn available in small enough quantities for individual weavers to actually use.</p>
            </div>
            <div>
              <div style={{ fontSize: '.56rem', fontWeight: '500', letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--sage)', marginBottom: '.38rem' }}>The Commercial Case</div>
              <p style={{ fontSize: '.84rem', color: 'var(--ink-mid)', lineHeight: '1.82', fontWeight: '300' }}>Aarav's core insight: sustainability only sticks if the economics work for every person in the supply chain. EcoWeave proves this — CiCLO® certified weavers earn ₹114/metre instead of ₹88/metre for commodity polyester. The certification doesn't cost the weaver anything. It pays them.</p>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '.38rem', paddingTop: '1.25rem', borderTop: '1px solid var(--rule)', marginTop: 'auto' }}>
              <span style={{ background: 'var(--sand)', border: '1px solid var(--rule)', color: 'var(--ink-mid)', fontSize: '.59rem', fontWeight: '300', padding: '.2rem .55rem' }}>Mission &amp; Strategy</span>
              <span style={{ background: 'var(--sand)', border: '1px solid var(--rule)', color: 'var(--ink-mid)', fontSize: '.59rem', fontWeight: '300', padding: '.2rem .55rem' }}>CiCLO® Technology</span>
              <span style={{ background: 'var(--sand)', border: '1px solid var(--rule)', color: 'var(--ink-mid)', fontSize: '.59rem', fontWeight: '300', padding: '.2rem .55rem' }}>Artisan Platform</span>
              <span style={{ background: 'var(--sand)', border: '1px solid var(--rule)', color: 'var(--ink-mid)', fontSize: '.59rem', fontWeight: '300', padding: '.2rem .55rem' }}>Managing Head</span>
            </div>
          </div>
        </div>

        {/* NAVYA — Right */}
        {/* borderLeft hata diya — grid ka 1px gap pehle se hi divider bana raha
            tha, do line ban rahi thi aur ye card 1px patla ho jaata tha. */}
        <div className="duo-card" style={{ background: 'var(--cream)', display: 'flex', flexDirection: 'column' }}>
          {/* Navya photo — same 4/5 aspect-ratio (upar Aarav wala comment dekho). */}
          <div style={{ aspectRatio: '4 / 5', overflow: 'hidden', position: 'relative' }}>
            <img src="/images/navya.jpg"
                 alt="Navya Gupta — Co-Founder &amp; Art Head, EcoWeave™"
                 style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', display: 'block' }} />
            <div style={{ position: 'absolute', inset: '0', background: 'linear-gradient(to top,rgba(28,20,8,.5) 0%,transparent 55%)' }}></div>
            <div style={{ position: 'absolute', bottom: '1.5rem', left: '1.75rem', right: '1.75rem' }}>
              <div style={{ fontSize: '.55rem', fontWeight: '500', letterSpacing: '.12em', textTransform: 'uppercase', color: 'rgba(255,220,190,.9)', marginBottom: '.3rem' }}>✏️ Co-Founder &amp; Art Head</div>
              <div style={{ fontFamily: 'var(--h)', fontSize: '2rem', fontWeight: '400', color: '#fff', lineHeight: '1.05' }}>Navya Gupta</div>
              <div style={{ fontSize: '.64rem', color: 'rgba(255,255,255,.65)', marginTop: '.2rem', fontWeight: '300' }}>Art Head · Jaipur, Rajasthan</div>
            </div>
          </div>
          {/* Navya writeup */}
          <div style={{ padding: '2.25rem 2.5rem', flex: '1', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <blockquote style={{ fontSize: '1.02rem', borderLeftColor: 'var(--terra)' }}>"If I can make you fall in love with a rug or a tablecloth, I can guarantee the weaver behind it earns what they deserve. Design is the mechanism of that guarantee."</blockquote>
            <div>
              <div style={{ fontSize: '.56rem', fontWeight: '500', letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '.38rem' }}>Co-Founder &amp; Art Head</div>
              <p style={{ fontSize: '.84rem', color: 'var(--ink-mid)', lineHeight: '1.82', fontWeight: '300' }}>I co-founded EcoWeave because I wanted sustainability to actually look good, not just be responsible. My work starts with the artisans — the way they think about colour, the hand-memory built from years at the loom, their instinct for proportion. I try to bring that into designs that still feel current, so every piece is rooted in craft but doesn't look out of place in a modern home.</p>
            </div>
            <div>
              <div style={{ fontSize: '.56rem', fontWeight: '500', letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '.38rem' }}>Why Design Matters Here</div>
              <p style={{ fontSize: '.84rem', color: 'var(--ink-mid)', lineHeight: '1.82', fontWeight: '300' }}>A product nobody wants to buy doesn't help anyone, no matter how sustainable it is. When I make what our weavers produce look better — mixing traditional techniques with a more current look — it can sell for more, and that extra money goes back to the person who made it. That's why design matters here. It's not decoration. It's how the maker actually gets paid fairly.</p>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '.38rem', paddingTop: '1.25rem', borderTop: '1px solid var(--rule)', marginTop: 'auto' }}>
              <span style={{ background: 'var(--sand)', border: '1px solid var(--rule)', color: 'var(--ink-mid)', fontSize: '.59rem', fontWeight: '300', padding: '.2rem .55rem' }}>Sustainable Design</span>
              <span style={{ background: 'var(--sand)', border: '1px solid var(--rule)', color: 'var(--ink-mid)', fontSize: '.59rem', fontWeight: '300', padding: '.2rem .55rem' }}>Artisan Collaboration</span>
              <span style={{ background: 'var(--sand)', border: '1px solid var(--rule)', color: 'var(--ink-mid)', fontSize: '.59rem', fontWeight: '300', padding: '.2rem .55rem' }}>Heritage + Contemporary</span>
              <span style={{ background: 'var(--sand)', border: '1px solid var(--rule)', color: 'var(--ink-mid)', fontSize: '.59rem', fontWeight: '300', padding: '.2rem .55rem' }}>Product Design</span>
              <span style={{ background: 'var(--sand)', border: '1px solid var(--rule)', color: 'var(--ink-mid)', fontSize: '.59rem', fontWeight: '300', padding: '.2rem .55rem' }}>Art Head</span>
            </div>
          </div>
        </div>

      </div>

      {/* Shared conviction strip */}
      <div style={{ background: 'var(--sage)', padding: '1.75rem 3rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '2rem', flexWrap: 'wrap' }}>
        <div>
          <div style={{ fontSize: '.58rem', fontWeight: '500', letterSpacing: '.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,.55)', marginBottom: '.3rem' }}>Our shared conviction</div>
          <div style={{ fontFamily: 'var(--h)', fontSize: '1.25rem', fontWeight: '300', fontStyle: 'italic', color: '#fff', lineHeight: '1.4' }}>"Sustainability that doesn't work for the artisan isn't sustainability. It's aesthetics."</div>
        </div>
        <div style={{ display: 'flex', gap: '2.5rem', flexShrink: '0' }}>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontFamily: 'var(--h)', fontSize: '1.8rem', fontWeight: '300', color: '#fff', lineHeight: '1' }}>29%</div>
            <div style={{ fontSize: '.6rem', color: 'rgba(255,255,255,.55)', marginTop: '2px', fontWeight: '300' }}>Income uplift for artisans</div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontFamily: 'var(--h)', fontSize: '1.8rem', fontWeight: '300', color: '#fff', lineHeight: '1' }}>2</div>
            <div style={{ fontSize: '.6rem', color: 'rgba(255,255,255,.55)', marginTop: '2px', fontWeight: '300' }}>Active artisan clusters</div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontFamily: 'var(--h)', fontSize: '1.8rem', fontWeight: '300', color: '#fff', lineHeight: '1' }}>India's<br /><span style={{ fontSize: '1.2rem' }}>First</span></div>
            <div style={{ fontSize: '.6rem', color: 'rgba(255,255,255,.55)', marginTop: '2px', fontWeight: '300' }}>CiCLO® home textile brand</div>
          </div>
        </div>
      </div>

    </section>
  )
}
