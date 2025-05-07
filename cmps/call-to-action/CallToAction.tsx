import './CallToAction.css'
import { socialLinks } from '@/data/links'
import { TiktokIcon } from '@/data/links'
import { EnvelopeIcon } from '@/data/icons'
import { TelephoneIcon } from '@/data/icons'

export function CallToAction() {
    const [whatsappIcon, _, facebookIcon, instagramIcon] = socialLinks

    return (
        <section className="call-to-action full rtl">
            <p className="large bold p-regular">סקרנים לדעת מה עוד אומרים עליכם המספרים?</p>
            <p className="large">בואו נדבר 👇</p>

            <div className="contact-info">
                <a className="icon-container" href="https://wa.me/972523288279">
                    {whatsappIcon.icon}
                </a>
                <p className="contact-details">
                    <span className="contact-icon-container"><EnvelopeIcon /></span>
                    <span>vered.benda@gmail.com</span>
                </p>
                <p className="contact-details">
                    <span className="contact-icon-container"><TelephoneIcon /></span>
                    <span>052-3288279</span>
                </p>
            </div>

            <hr />

            <p className="p-regular">מוזמנים לעקוב אחריי ברשתות לתוכן איכותי ומעצים </p>
            <ul className="colorful-social-links">
                <li className="icon-container">
                    <a href="https://www.instagram.com/veredezr?igsh=a3h2eXphd2N2NHA3&utm_source=qr"> {instagramIcon.icon}</a>
                </li>
                <li className="icon-container">
                    {facebookIcon.icon}
                </li>
                <li className="icon-container">
                    <TiktokIcon />
                </li>
            </ul>

            <p className="all-rights-reserved">© כל הזכויות שמורות לורד בן דוד</p>
        </section>
    )
}