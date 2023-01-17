import React from 'react'
import { motion } from 'framer-motion'

type Props = {}

export default function Projects({ }: Props) {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className='h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0'>
            <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
                Projects
            </h3>

            <div className='relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80'>
                <div className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen'>
                    <motion.img
                        initial={{
                            y: -300,
                            opacity: 0,
                        }}
                        transition={{ duration: 1.2 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        // viewport={{ once: true }}
                        src='https://media.licdn.com/dms/image/C4E2DAQHlskwt5Snoeg/profile-treasury-image-shrink_800_800/0/1673488585319?e=1674547200&v=beta&t=0o7_bKVUmisWsD0Lpwk8274G9pCRd2Ay7e6O3EPpUew'
                        alt=''
                        className='-mb-20 md:mb-0 flex-shrink-0 w-0 h-0 rounded-full object-cover md:rounded-lg md:w-60 md:h-32 xl:w-[600px] xl:h-[300px]'
                    />
                    <div className='space-y-10 px-0 md:px-10 max-w-6xl'>
                        <h4 className='text-4xl font-semibold text-center'>
                            <span>Case Study 1 of 3:</span> PeakTrade <a className='text-4xl font-semibold text-center underline decoration-[#F7AB0A]/50' href='https://peaktrade.onrender.com/'>Live Site</a> <a className='text-4xl font-semibold text-center underline decoration-[#F7AB0A]/50' href='https://github.com/kevintvu123/PeakTrade'>Source Code</a>
                        </h4>

                        <div className='text-lg text-center md:text-left'>
                            PeakTrade was designed out of a desire to create a platform that combines the fun of stock market simulation with the social aspect of friendly competition among users with group functionality. PeakTrade is a fullstack stock trading web application inspired by Robinhood. Built with React, Redux, Python, HTML, and CSS.
                        </div>
                    </div>
                </div>
                <div className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen'>
                    <motion.img
                        initial={{
                            y: -300,
                            opacity: 0,
                        }}
                        transition={{ duration: 1.2 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        // viewport={{ once: true }}
                        src='https://media.licdn.com/dms/image/C4E2DAQH8-vr6efoq4Q/profile-treasury-image-shrink_800_800/0/1673530905109?e=1674547200&v=beta&t=HSLOLyk_ns7u4Vy-Vst1_dqZZGx--gi77kCE64MSOSQ'
                        alt=''
                        className='-mb-20 md:mb-0 flex-shrink-0 w-0 h-0 rounded-full object-cover md:rounded-lg md:w-60 md:h-32 xl:w-[600px] xl:h-[300px]'
                    />
                    <div className='space-y-10 px-0 md:px-10 max-w-6xl'>
                        <h4 className='text-4xl font-semibold text-center'>
                            <span>Case Study 2 of 3:</span> Hangers Academy <a className='text-4xl font-semibold text-center underline decoration-[#F7AB0A]/50' href='https://www.hangersacademy.com/'>Live Site</a> <a className='text-4xl font-semibold text-center underline decoration-[#F7AB0A]/50' href='https://github.com/WhirlyFan/Hangers-Academy'>Source Code</a>
                        </h4>

                        <div className='text-lg text-center md:text-left'>
                            Hangers Academy is the result of a collaborative effort in designing a chat-based application that offers servers, text channels, and direct messaging, inspired by Discord. Built with React, Redux, Python, HTML, and CSS. Utilizes Socket.IO to deliver real-time communication.
                        </div>
                    </div>
                </div>
                <div className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen'>
                    <motion.img
                        initial={{
                            y: -300,
                            opacity: 0,
                        }}
                        transition={{ duration: 1.2 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        // viewport={{ once: true }}
                        src='https://media.licdn.com/dms/image/C4E2DAQFp3bMiO2ZIJg/profile-treasury-image-shrink_800_800/0/1673532198335?e=1674547200&v=beta&t=TRWueOURGD-A5E0UiiTlfR4Jdd0C0ayF1_mtsKGau2c'
                        alt=''
                        className='-mb-20 md:mb-0 flex-shrink-0 w-0 h-0 rounded-full object-cover md:rounded-lg md:w-60 md:h-32 xl:w-[600px] xl:h-[300px]'
                    />
                    <div className='space-y-10 px-0 md:px-10 max-w-6xl'>
                        <h4 className='text-4xl font-semibold text-center'>
                            <span>Case Study 3 of 3:</span> AirClone <a className='text-4xl font-semibold text-center underline decoration-[#F7AB0A]/50' href='https://airbnb-api-proj.herokuapp.com/'>Live Site</a> <a className='text-4xl font-semibold text-center underline decoration-[#F7AB0A]/50' href='https://github.com/kevintvu123/AirBnB-Clone'>Source Code</a>
                        </h4>

                        <div className='text-lg text-center md:text-left'>
                            Airclone is a fullstack vacation rental platform, inspired by Airbnb, that provides a tool for hosts to list and manage their properties with an integrated review system for guest to view and provide feedback. Built with React, Redux, Express.js, Sequelize.js, HTML, and CSS.
                        </div>
                    </div>
                </div>
            </div>

            <div className='w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12' />
        </motion.div>
    )
}
