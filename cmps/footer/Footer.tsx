import './Footer.css'
import { EnvelopeIcon } from '@/data/icons'
import { TelephoneIcon } from '@/data/icons'

export function Footer() {
    return (
        <footer className="full">
            <p className="built-by">Built by Gal Ben David</p>

            <div className="gal-contact-info">
                <p className="contact-details">
                    <span>gal.benda3@gmail.com</span>
                </p>
                <span>|</span>
                <p className="contact-details">
                    <span>052-4294752</span>
                </p>
            </div>
        </footer>
    )
}