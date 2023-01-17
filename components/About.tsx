import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

type Props = {}

export default function About({ }: Props) {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className='flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'
        >
            <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
                About
            </h3>
            <motion.img
                initial={{
                    x: -200,
                    opacity: 0,
                }}
                transition={{ duration: 1.2 }}
                whileInView={{
                    x: 0,
                    opacity: 1,
                }}
                viewport={{ once: true }}
                src='https://avatars.githubusercontent.com/u/106125123?v=4'
                className='-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]'
            />
            <div className='space-y-10 px-0 md:px-10'>
                <h4 className='text-4xl font-semibold'>
                    Here is a <span className='underline decoration-[#F7AB0A]/50'>little</span> background
                </h4>
                <p className='text-base'>
                    I am a Fullstack Software Developer with experience building dynamic and scalable web applications in JavaScript, Python, React.js, Redux.js, SQL and HTML/CSS. I also have an exceptional background in STEM and patient care. I love the battle of developing an idea into existence, and forging the bridge between conceptualization and a tangible, impactful product while delivering a seamless user experience.
                </p>
                {/* <a className='text-2xl font-semibold text-center underline decoration-[#F7AB0A]/50' href='../assets/resume.pdf' download>View Resume</a> */}
            </div>
        </motion.div>
    )
}
