import './Activities.css'
import { workshops as workshopList } from '@/data/workshops';
import { ActivitiesList } from './ActivitiesList';
import { activitiesIcons } from '@/data/icons';
import { ActivitiesDescription } from './ActivitiesDescription';
import { getContentForActivities } from '../../content/queries'

export async function Activities() {
    const data = await getContentForActivities()
    const content = data.activitiesCollection.items[0]

    return (
        <section className="activities full main-layout">

            <ActivitiesDescription description={content.description} />

            <hr />

            <div className="rtl">
                <h2>{content.title}</h2>
                <ActivitiesList activities={workshopList} />
            </div>

            <hr />

            <div className="workshop-description intro rtl">
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

            <a className="btn btn-schedule btn-schedule-workshop" href="https://wa.me/972523288279" target="_blank" rel="noopener noreferrer">
                <span>
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#ededed"><path d="M360-240 120-480l240-240 56 56-144 144h568v80H272l144 144-56 56Z" /></svg>
                </span>
                <span>לתיאום סדנה</span>
            </a>

        </section>
    )
}