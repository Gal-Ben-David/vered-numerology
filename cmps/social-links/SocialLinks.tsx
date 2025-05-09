import { socialLinks } from "@/data/links"
import './SocialLinks.css'

export function SocialLinks() {
    const [...restLinks] = socialLinks.slice(0, -1)

    return (
        <ul className="social-link-list">
            {restLinks.map((link, i) =>
                <li key={i}>
                    <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="icon-container"
                    >
                        <div className="icon-wrapped">{link.icon}</div>
                        <div>{link.title}</div>
                    </a>
                </li>
            )}
        </ul>
    )
}