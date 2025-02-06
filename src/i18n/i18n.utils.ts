import metaLdJson from '@/data/metaLd.json';
import { ui } from './strings.translations';

const DEFAULT_LANG = 'es';

export function getLangFromUrl(url: URL) {
    const [, lang] = url.pathname.split('/');
    if (lang in ui) return lang as keyof typeof ui;
    return DEFAULT_LANG;
}

export function useTranslations(lang: keyof typeof ui) {
    return function t(key: keyof (typeof ui)[typeof DEFAULT_LANG]) {
        return ui[lang][key] || ui[DEFAULT_LANG][key];
    };
}

export function getMetaLdJson(lang: keyof typeof ui) {
    return JSON.stringify(metaLdJson[lang]);
}
