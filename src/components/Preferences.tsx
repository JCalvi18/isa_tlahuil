"use client";

import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Card, CardBody } from "@heroui/react";
import { FaTheaterMasks } from 'react-icons/fa';
import { TfiWorld } from "react-icons/tfi";
import { GiAbstract076, GiBookmarklet, GiChaingun } from "react-icons/gi";

export default function Preferences() {
    const { t } = useLanguage();

    const icons = [FaTheaterMasks, GiAbstract076, GiBookmarklet, TfiWorld, GiChaingun];
    const items = t('preferences.items');
    // Handle case where items might not be an array yet (during initial load/type check)
    const listItems = Array.isArray(items) ? items : [];

    return (
        <section id="preferences" className="py-20 px-8 bg-transparent">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold mb-12 text-center text-deep-teal">{t('preferences.title')}</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {listItems.map((item: string, index: number) => {
                        const Icon = icons[index % icons.length];
                        return (
                            <Card key={index} className="hover:scale-105 transition-transform bg-white/80 backdrop-blur-sm">
                                <CardBody className="flex flex-col items-center text-center p-8">
                                    <Icon className="text-4xl mb-4 text-orange" />
                                    <p className="font-semibold text-lg text-black">{item}</p>
                                </CardBody>
                            </Card>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
