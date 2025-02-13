import metaLdJson from '@/data/metaLd.json';
import { ui } from './strings.translations';

export const DEFAULT_LANG = 'es';

export const getLangFromUrl = (url: URL) => {
    const [, lang] = url.pathname.split('/');
    if (lang in ui) return lang as keyof typeof ui;
    return DEFAULT_LANG;
};

export const getMetaLdJson = (lang: keyof typeof ui) => JSON.stringify(metaLdJson[lang]);
