import './Activities.css'

import Image from "next/image";

const workshopList = [
    {
        title: 'בעקבות המספרים',
        img: <Image
            src="https://res.cloudinary.com/dvykycdey/image/upload/v1745598978/numbers_1_zvy7ye.jpg"
            alt="workshop"
            height={260}
            width={300}
        />
    },
    {
        title: 'חכמת נשים',
        img: <Image
            src="https://res.cloudinary.com/dvykycdey/image/upload/v1745598978/women-bible_qxhlkx.jpg"
            alt="workshop"
            height={260}
            width={300}
        />
    },
    {
        title: 'בניית חזון אישי',
        img: <Image
            src="https://res.cloudinary.com/dvykycdey/image/upload/v1745598978/vision_1_tct4wp.jpg"
            alt="workshop"
            height={260}
            width={300}
        />
    },
    {
        title: 'הקול בראש',
        img: <Image
            src="https://res.cloudinary.com/dvykycdey/image/upload/v1745598978/inner_voice_1_dgk3fq.jpg"
            alt="workshop"
            height={260}
            width={300}
        />
    },

]

export function Activities() {
    return (
        <section className="activities full main-layout">
            <div>
                <p className="rtl">נומרולוגית מובילה בארץ,</p>
                <p className="rtl"> מקדמת אנשים להתפתחות והעצמה אישית ✨</p>
            </div>

            <div>
                <h2>רשימת סדנאות</h2>
                <ul className="activities-list">
                    {
                        workshopList.map((item, i) =>
                            <li key={i}>
                                <h2>{item.title}</h2>
                                {item.img}
                            </li>
                        )
                    }
                </ul>
            </div>

        </section>
    )
}