import Image from "next/image";

const BirthdayIcon = () => (
    <Image
        src="/icons/birthday-icon.svg"
        alt="whatsapp"
        width={60}
        height={60}
        className="activities-icon"
    />
)

const RingIcon = () => (
    <Image
        src="/icons/ring-icon.svg"
        alt="ring"
        width={60}
        height={60}
        className="activities-icon"
    />
)

const WineGlassIcon = () => (
    <Image
        src="/icons/wine-glass-icon.svg"
        alt="wine-glass"
        width={60}
        height={60}
        className="activities-icon"
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