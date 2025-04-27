import './CallToAction.css'
import { socialLinksColorful } from '@/data/links'

export function CallToAction() {

    return (
        <section className="call-to-action full">
            <p className="rtl large">סקרנים לדעת מה המספרים אומרים עליכם?</p>
            <p className="rtl large">בואו נדבר 👇</p>

            <ul className="colorful-social-links">
                {
                    socialLinksColorful.map((link, i) =>
                        <li key={i}>
                            <a>
                                {link.icon}
                            </a>
                        </li>
                    )
                }
            </ul>
        </section>
    )
}