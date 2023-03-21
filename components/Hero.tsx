import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import BackgroundCircles from './BackgroundCircles';
import Link from 'next/link';

type Props = {}

export default function Hero({ }: Props) {

    const [text, count] = useTypewriter({
        words: [
            "The Name's Kevin Vu",
            "Guy-who-loves-Coffee.tsx",
            "<ButLovesToCodeMore />",
        ],
        loop: true,
        delaySpeed: 2000,
    });

    return (
        <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
            <BackgroundCircles />
            <img
                className='relative rounded-full h-32 w-32 mx-auto object-cover'
                src='https://scontent-iad3-1.xx.fbcdn.net/v/t1.6435-9/56410987_1003058286557463_3903780463499542528_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=kuY1yY-z69gAX_iGeHI&_nc_ht=scontent-iad3-1.xx&oh=00_AfB-jN7K-uoXp9-aFtNzFjEg7VcGCvtx8Lvw7IXz9E2p-Q&oe=6441272B'
                alt=''
            />
            <div className='z-20'>
                <h2 className='text-sm uppercase text-gray-500 pb-2 tracking-[15px]'>Fullstack Developer</h2>
                <h1 className='text-5xl lg:text-6xl font-semibold px-10'>
                    <span className='mr-3'>{text}</span>
                    <Cursor cursorColor='#F7AB0A' />
                </h1>

                <div className='pt-5'>
                    <Link href='#about'>
                        <button className='heroButton'>About</button>
                    </Link>
                    <Link href='#skills'>
                        <button className='heroButton'>Skills</button>
                    </Link>
                    <Link href='#projects'>
                        <button className='heroButton'>Projects</button>
                    </Link>
                </div>
            </div>

        </div>
    )
}
