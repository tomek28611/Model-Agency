import { useEffect } from 'react';

const GoogleTranslate = () => {
  useEffect(() => {
    // Załaduj Google Translate API
    const script = document.createElement('script');
    script.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
    script.async = true;
    document.body.appendChild(script);

    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        {pageLanguage: 'en', includedLanguages: 'en,cs,pl,de,fr,es,it'}, // Tutaj możesz dodać obsługiwane języki
        'google_translate_element'
      );
    };
  }, []);

  return (
    <div id="google_translate_element"></div>
  );
};

export default GoogleTranslate;
