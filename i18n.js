import i18next from "i18next";
import { initReactI18next } from "react-i18next";

i18next.use(initReactI18next).init({
    debug: true,
    fallbackLng: 'en',
    interpolation: {
        escapeValue: false,
    },
    resources: {
        en: {
            translation: {
                findgirl: "Want to take your OnlyFans",
                b2: "to the next level?",
                b3: "Turn your dreams into reality with the best OnlyFans model agency",
                bk: "Book a call ...",
                bs1: "Why do top models",
                bs2: "need an Agency ?",
                bs3: "We empower you with the tools and support to realize your dreams more quickly",
                jo: "Job offer",

            }
        },
        cz: {
            translation: {
                findgirl: "Chcete si vzít své OnlyFans",
                b2: "na další úroveň?",
                b3: "Proměňte své sny ve skutečnost s nejlepší modelovou agenturou OnlyFans",
                bk: "Zarezervujte hovor...",
                bs1: "Proč topmodelky",
                bs2: "potřebuje agenturu?",
                bs3: "Poskytujeme vám nástroje a podporu k rychlejšímu uskutečnění vašich snů",
                jo: "Nabídka práce",
            }
        },
        de: {
            translation: {
                findgirl: "Nach Standort suchen",

            }
        },
        pl: {
            translation: {
                findgirl: "Chcesz zabrać swojego OnlyFans",
                b2: "na następny poziom?",
                b3: "Zrealizuj swoje marzenia z najlepszą agencją modelek OnlyFans",
                bk: "Umów rozmowę ...",
                bs1: "Dlaczego topowe modelki",
                bs2: "potrzebuje agencji?",
                bs3: "Zapewniamy narzędzia i wsparcie, dzięki którym Twoje marzenia będą mogły być realizowane szybciej",
                jo: "Oferta pracy",
            }
        },
    },
});
export default i18next;