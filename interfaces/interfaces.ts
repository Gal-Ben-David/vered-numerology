type Activity = {
    title: string
    src: string
    blurDataURL: string
    description: string
}

export interface ActivitiesListProps {
    activities: Activity[]
}