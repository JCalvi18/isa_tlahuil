"use client";

import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Card, CardBody } from "@heroui/react";
import { GiOpenBook, GiDramaMasks, GiWorld, GiFountainPen } from 'react-icons/gi';

export default function Offering() {
    const { t } = useLanguage();

    const icons = [GiOpenBook, GiDramaMasks, GiWorld, GiFountainPen];
    const items = t('offering.items');
    const listItems = Array.isArray(items) ? items : [];

    return (
        <section id="offering" className="py-20 px-8 bg-transparent">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold mb-12 text-center text-deep-teal">{t('offering.title')}</h2>
                <Card className="bg-white/80 backdrop-blur-sm mb-8">
                    <CardBody className="p-0">
                        <ul className="divide-y divide-gray-200">
                            {listItems.map((item: string, index: number) => {
                                const Icon = icons[index % icons.length];
                                return (
                                    <li key={index} className="flex items-center p-6 hover:bg-orange/50 transition-all duration-300 cursor-pointer">
                                        <div className="flex-shrink-0 mr-6">
                                            <div className="p-3 bg-teal/20 rounded-full">
                                                <Icon className="text-2xl text-teal" />
                                            </div>
                                        </div>
                                        <span className="text-xl font-medium text-black">{item}</span>
                                    </li>
                                );
                            })}
                        </ul>
                    </CardBody>
                </Card>

                <Card className="bg-white/80 backdrop-blur-sm">
                    <CardBody className="p-6 text-center">
                        <p className="text-xl font-medium text-black">
                            If your project does not fit a category let me know anyways!
                        </p>
                    </CardBody>
                </Card>
            </div>
        </section>
    );
}
