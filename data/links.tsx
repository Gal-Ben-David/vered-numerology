import Image from "next/image";

const WhatsappIcon = () => (
    <Image
        src="/icons/whatsapp-icon.svg"
        alt="whatsapp"
        width={70}
        height={70}
        className="icon"
    />
)

const MobileIcon = () => (
    <Image
        src="/icons/telephone-icon.svg"
        alt="whatsapp"
        width={70}
        height={70}
        className="icon"
    />
)

const InstagramIcon = () => (
    <Image
        src="/icons/instagram-icon.svg"
        alt="whatsapp"
        width={70}
        height={70}
        className="icon"
    />
)

const FacebookIcon = () => (
    <Image
        src="/icons/facebook-icon.svg"
        alt="whatsapp"
        width={70}
        height={70}
        className="icon"
    />
)

export const socialLinks = [
    {
        title: 'Call me',
        icon: <MobileIcon />,
        href: ''
    },
    {
        title: 'Whatsapp',
        icon: <WhatsappIcon />,
        href: ''
    },
    {
        title: 'Instagram',
        icon: <InstagramIcon />,
        href: ''
    },
    {
        title: 'Facebook',
        icon: <FacebookIcon />,
        href: ''
    },
]