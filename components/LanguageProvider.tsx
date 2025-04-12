"use client";

import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import {Footer, FooterEng, Header, HeaderEng} from "@/components";

export const LanguageProvider = ({ children } : { children: React.ReactNode }) => {
    const pathname = usePathname();
    const [language, setLanguage] = useState("sr");

    useEffect(() => {
        // Define routes for English and Serbian
        const englishRoutes = ["/home", "/about-us", "/contact", "/stores", "/shop"];
        const serbianRoutes = ["/", "/o-nama", "/kontakt", "/nase-prodavnice", "/internet-prodavnica"];

        // Detect language based on the current route
        if (englishRoutes.includes(pathname)) {
            setLanguage("en");
        } else if (serbianRoutes.includes(pathname)) {
            setLanguage("sr");
        }
    }, [pathname]);

    return <>{language === "en" ? <><HeaderEng/>{ children }<FooterEng /></> : <><Header/>{ children }<Footer /></>}</>;
};