"use client";

import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Intro() {
    const { t } = useLanguage();

    return (
        <section id="intro" className="min-h-screen flex flex-col justify-center items-center text-center p-8 bg-transparent">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <h1 className="text-5xl md:text-7xl font-bold mb-4 text-deep-teal">
                    {t('intro.name')}
                </h1>
                <h2 className="text-2xl md:text-3xl text-teal mb-8">
                    {t('intro.profession')}
                </h2>

                <div className='flex justify-center mb-8'>
                    <Image
                        src={"/profile1.JPG"}
                        alt='Profile image'
                        width={300}
                        height={300}
                        style={{ borderRadius: 500 }}
                    />
                </div>

                <p className="text-xl max-w-2xl mx-auto text-black italic">
                    "{t('intro.motivation')}"
                </p>
            </motion.div>
        </section>
    );
}
