import SafeImg from '@/components/SafeImg'

export default function Platform() {
  return (
    <section className="platform" id="platform">
      <div className="platform-grid">
        <div className="platform-img-wrap">
          <SafeImg className="platform-img"
               src="/images/platform-weaver-at-loom.jpg"
               alt="Indian weaver at loom"
                />
          <div className="platform-img-bg" style={{ display: 'none' }}>🧵</div>
          <div className="platform-img-overlay"></div>

        </div>
        <div className="platform-text">
          <div className="stag green">The Artisan Platform</div>
          <h2>Craft meets<br /><em>science.</em><br />Poverty meets<br />opportunity.</h2>
          <p>EcoWeave™ is more than a product line — it's an economic model. We take the CiCLO® yarn that Jiwarajka supplies through its CSR work and redistribute it to weavers directly, so artisans can make rugs for a market that cares about biodegradable materials.</p>
          <p>Our goal is for weavers using CiCLO® certified yarn to earn more than they would on commodity polyester — that's the whole point of this project.</p>
          <div className="cluster-grid">
            <div className="cluster"><h4>📍 Panipat, Haryana</h4><p>India's home textile capital. Weavers and workshops moving toward CiCLO® certified production.</p></div>
            <div className="cluster"><h4>📍 Jaipur, Rajasthan</h4><p>Block print and weaving artisans. Ancient craft techniques on next-generation biodegradable substrate.</p></div>
          </div>
        </div>
      </div>
    </section>
  )
}
