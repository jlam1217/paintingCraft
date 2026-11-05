import Link from 'next/link'
import {
  BUSINESS_NAME,
  CONTACT_EMAIL,
  CONTACT_PHONE,
  BUSINESS_ADDRESS,
} from '@/lib/constants'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer role="contentinfo" className="footer">
      <div className="footer__top">
        <div className="footer__invite">
          <h2>Ready to transform your space?</h2>
          <Link href="/contact" className="btn btn--light">
            Start a conversation
          </Link>
        </div>

        <ul className="footer__links">
          <li>
            <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
          </li>
          <li>
            <a href={`tel:${CONTACT_PHONE.replace(/[^\d+]/g, '')}`}>{CONTACT_PHONE}</a>
          </li>
          <li>{BUSINESS_ADDRESS}</li>
          <li>
            <Link href="/privacy">Privacy</Link>
            {' · '}
            <Link href="/terms">Terms</Link>
          </li>
        </ul>
      </div>

      <div className="footer__legal">
        <span>
          © {currentYear} {BUSINESS_NAME}
        </span>
        <span>Pictures from Wikimedia Commons</span>
      </div>

      <p className="footer__wordmark" aria-hidden="true">
        {BUSINESS_NAME}
      </p>
    </footer>
  )
}