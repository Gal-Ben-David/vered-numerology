import Image from "next/image";

const BirthdayIcon = () => (
    <Image
        src="/icons/birthday-icon.svg"
        alt="whatsapp"
        width={60}
        height={60}
        className="activities-icon"
        loading="lazy"
    />
)

const RingIcon = () => (
    <Image
        src="/icons/ring-icon.svg"
        alt="ring"
        width={60}
        height={60}
        className="activities-icon"
        loading="lazy"
    />
)

const WineGlassIcon = () => (
    <Image
        src="/icons/wine-glass-icon.svg"
        alt="wine-glass"
        width={60}
        height={60}
        className="activities-icon"
        loading="lazy"
    />
)

export const activitiesIcons = [
    {
        title: 'ימי הולדת באווירה מיסטית ורוחנית',
        icon: <BirthdayIcon />,
    },
    {
        title: 'מסיבת רווקות - לפתוח פרק חדש באנרגיות חיוביות ',
        icon: <RingIcon />,
    },
    {
        title: 'ערב חברים מרתק בו כל אחד יוכל לטעום ולקבל מארגז הכלים של הנומרולוגיה',
        icon: <WineGlassIcon />,
    },
]

export const DateIcon = () => (
    <Image
        src="/icons/date-icon.svg"
        alt="date"
        width={60}
        height={60}
        className="calculator-icon"
        loading="lazy"
    />
)
export const EnvelopeIcon = () => (
    <Image
        src="/icons/envelope-icon.svg"
        alt="email"
        width={20}
        height={20}
        className="email-icon contact-icon"
        loading="lazy"
    />
)
export const TelephoneIcon = () => (
    <Image
        src="/icons/telephone-icon-2.svg"
        alt="phone"
        width={20}
        height={20}
        className="telephone-icon contact-icon"
        loading="lazy"
    />
)