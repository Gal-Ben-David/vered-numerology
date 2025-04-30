import './CallToAction.css'
import { socialLinksColorful } from '@/data/links'
import { socialLinks } from '@/data/links'
import { TiktokIcon } from '@/data/links'

export function CallToAction() {
    const [whatsappIcon, _, facebookIcon, instagramIcon] = socialLinks

    return (
        <section className="call-to-action full">
            <p className="rtl large bold">סקרנים לדעת מה עוד אומרים עליכם המספרים?</p>
            <p className="rtl large">בואו נדבר 👇</p>

            <div className="contact-info">
                <div className="icon-container">
                    {whatsappIcon.icon}
                </div>
                <p>vered.benda@gmail.com</p>
                <p>052-4294752</p>
            </div>

            <hr />

            <p>מוזמנים לעקוב אחריי ברשתות לתוכן איכות ומעצים </p>
            <ul className="colorful-social-links">
                <li className="icon-container">
                    {instagramIcon.icon}
                </li>
                <li className="icon-container">
                    {facebookIcon.icon}
                </li>
                <li className="icon-container">
                    <TiktokIcon />
                </li>
            </ul>
        </section>
    )
}