import Link from 'next/link'

export default function SiteFooter({ isLoggedIn }: { isLoggedIn: boolean }) {
  return (
    <footer>
      <div className="fgd">
        <div>
          <Link href="/" className="flogo">
            Eco<em>Weave</em>™
          </Link>
          <p className="fdesc">
            Handmade rugs made with CiCLO® biodegradable technology.
            <br />
            Student-founded. Artisan-made. Planet-first.
            <br />
            <br />
            🌿 ecoweave.in · aarav@ecoweave.in
            <br />
            terawaarp@gmail.com
          </p>
        </div>

        <div>
          <h4>Products</h4>
          <ul>
            <li>
              <a href="#products">Handmade Rugs</a>
            </li>
          </ul>
        </div>

        <div>
          <h4>Platform</h4>
          <ul>
            <li>
              <a href="#platform">Our Artisans</a>
            </li>
            <li>
              <a href="#impact">Impact</a>
            </li>
            <li>
              <a href="#solution">CiCLO® Science</a>
            </li>
            <li>
              <Link
                href={isLoggedIn ? '/dashboard' : '/join'}
                style={{ color: 'var(--sage-l)' }}
              >
                Weaver Connect ↗
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4>Company</h4>
          <ul>
            <li>
              <a href="#duo">About Us</a>
            </li>
            <li>
              <a href="mailto:aarav@ecoweave.in">Contact</a>
            </li>
            <li>
              <Link href={isLoggedIn ? '/dashboard' : '/login'}>
                {isLoggedIn ? 'My Account' : 'Log In'}
              </Link>
            </li>
            <li>
              <Link href="/privacy">Privacy Policy</Link>
            </li>
            <li>
              <Link href="/terms">Terms of Service</Link>
            </li>
            <li>
              <a
                href="https://ciclotextiles.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                CiCLO® Website
              </a>
            </li>
            <li>
              <a
                href="https://www.jiwarajka.com/jiwarajka-partners-with-ciclo-technology-to-advance-eco-conscious-textiles"
                target="_blank"
                rel="noopener noreferrer"
              >
                Jiwarajka × CiCLO® ↗
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="fbot">
        <span>© 2026 EcoWeave™ · ecoweave.in · All rights reserved</span>
        <span>Made in India with 🌿 and CiCLO® Technology</span>
      </div>
    </footer>
  )
}
