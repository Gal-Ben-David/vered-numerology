'use client'
import './About.css'
import { SocialLinks } from '../social-links/SocialLinks'
import { useEffect, useState } from 'react'
import { PlusIcon } from '@/data/icons'

export function About() {

    const [opacity, setOpacity] = useState(false)

    useEffect(() => {
        setOpacity(true)
    }, [])


    return (
        <section className="about full">
            <div className={`profile-img ${opacity ? 'visible' : ''}`}>
                <img src="https://res.cloudinary.com/dvykycdey/image/upload/v1746963249/vered-profile-img_pyjqlo.jpg" />
            </div>

            <div className="content about-content">
                <div style={{ opacity: opacity ? '1' : '0', transition: '2s ease-in-out' }}>
                    <h1 className="rtl">ורד בן דוד</h1>
                    <h2 className="rtl">נומרולוגיה, ייעוץ והכוונה</h2>
                    <h2 className="rtl">פגישות אישיות ・ סדנאות קבוצתיות</h2>
                </div>
                <SocialLinks />
                <a className="save-to-contact bold rtl" href="/file/vered-ben-david.vcf" type="text/vcard">
                    <p>שמרו אותי באנשי הקשר</p>
                    <PlusIcon />
                </a>
            </div>
        </section>
    )
}