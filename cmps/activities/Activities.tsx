import './Activities.css'

import Image from "next/image";

const workshopList = [
    {
        title: 'בעקבות המספרים',
        src: 'https://res.cloudinary.com/dvykycdey/image/upload/v1745598978/numbers_1_zvy7ye.jpg',
        blurDataURL: 'https://res.cloudinary.com/dvykycdey/image/upload/e_blur:2000,q_1/v1745598978/numbers_1_zvy7ye.jp'
    },
    {
        title: 'הקול בראש',
        src: 'https://res.cloudinary.com/dvykycdey/image/upload/v1745598978/inner_voice_1_dgk3fq.jpg',
        blurDataURL: 'https://res.cloudinary.com/dvykycdey/image/upload/e_blur:2000,q_1/v1745598978/inner_voice_1_dgk3fq.jpg'
    },
    {
        title: 'חכמת נשים',
        src: 'https://res.cloudinary.com/dvykycdey/image/upload/v1745598978/women-bible_qxhlkx.jpg',
        blurDataURL: 'https://res.cloudinary.com/dvykycdey/image/upload/e_blur:2000,q_1/v1745598978/women-bible_qxhlkx.jpg'
    },
    {
        title: 'בניית חזון אישי',
        src: 'https://res.cloudinary.com/dvykycdey/image/upload/v1745598978/vision_1_tct4wp.jpg',
        blurDataURL: 'https://res.cloudinary.com/dvykycdey/image/upload/e_blur:2000,q_1/v1745598978/vision_1_tct4wp.jpg'
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
                    {workshopList.map((item, i) =>
                        <li className="activity" key={i}>
                            <h3 className="workshop-title">{item.title}</h3>
                            <div className="img-wrapper">
                                <Image
                                    className="workshop-img"
                                    src={item.src}
                                    alt="workshop"
                                    fill
                                    sizes="(max-width: 768px) 260px, 300px"
                                    loading="lazy"
                                />
                            </div>
                        </li>)}
                </ul>
            </div>

            <div className="workshop-description">
                <h2 className="rtl">מחפשים חוויה ייחודית?</h2>
                <p className="rtl"> הסדנאות מתאימות לקבוצות, ימי הולדת, מסיבות רווקות, מקווה - או כל מפגש חברים שרוצים להוסיף לו טאץ' מיוחד!  </p>
            </div>
            <a className="btn btn-schedule btn-schedule-workshop">
                <span>
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#ededed"><path d="M360-240 120-480l240-240 56 56-144 144h568v80H272l144 144-56 56Z" /></svg>
                </span>
                <span>לתיאום סדנה</span>

            </a>

        </section>
    )
}