export default function Founder() {
  return (
    <section className="founder" id="founder">
      <div className="stag green">Meet the Founder</div>
      <h2>Born in Jaipur.<br />Built for the <em>weavers.</em></h2>
      <div className="fgrid">
        <div className="fprofile">
          <div className="favatar">
            <img src="/images/aarav-avatar.jpg" alt="Aarav Gupta" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top' }} />
          </div>
          <div className="fn">Aarav Gupta</div>
          <div className="fr">Founder &amp; Managing Head · EcoWeave™ · Class of 2026<br />Jayshree Periwal International School, Jaipur</div>
          <div className="ftags">
            <span className="ftag">🌿 High School Founder</span>
            <span className="ftag">CiCLO® India Partner</span>
            <span className="ftag">First in India</span>
            <span className="ftag">Social Entrepreneur</span>
            <span className="ftag">Jaipur, Rajasthan</span>
          </div>
        </div>
        <div>
          <blockquote>"EcoWeave was born from the belief that true sustainability must be economically viable for the producer — or it simply won't last."</blockquote>
          <div className="fbio-section"><div className="fbio-label">The Origin</div><p className="fbio">I'm Aarav Gupta. Growing up in Jaipur — a city built around centuries-old textile traditions — I watched local artisans abandon sustainable heritage fabrics for cheap synthetics just to make ends meet. Around the same time, I came across research on the microplastic crisis these synthetics were causing worldwide, and it stuck with me.</p></div>
          <div className="fbio-section"><div className="fbio-label">The Discovery</div><p className="fbio">I discovered CiCLO® technology — a patented biodegradable fibre additive already used by brands like Target, Walmart, Best Western Hotels and Billabong — and realised no Indian home textile brand had adopted it yet. EcoWeave™ was my answer: bring CiCLO® to India, prove it can work commercially, then open it up to any weaver who wants a better rate and a product worth talking about.</p></div>
          <div className="fbio-section"><div className="fbio-label">Why Not an NGO</div><p className="fbio">A charity model creates dependency, not something that lasts on its own. So EcoWeave™ is built around two simple ideas: getting CiCLO® technology into artisan supply chains, and building a way to sell the resulting products directly to buyers who care about where their textiles come from. The technology makes the economics work. The economics are what make the sustainability stick.</p></div>
        </div>
      </div>
    </section>
  )
}
