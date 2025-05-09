import './CallToAction.css'
import { socialLinks } from '@/data/links'
import { ContactDetails } from '../contact/ContactDetails'

export function CallToAction() {
    const [whatsappIcon, _, facebookIcon, instagramIcon, tiktokIcon] = socialLinks
    const links = [facebookIcon, instagramIcon, tiktokIcon]

    return (
        <section className="call-to-action full rtl">
            <p className="large bold p-regular">סקרנים לדעת מה עוד אומרים עליכם המספרים?</p>
            <p className="large">בואו נדבר 👇</p>

            <ContactDetails whatsappIcon={whatsappIcon} />

            <hr />

            <p className="p-regular">מוזמנים לעקוב אחריי ברשתות לתוכן איכותי ומעצים </p>
            <ul className="colorful-social-links">
                {
                    links.map((link, i) =>
                        <li className="icon-container" key={i}>
                            <a
                                href='https://www.facebook.com/share/1AUEkc1GNx/?mibextid=wwXIfr'
                                target="_blank"
                                rel="noopener noreferrer">
                                {link.icon}
                            </a>
                        </li>
                    )}
            </ul>

            <p className="all-rights-reserved">© כל הזכויות שמורות לורד בן דוד</p>
        </section>
    )
}