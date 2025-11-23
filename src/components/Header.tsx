"use client";

import React, { useState } from 'react';
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Link, Button, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from "@heroui/react";
import { useLanguage } from '../context/LanguageContext';

export default function Header() {
    const { t, setLanguage, language } = useLanguage();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleScroll = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setIsMenuOpen(false);
        }
    };

    const menuItems = [
        { key: 'description', label: t('header.nav.description') },
        { key: 'samples', label: t('header.nav.samples') },
        { key: 'preferences', label: t('header.nav.preferences') },
        { key: 'offering', label: t('header.nav.offering') },
        { key: 'contact', label: t('header.nav.contact') },
    ];

    return (
        <Navbar shouldHideOnScroll onMenuOpenChange={setIsMenuOpen} isMenuOpen={isMenuOpen} className="bg-orange/70 backdrop-blur-md">
            <NavbarContent>
                <NavbarMenuToggle
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                    className="sm:hidden"
                />
                <NavbarBrand>
                    <p className="font-bold text-inherit">Isa Tlahuilxochitl</p>
                </NavbarBrand>
            </NavbarContent>

            <NavbarContent className="hidden sm:flex gap-4" justify="center">
                {menuItems.map((item) => (
                    <NavbarItem key={item.key}>
                        <Link className="text-teal cursor-pointer" onPress={() => handleScroll(item.key)}>
                            {item.label}
                        </Link>
                    </NavbarItem>
                ))}
            </NavbarContent>
            <NavbarContent justify="end">
                <Dropdown>
                    <DropdownTrigger>
                        <Button variant="flat" className="capitalize">
                            {language.toUpperCase()}
                        </Button>
                    </DropdownTrigger>
                    <DropdownMenu
                        aria-label="Language selection"
                        onAction={(key) => setLanguage(key as 'en' | 'de' | 'es')}
                    >
                        <DropdownItem key="en">English</DropdownItem>
                        <DropdownItem key="de">Deutsch</DropdownItem>
                        <DropdownItem key="es">Español</DropdownItem>
                    </DropdownMenu>
                </Dropdown>
            </NavbarContent>
            <NavbarMenu>
                {menuItems.map((item, index) => (
                    <NavbarMenuItem key={`${item.key}-${index}`}>
                        <Link
                            color="foreground"
                            className="w-full"
                            href="#"
                            size="lg"
                            onPress={() => handleScroll(item.key)}
                        >
                            {item.label}
                        </Link>
                    </NavbarMenuItem>
                ))}
            </NavbarMenu>
        </Navbar>
    );
}
