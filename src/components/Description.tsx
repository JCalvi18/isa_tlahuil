"use client";

import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Card, CardBody } from "@heroui/react";

export default function Description() {
    const { t } = useLanguage();

    return (
        <section id="description" className="py-20 px-8 bg-transparent">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold mb-8 text-center text-deep-teal">{t('header.nav.description')}</h2>
                <Card className="p-6 shadow-lg bg-white/80 backdrop-blur-sm">
                    <CardBody>
                        <p className="text-lg leading-relaxed text-black">
                            {t('description.text')}
                        </p>
                    </CardBody>
                </Card>
            </div>
        </section>
    );
}
