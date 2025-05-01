import './Activities.css'

import { ActivitiesList } from './ActivitiesList';
import { activitiesIcons } from '@/data/icons';

const workshopList = [
    {
        title: 'בעקבות המספרים',
        src: 'https://res.cloudinary.com/dvykycdey/image/upload/f_webp/v1745598978/numbers_1_zvy7ye.jpg',
        blurDataURL: 'https://res.cloudinary.com/dvykycdey/image/upload/f_webp/e_blur:2000,q_1/v1745598978/numbers_1_zvy7ye.jp',
        description: `
        מה אומרים עלינו המספרים? סדנה מעשירה על נומרולוגיה ככלי לגילוי עצמי.
        נקבל הצצה לעולם הנומרולוגיה ככלי להיכרות עצמית, דרך שביל הגורל, השנה האישית, והמסרים שהמספרים מביאים איתם.
        נלמד איך לקרוא ולהבין את המספרים שמלווים אותנו, ונגלה תובנות מפתיעות שיכולות לשפוך אור על הדרך שלנו, הקצב שמתאים לנו, וההזדמנויות שמזמן לנו הזמן.
        `
    },
    {
        title: 'הקול בראש',
        src: 'https://res.cloudinary.com/dvykycdey/image/upload/v1745598978/f_webp/inner_voice_1_dgk3fq.jpg',
        blurDataURL: 'https://res.cloudinary.com/dvykycdey/image/upload/f_webp/e_blur:2000,q_1/v1745598978/inner_voice_1_dgk3fq.jpg',
        description: `
        מסע פנימי להיכרות עם הקולות שמדברים מתוכנו.
        כולנו נושאים בתוכנו "קולות שומרים" – חלקים שמטרתם להגן עלינו ולשמור על תחושת הערך והביטחון שלנו. 
        לעיתים הם מופיעים כקול ביקורתי, מפחיד או משתיק, ולעיתים כמנועים פנימיים לאחריות ולבחירה נכונה.
        בסדנה נלמד להבחין בין הקולות, להבין מתי ואיך הם פועלים, ונגלה כיצד להקשיב להם מבלי לתת להם לנהל אותנו.
        זהו מרחב לחקירה, מודעות וצמיחה – מקום שבו אפשר לפגוש את עצמנו מקרוב, דווקא דרך אותם קולות שבראש. 
`
    },
    {
        title: 'חכמת נשים',
        src: 'https://res.cloudinary.com/dvykycdey/image/upload/f_webp/v1745598978/women-bible_qxhlkx.jpg',
        blurDataURL: 'https://res.cloudinary.com/dvykycdey/image/upload/f_webp/e_blur:2000,q_1/v1745598978/women-bible_qxhlkx.jpg',
        description: `
        מסע מעצים של דמיון, גילוי והשראה, בהובלת דמויות נשיות מהתנ״ך. 
        נשמע את הקולות הנשיים של התנ״ך ונאפשר להם ללוות אותנו במסע האישי שלנו.
        נפגוש את שרה, מרים, רות, יעל, דבורה, אסתר ועוד נשים עוצמתיות, שכל אחת מהן מביאה איתה חכמה, תעוזה, רכות או עוצמה ייחודית.
        במהלך הסדנה נתחבר לסיפוריהן, נתבונן בשיקופים לחיינו ונאפשר לקול הפנימי שלנו לעלות ולדבר. 
        דרך מפגש יצירתי עם הדמויות והסיפורים נעמיק במסע האישי שלנו — כנשים, כאימהות, כיוצרות.        `
    },
    {
        title: 'בניית חזון אישי',
        src: 'https://res.cloudinary.com/dvykycdey/image/upload/f_webp/v1745598978/vision_1_tct4wp.jpg',
        blurDataURL: 'https://res.cloudinary.com/dvykycdey/image/upload/f_webp/e_blur:2000,q_1/v1745598978/vision_1_tct4wp.jpg',
        description: `
        להתחבר לעצמי — ולהוביל את חיי.
        בסדנה זו נצא למסע אישי של גילוי, חיבור ובהירות. 
        נלמד להקשיב לעצמנו באמת — לערכים שמובילים אותנו, לשאיפות שבלב ולתמונה שאנחנו רואים כשאנחנו מדמיינים את החיים שאנחנו רוצות לחיות.
        נבנה חזון אישי שינחה אותנו — לא כמטרה רחוקה, אלא כמצפן יומיומי שמאיר את הדרך ומסייע לנו לבחור, לפעול ולנוע מתוך משמעות.
        החזון לא יישאר בגדר רעיון — נתרגם אותו לצעדים מעשיים, קטנים וישימים, שיקרבו אותנו לעבר המציאות שאנחנו רוצות לברוא לעצמנו.
        `
    },
]

export function Activities() {
    return (
        <section className="activities full main-layout">
            <div className="activities-description rtl">
                <p >
                    <span className="bold">
                        נומרולוגית מובילה בארץ
                    </span>
                    <br />
                    מקדמת אנשים להתפתחות, צמיחה והעצמה אישית.
                </p>
                <p> בעלת קליניקה פרטית לפגישות אישיות - ליחידים ולזוגות.</p>
                <p>מעבירה סדנאות חוויתיות לקבוצות - בכל שלב ובכל צומת בחיים.</p>
            </div>

            <hr />

            <div className="rtl">
                <h2>רשימת סדנאות</h2>
                <ActivitiesList activities={workshopList} />
            </div>

            <hr />

            <div className="workshop-description rtl">
                <h2 >מחפשים חוויה ייחודית?</h2>
                <p> הסדנאות מתאימות לקבוצות, ימי הולדת, מסיבות רווקות, מקווה - או כל מפגש חברים שרוצים להוסיף לו טאץ' מיוחד!  </p>
            </div>

            <div className="workshop-description rtl">
                <ul className="activities-icon-list">
                    {activitiesIcons.map((item, i) =>
                        <li key={i} className="icon-container">
                            <div className="activities-icon">{item.icon}</div>
                            <span>{item.title}</span>
                        </li>)}
                </ul>
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