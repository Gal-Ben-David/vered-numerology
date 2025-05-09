'use client'
import { EnvelopeIcon } from '@/data/icons'
import { TelephoneIcon } from '@/data/icons'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Icon } from '@/interfaces/interfaces'

export function ContactDetails({ whatsappIcon }: { whatsappIcon: Icon }) {
    const ref = useRef(null)
    const isInView = useInView(ref, { amount: 0.5 })

    const shakeVariant = {
        shake: {
            x: [0, -4, 4, -4, 4, 0],
            transition: {
                duration: 1.3,
                repeat: Infinity,
                repeatDelay: 2,
                ease: 'easeInOut',
            },
        },
    }

    return (
        <div className="contact-info">
            <motion.a
                ref={ref}
                href="https://wa.me/972523288279"
                className="icon-container"
                variants={shakeVariant}
                animate={isInView ? "shake" : "none"}
            >
                {whatsappIcon.icon}
            </motion.a>

            <p className="contact-details">
                <span className="contact-icon-container"><EnvelopeIcon /></span>
                <span>vered.benda@gmail.com</span>
            </p>
            <p className="contact-details">
                <span className="contact-icon-container"><TelephoneIcon /></span>
                <span>052-3288279</span>
            </p>
        </div>
    )

}