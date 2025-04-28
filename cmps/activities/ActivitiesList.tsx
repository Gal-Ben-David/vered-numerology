import Image from "next/image";
import { ActivitiesListProps } from '../../interfaces/interfaces'

export function ActivitiesList({ activities }: ActivitiesListProps) {
    return (
        <ul className="activities-list">
            {activities.map((item, i) =>
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
    )
}