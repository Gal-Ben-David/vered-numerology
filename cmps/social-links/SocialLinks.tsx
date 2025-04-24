import { socialLinks } from "@/data/links"
import './SocialLinks.css'

export function SocialLinks() {

    return (
        <ul className="social-link-list">
            {socialLinks.map((link, i) =>
                <li key={i}>
                    <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <div className="icon">{link.icon}</div>
                        <div>{link.title}</div>
                    </a>
                </li>
            )}
        </ul>
    )
}