import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import XHR from 'i18next-xhr-backend';
import LocizeBackend from 'i18next-locize-backend';
import whichBackend from './whichBackend';
import moment from 'moment';


const options = {
  fallbackLng: 'en',

  // have a common namespace used around the full app
  ns: ['translations'],
  defaultNS: 'translations',

  keySeparator: false, // we use content as keys

  interpolation: {
    escapeValue: false, // not needed for react!!
    formatSeparator: ',',
    format: function(value, format, lng) {
      if(value instanceof Date) return moment(value).format(format);
      return value;
    }
  }, 

  react: {
    wait: true
  }
};

switch (whichBackend()) {

  case 'locize':
    options.backend = {
      projectId: '9fa57726-b7a6-4d1c-bbf6-37629309e4c5', // <-- replace with your projectId
      apiKey: 'your apiKey',
      referenceLng: 'en'
    };
    i18n.use(LocizeBackend);
    break;

  case 'xhr':
    options.backend = {
      loadPath: '/locales/{{lng}}/{{ns}}.json',
    };
    i18n.use(XHR);
    break;

  case 'memory':
  default:
    options.resources = {
      en: {
        translations: {
          "To get started, edit <1>src/App.js</1> and save to reload.": "To get started, edit <1>src/App.js</1> and save to reload.",
          "Welcome to React": "Welcome to React and react-i18next",
          "advice": "Try to set the query parameter \"backend\" to memory, xhr or locize i.e. {{url}}",
          "Welcome to Chart": "Welcome to Chart",
          "userMessagesUnread": "Hello <1><0>{{name}}</0></1>, you have <3>{{count}}</3> unread message. <5>Go to message</5>.",         
          "copyright":"<1>{{date, YYYY}}</1>. - All rights reserved",
          "test": "hello, it is now   {{date}}"

        }
      },
      hi: {
        translations: {
          "To get started, edit <1>src/App.js</1> and save to reload.": "शुरू करने के लिए, संपादित करें <1>src/App.js</1> और पुनः लोड करने के लिए सहेजें.",
          "Welcome to React": "प्रतिक्रिया और प्रतिक्रिया-i18next में आपका स्वागत है",
          "advice": "क्वेरी पैरामीटर सेट करने का प्रयास करें \"बैकएंड\" स्मृति, xhr या locize i.e. {{url}}",
          "Welcome to Chart": "चार्ट में आपका स्वागत है",
          "userMessagesUnread": "हैलो <1><0>{{name}}</0></1>, you have <3>{{count}}</3> unread message. <5>Go to message</5>.",          
          "copyright":"<1>{{date, YYYY}}</1>. - सर्वाधिकार सुरक्षित",
          "test": "हैलो, अब यह है  {{date}}"

        }
      },
      de: {
        translations: {
          "To get started, edit <1>src/App.js</1> and save to reload.": "Starte in dem du, <1>src/App.js</1> editierst und speicherst.",
          "Welcome to React": "Willkommen bei React und react-i18next",
          "advice": "Versuche den query Parameter \"backend\" auf memory, xhr oder locize zu setzen zBsp. {{url}}",
          "Welcome to Chart": "Willkommen in der Tabelle",
          "userMessagesUnread": "Hallo <1><0>{{name}}</0></1>, du hast <3>{{count}}</3> ungelesene Nachricht. <5>Gehe zur Nachricht</5>.",          
          "copyright":"{{date, YYYY}}. - Alle Rechte vorbehalten",
          "test": "hallo, es ist jetzt   {{date}}"

        }
      }
    };

}

export default () => {
  i18n
    .use(LanguageDetector)
    .init(options);
  return i18n;
};
