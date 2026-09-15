import Link from 'next/link'
import { Paintbrush, Mail, Phone, MapPin } from 'lucide-react'
import {
  BUSINESS_NAME,
  TAGLINE,
  CONTACT_EMAIL,
  CONTACT_PHONE,
  BUSINESS_ADDRESS,
  SERVICES,
} from '@/lib/constants'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer role="contentinfo" className="bg-[#484848] text-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center gap-2">
              <Paintbrush className="h-8 w-8 text-[#FF5A5F]" />
              <span className="text-xl font-bold">{BUSINESS_NAME}</span>
            </Link>
            <p className="mt-4 max-w-md text-gray-300">{TAGLINE}</p>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold">Contact Us</h3>
            <ul className="mt-4 space-y-3">
              <li className="flex items-center gap-2 text-gray-300">
                <Mail className="h-4 w-4" />
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="hover:text-[#FF5A5F]"
                >
                  {CONTACT_EMAIL}
                </a>
              </li>
              <li className="flex items-center gap-2 text-gray-300">
                <Phone className="h-4 w-4" />
                <a
                  href={`tel:${CONTACT_PHONE}`}
                  className="hover:text-[#FF5A5F]"
                >
                  {CONTACT_PHONE}
                </a>
              </li>
              <li className="flex items-center gap-2 text-gray-300">
                <MapPin className="h-4 w-4" />
                <span>{BUSINESS_ADDRESS}</span>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold">Services</h3>
            <ul className="mt-4 space-y-2">
              {SERVICES.slice(0, 4).map((service) => (
                <li key={service.id}>
                  <Link
                    href="/services"
                    className="text-gray-300 hover:text-[#FF5A5F]"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 border-t border-gray-600 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-sm text-gray-400">
              © {currentYear} {BUSINESS_NAME}. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link
                href="/privacy"
                className="text-sm text-gray-400 hover:text-white"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-sm text-gray-400 hover:text-white"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
