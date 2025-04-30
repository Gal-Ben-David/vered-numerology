import { numberDescriptions } from '../../data/numbers'
import './PathNumberCard.css'

export function PathNumberCard({ pathNumber }: { pathNumber: number }) {
    const description = numberDescriptions[pathNumber - 1]

    return (
        <div className="number-card">
            <h3 className="gold">מספר שביל גורל: {pathNumber}</h3>
            <p>
                {description.description}
            </p>
        </div>
    )
}