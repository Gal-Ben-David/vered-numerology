type Activity = {
    title: string
    src: string
    blurDataURL: string
}

export interface ActivitiesListProps {
    activities: Activity[]
}