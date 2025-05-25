import { ReactElement } from "react"

type Activity = {
    title: string
    src: string
    blurDataURL: string
    description: string
}

export type Icon = {
    title: string,
    icon: ReactElement,
    href: string
}

export interface ActivitiesListProps {
    activities: Activity[]
}

export type Accessibility = {
    title: string
    icon: string
    alt: string
    callback: () => void
}