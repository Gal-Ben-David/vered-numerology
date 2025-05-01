'use client'
import { motion, AnimatePresence } from 'framer-motion'
import Image from "next/image";
import { ActivitiesListProps } from '../../interfaces/interfaces'
import { useState } from 'react';
import './ActivitiesList.css'

export function ActivitiesList({ activities }: ActivitiesListProps) {

    const [openIndex, setOpenIndex] = useState<number | null>(null)

    const toggleOpen = (idx: number) => {
        setOpenIndex(prev => (prev === idx) ? null : idx)
    }

    return (
        <ul className="activities-list">
            {activities.map((item, i) =>
                <li className="activity" key={i}>

                    <div className="img-wrapper" onClick={() => toggleOpen(i)}>
                        <h3 className="workshop-title">{item.title}</h3>
                        <Image
                            className="workshop-img"
                            src={item.src}
                            alt="workshop"
                            fill
                            sizes="(max-width: 768px) 260px, 300px"
                            loading="lazy"
                        />
                    </div>

                    <p className="workshop-description">{item.description}</p>
                </li>)}
        </ul>
    )
}