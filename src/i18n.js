import i18 from 'i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from 'react-i18next';
import i18next from 'i18next';

i18.use(Backend).use(LanguageDetector).use(initReactI18next).init({

    backend:{
        //translation file paths are given in backcend
        loadPath:"assets/i18n/{{ns}}//{{lng}}.json"
    },
    fallbackLng: 'en',
    debug: true,
    ns:["Login","Signup","Products"],
    interpolation:{
        escapeValue:false,
        formatSeparator:","
    },
    react:{
        wait:true
    }
})

export default i18next;