import './ActivitiesDescription.css'
import Image from "next/image";


export function ActivitiesDescription() {


    return (
        <section className="activities-description rtl">
            <div className="image-container">
                <div className="image-wrapper">
                    <Image
                        className="intro-img"
                        src="https://res.cloudinary.com/dvykycdey/image/upload/f_webp/v1747409365/vered-office_l6lfln.jpg"
                        alt="תמונה של ורד עם ספר נומרולוגיה"
                        fill
                        sizes="296px"
                        loading="lazy"
                    />
                </div>
            </div>

            <div>
                <div className="introduction">
                    <p className="bold">
                        נומרולוגית מובילה בארץ
                    </p>
                    <p>
                        מקדמת אנשים להתפתחות, צמיחה והעצמה אישית.
                        <br />
                        בעלת קליניקה פרטית לפגישות אישיות - ליחידים ולזוגות.
                        <br />
                        מעבירה סדנאות חוויתיות לקבוצות - בכל שלב ובכל צומת בחיים.
                    </p>
                </div>
            </div>
        </section>
    )
}