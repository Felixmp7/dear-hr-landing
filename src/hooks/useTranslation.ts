import { DEFAULT_LANG } from '@/i18n/i18n.utils';
import { ui } from '@/i18n/strings.translations';

export function useTranslations(lang: keyof typeof ui) {
    return function t(key: keyof (typeof ui)[typeof DEFAULT_LANG]) {
        return ui[lang][key] || ui[DEFAULT_LANG][key];
    };
}
