"use client";

import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Tabs, Tab, Card, CardBody, Select, SelectItem } from "@heroui/react";
import interactiveData from '../data/samples_interactive.json';

type Language = 'en' | 'de' | 'es';
type Category = keyof typeof interactiveData;

export default function Samples() {
    const { t } = useLanguage();
    const [hoveredId, setHoveredId] = useState<string | null>(null);
    const [leftLang, setLeftLang] = useState<Language>('en');
    const [rightLang, setRightLang] = useState<Language>('de');

    const languages = [
        { key: 'en', label: 'English' },
        { key: 'de', label: 'Deutsch' },
        { key: 'es', label: 'Español' },
    ];

    const renderText = (category: Category, lang: Language) => {
        return interactiveData[category].map((segment) => (
            <span
                key={segment.id}
                onMouseEnter={() => setHoveredId(segment.id)}
                onMouseLeave={() => setHoveredId(null)}
                onClick={() => setHoveredId(hoveredId === segment.id ? null : segment.id)}
                className={`cursor-pointer transition-colors duration-200 rounded px-0.5 ${hoveredId === segment.id
                    ? 'bg-[#94d2bd] text-black'
                    : ''
                    }`}
            >
                {segment[lang]}
            </span>
        ));
    };

    return (
        <section id="samples" className="py-20 px-8 bg-transparent">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold mb-12 text-center text-deep-teal">{t('header.nav.samples')}</h2>

                <div className="flex justify-center gap-8 mb-8 flex-col md:flex-row items-center">
                    <div className="w-40">
                        <Select
                            label={<span className="md:hidden">{t("translation-box-upper")}</span>}
                            placeholder={t("translation-box-left")}
                            labelPlacement="outside"
                            selectedKeys={[leftLang]}
                            onChange={(e) => setLeftLang(e.target.value as Language)}
                            classNames={{
                                trigger: "bg-white/80 backdrop-blur-sm",
                                value: "text-black",
                                label: "text-black md:hidden"
                            }}
                            renderValue={(items) => items.map(item => <span key={item.key} className="text-black">{item.textValue}</span>)}
                        >
                            {languages.map((lang) => (
                                <SelectItem key={lang.key} className="text-black">
                                    {lang.label}
                                </SelectItem>
                            ))}
                        </Select>
                        <span className="hidden md:block text-center text-sm mt-1 text-gray-600">{t("translation-box-left")}</span>
                    </div>
                    <div className="w-40">
                        <Select
                            label={<span className="md:hidden">{t("translation-box-lower")}</span>}
                            placeholder={t("translation-box-right")}
                            labelPlacement="outside"
                            selectedKeys={[rightLang]}
                            onChange={(e) => setRightLang(e.target.value as Language)}
                            classNames={{
                                trigger: "bg-white/80 backdrop-blur-sm",
                                value: "text-black",
                                label: "text-black md:hidden"
                            }}
                            renderValue={(items) => items.map(item => <span key={item.key} className="text-black">{item.textValue}</span>)}
                        >
                            {languages.map((lang) => (
                                <SelectItem key={lang.key} className="text-black">
                                    {lang.label}
                                </SelectItem>
                            ))}
                        </Select>
                        <span className="hidden md:block text-center text-sm mt-1 text-gray-600">{t("translation-box-right")}</span>
                    </div>
                </div>

                <div className="flex w-full flex-col">
                    <Tabs
                        aria-label="Sample Categories"
                        variant="bordered"
                        className="justify-center mb-8"
                        classNames={{
                            cursor: "bg-deep-teal border-deep-teal",
                            tabContent: "group-data-[selected=true]:text-white"
                        }}
                    >
                        {(Object.keys(interactiveData) as Category[]).map((category) => (
                            <Tab key={category} title={t(`samples.categories.${category}`)}>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <Card className="bg-white/80 backdrop-blur-sm">
                                        <CardBody className="p-6">
                                            <p className="text-lg leading-relaxed text-black">
                                                {renderText(category, leftLang)}
                                            </p>
                                        </CardBody>
                                    </Card>
                                    <Card className="bg-white/80 backdrop-blur-sm">
                                        <CardBody className="p-6">
                                            <p className="text-lg leading-relaxed text-black">
                                                {renderText(category, rightLang)}
                                            </p>
                                        </CardBody>
                                    </Card>
                                </div>
                            </Tab>
                        ))}
                    </Tabs>
                </div>
            </div>
        </section>
    );
}
