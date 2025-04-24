import './Activities.css'

import Image from "next/image";

// const WhatsappIcon = () => (
//     <Image
//         src="https://res.cloudinary.com/dvykycdey/image/upload/v1745515614/vered-workshop_gx6vsk.jpg"
//         alt="workshop"
//         height={100}
//     />
// )

export function Activities() {
    return (
        <section className="activities full main-layout">
            <p>נומרולוגית מובילה בארץ,</p>
            <p> מקדמת אנשים להתפתחות והעצמה אישית ✨</p>
            <ul>
                <li>
                    <img src="https://res.cloudinary.com/dvykycdey/image/upload/v1745515614/vered-workshop_gx6vsk.jpg" />
                </li>
            </ul>

        </section>
    )
}