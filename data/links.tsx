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

const TiktokIcon = () => (
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
        href: 'https://wa.me/972523288279'
    },
    {
        title: 'Call me',
        icon: <MobileIcon />,
        href: 'tel:+972523288279'
    },
    {
        title: 'Facebook',
        icon: <FacebookIcon />,
        href: 'https://www.facebook.com/share/1AUEkc1GNx/?mibextid=wwXIfr'
    },
    {
        title: 'Instagram',
        icon: <InstagramIcon />,
        href: 'https://www.instagram.com/veredezr?igsh=a3h2eXphd2N2NHA3&utm_source=qr'
    },
    {
        title: 'Tiktok',
        icon: <TiktokIcon />,
        href: 'https://www.tiktok.com/@scorp240?_t=ZS-8wD6zSB703M&_r=1'
    },
]