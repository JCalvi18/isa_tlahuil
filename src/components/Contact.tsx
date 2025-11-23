"use client";

import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Card, CardBody, Button, Input, Textarea } from "@heroui/react";
import { FaEnvelope, FaPhone } from 'react-icons/fa';

export default function Contact() {
    const { t } = useLanguage();

    return (
        <section id="contact" className="py-20 px-8 bg-transparent">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold mb-12 text-center text-deep-teal">{t('contact.title')}</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <Card className="bg-gradient-to-br from-deep-teal to-teal text-white">
                        <CardBody className="p-8 flex flex-col justify-center">
                            <div className="mb-8">
                                <div className="flex items-center mb-4">
                                    <FaEnvelope className="text-2xl mr-4" />
                                    <span className="text-lg">contact@isatlahuil.com</span>
                                </div>
                                <div className="flex items-center">
                                    <FaPhone className="text-2xl mr-4" />
                                    <span className="text-lg">+49 123 4567895</span>
                                </div>
                            </div>
                            <p className="opacity-80">{t("contact.tellme")}</p>
                        </CardBody>
                    </Card>

                    <Card className="bg-white/80 backdrop-blur-sm">
                        <CardBody className="p-8">
                            <form className="flex flex-col gap-4">
                                <Input label="Name" placeholder="Your name" variant="bordered" classNames={{ input: "text-black", label: "text-gray-600" }} />
                                <Input label="Email" placeholder="Your email" type="email" variant="bordered" classNames={{ input: "text-black", label: "text-gray-600" }} />
                                <Textarea label="Message" placeholder="How can I help you?" minRows={4} variant="bordered" classNames={{ input: "text-black", label: "text-gray-600" }} />
                                <Button className="mt-2 font-semibold bg-orange text-white">
                                    {t('contact.cta')}
                                </Button>
                            </form>
                        </CardBody>
                    </Card>
                </div>
            </div>
        </section>
    );
}
