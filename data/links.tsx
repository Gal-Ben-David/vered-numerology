import Image from "next/image";

const WhatsappIcon = () => (
    <Image
        src="/icons/whatsapp-icon.svg"
        alt="whatsapp"
        width={50}
        height={50}
        className="icon social-icon"
    />
)

const MobileIcon = () => (
    <Image
        src="/icons/telephone-icon.svg"
        alt="phone"
        width={50}
        height={50}
        className="icon social-icon"
    />
)

const InstagramIcon = () => (
    <Image
        src="/icons/instagram-icon.svg"
        alt="instagram"
        width={50}
        height={50}
        className="icon social-icon"
    />
)

const FacebookIcon = () => (
    <Image
        src="/icons/facebook-icon.svg"
        alt="facebook"
        width={50}
        height={50}
        className="icon social-icon"
    />
)

const WhatsappIconColorful = () => (
    <Image
        src="/icons/whatsapp-icon-color.svg"
        alt="whatsapp"
        width={50}
        height={50}
        className="icon"
    />
)

const FacebookIconColorful = () => (
    <Image
        src="/icons/facebook-icon-color.svg"
        alt="facebook"
        width={50}
        height={50}
        className="icon"
    />
)

const InstagramIconColorful = () => (
    <Image
        src="/icons/instagram-icon-color.svg"
        alt="instagram"
        width={50}
        height={50}
        className="icon"
    />
)

export const TiktokIcon = () => (
    <Image
        src="/icons/tiktok-icon.svg"
        alt="tiktok"
        width={50}
        height={50}
        className="icon"
        loading="lazy"
    />
)

export const socialLinks = [
    {
        title: 'Whatsapp',
        icon: <WhatsappIcon />,
        href: ''
    },
    {
        title: 'Call me',
        icon: <MobileIcon />,
        href: ''
    },
    {
        title: 'Facebook',
        icon: <FacebookIcon />,
        href: ''
    },
    {
        title: 'Instagram',
        icon: <InstagramIcon />,
        href: ''
    },
]

export const socialLinksColorful = [
    {
        title: 'Whatsapp',
        icon: < WhatsappIconColorful />,
        href: ''
    },

    {
        title: 'Instagram',
        icon: < InstagramIconColorful />,
        href: ''
    },
    {
        title: 'Facebook',
        icon: < FacebookIconColorful />,
        href: ''
    },
]