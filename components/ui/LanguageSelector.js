// 4b31922a53mshbb10bfa2cec6161p1fb38cjsn0e20d57bda37

import React, { useEffect, useState } from 'react';

const languages = [
    { code: 'cs', name: 'čeština' },
    { code: 'en', name: 'english' },
    { code: 'es', name: 'spanish' },
    { code: 'fr', name: 'french' },
    { code: 'de', name: 'german' },
    { code: 'pl', name: 'polish' },
  
];

// Funkcja do tłumaczenia tekstu przy użyciu Microsoft Translator API
const translateText = async (text, targetLang) => {
    const url = 'https://microsoft-translator-text.p.rapidapi.com/translate';
    const params = new URLSearchParams({
        'api-version': '3.0',
        'to': targetLang,
    });

    try {
        const response = await fetch(`${url}?${params}`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'x-rapidapi-key': '4b31922a53mshbb10bfa2cec6161p1fb38cjsn0e20d57bda37', // Zamień na swój klucz API
                'x-rapidapi-host': 'microsoft-translator-text.p.rapidapi.com',
            },
            body: JSON.stringify([{ text }]),
        });

        if (!response.ok) {
            const errorText = await response.text();
            throw new Error(`Error: ${response.statusText}, ${errorText}`);
        }

        const data = await response.json();
        return data[0].translations[0].text; // Zwróci przetłumaczony tekst
    } catch (error) {
        console.error('Translation error:', error);
        return 'Error in translation';
    }
};

const LanguageSelector = () => {
    const [selectedLanguage, setSelectedLanguage] = useState('en'); // Domyślny język to czeski
    const [translatedContent, setTranslatedContent] = useState({}); // Obiekt przechowujący przetłumaczone treści

    const handleLanguageChange = (e) => {
        setSelectedLanguage(e.target.value); // Zmieniamy język po kliknięciu
    };

    // Funkcja tłumacząca zawartość strony
    const translatePage = async () => {
        const elementsToTranslate = document.querySelectorAll('[data-translate]'); // Szukamy elementów z atrybutem data-translate

        const translations = {};
        for (let element of elementsToTranslate) {
            const text = element.innerText || element.textContent;
            const translatedText = await translateText(text, selectedLanguage);
            translations[element.id] = translatedText;
        }

        setTranslatedContent(translations);
    };

    useEffect(() => {
        translatePage(); // Tłumaczymy stronę przy każdej zmianie języka
    }, [selectedLanguage]);

    return (
        <div>
            <select onChange={handleLanguageChange} value={selectedLanguage}>
                {languages.map((lang) => (
                    <option key={lang.code} value={lang.code}>
                        {lang.name}
                    </option>
                ))}
            </select>
        </div>
    );
};

// Komponent strony, który zawiera elementy do przetłumaczenia
const PageContent = () => {
    return (
        <div>
            <h1 id="pageTitle" data-translate>Welcome to our store</h1>
            <p id="productDescription" data-translate>
                This is a description of the product. It is a great product that serves many purposes.
            </p>
            <p id="contactInfo" data-translate>Contact us at contact@ourstore.com</p>
        </div>
    );
};

const App = () => {
    return (
        <div>
            <LanguageSelector />
            <PageContent />
        </div>
    );
};

export default App;

