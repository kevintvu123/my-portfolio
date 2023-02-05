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
                        src='https://camo.githubusercontent.com/7d5b11a7af09f3f5f1c4569a44ffbcb08fa31cfc61d8d56baffe97a75e25f479/68747470733a2f2f63646e2e646973636f72646170702e636f6d2f6174746163686d656e74732f313033393635373736353432373232343730392f313036313832353033313633313534343438312f696d6167652e706e67'
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
                        src='https://camo.githubusercontent.com/25e98b1cbc5ab2d4289c99c6442384eb49a9b5859b5eee6dee2da1a33ee8ffce/68747470733a2f2f63646e2e646973636f72646170702e636f6d2f6174746163686d656e74732f313032373036333534373037323631343438322f313035333335393432363537343232393632352f696d6167652e706e67'
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
                        src='https://user-images.githubusercontent.com/106125123/203065526-08449828-1932-48c8-bffd-e2293ee47c03.png'
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
