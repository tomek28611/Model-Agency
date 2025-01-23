'use client'

import Image from "next/image"
import { HoverEffect } from "@/components/ui/card-hover-effect";
import { PiAppStoreLogo, PiHeadsetFill, PiLock, PiMegaphone, PiMonitor, PiStorefront } from "react-icons/pi";
import { Ri24HoursLine } from "react-icons/ri";
import { MdContentPaste } from "react-icons/md";
import { GiLovers } from "react-icons/gi";
import { GrUserExpert } from "react-icons/gr";
import { IoCashOutline } from "react-icons/io5";
import i18n from "../i18n";
import "../i18n";
import { I18nextProvider } from "react-i18next";
import { useTranslation } from 'react-i18next';
import { Gb, Cz, De, Pl } from "react-flags-select";
import '../styles/globals.css';



const WebsiteDesign = () => {
    const { t, i18n } = useTranslation();

     const projects = [
        {
            icon: <div className="bg-blue-100 p-4 rounded-full"><Ri24HoursLine  className="w-8 h-8 text-blue-600" /></div>,
            title: t('k1'),
            description:
                t('k2'),
    
        },
        {
            icon: <div className="bg-blue-100 p-4 rounded-full"><MdContentPaste  className="w-8 h-8 text-blue-600" /></div>,
            title: t('k1_desc'),
            description:
               t('k2_desc'),
    
        },
        {
            icon: <div className="bg-blue-100 p-4 rounded-full"><GiLovers  className="w-8 h-8 text-blue-600" /></div>,
            title: t('k3'),
            description:
                t('k3_desc'),
    
        },
        {
            icon: <div className="bg-blue-100 p-4 rounded-full"><PiMegaphone className="w-8 h-8 text-blue-600" /></div>,
            title: t('k4'),
            description:
                t('k4_desc'),
    
        },
        {
            icon: <div className="bg-blue-100 p-4 rounded-full"><GrUserExpert className="w-8 h-8 text-blue-600" /></div>,
            title: t('k5'),
            description:
                t('k5_desc'),
    
        },
        {
            icon: <div className="bg-blue-100 p-4 rounded-full"><IoCashOutline className="w-8 h-8 text-blue-600" /></div>,
            title: t('k6'),
            description:
                t('k6_desc'),
    
        },
    ];
    
    return (
        <div className="text-white">
            <div className="p-4 mx-auto relative z-10 w-full pt-10 md:pt-20 px-2">
                <div className="text-4xl  md:text-7xl text-center bg-clip-text text-transparent bg-gradient-to-b from-purple-500 to-sky-200 bg-opacity-50">
                   {t('bs1')} <br /> {t('bs2')}
                </div>
                <p className="mt-4 text-lg font-normal  text-neutral-300 max-w-lg text-center mx-auto px-4">
                {t('b3')}
                </p>
            </div>

            <div className="max-w-5xl mx-auto px-8">
                <HoverEffect items={projects} />
            </div>

          
        </div>);
}

export default WebsiteDesign;