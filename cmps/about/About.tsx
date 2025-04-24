import './About.css'
import { SocialLinks } from '../social-links/SocialLinks'

export function About() {
    return (
        <section className="about">
            <div className="profile-img">
                <img src="https://res.cloudinary.com/dvykycdey/image/upload/v1745423327/vered-img_genget.jpg" />
            </div>

            <div className="content about-content">
                <div>
                    <h1>ורד בן דוד</h1>
                    <h2>נומרולוגיה, ייעוץ והכוונה</h2>
                    <h2>פגישות אישיות ・ סדנאות קבוצתיות</h2>
                </div>

                <div>
                    <SocialLinks />
                </div>

            </div>

        </section>
    )
}