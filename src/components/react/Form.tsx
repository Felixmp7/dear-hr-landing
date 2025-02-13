import { actions } from 'astro:actions';
import { z } from 'astro:schema';
import { useState, type FormEvent } from 'react';

import { useTranslations } from '@/hooks/useTranslation';
import { SendIcon } from '../icons/SendIcon';

const fetchEmail = async (formData: FormData) => {
    try {
        const response = await fetch(actions.send, { method: 'POST', body: formData });
        return response.ok;
    } catch (error) {
        console.error(error);
        return false;
    }
};

const validateEmail = (email: string) => z.string().email().safeParse(email);

export const Form = ({ lang }: { lang: 'es' | 'en' }) => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | undefined>();
    const t = useTranslations(lang);

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        setIsLoading(true);
        event.preventDefault();
        const formData = new FormData(event.currentTarget);

        const validationResponse = validateEmail(formData.get('email') as string);

        if (validationResponse.success) {
            setError(undefined);
            try {
                const isSuccess = await fetchEmail(formData);

                if (isSuccess) localStorage.setItem('formSubmitted', 'true');
                else setError(t('hero.waitListError'));
            } catch (error) {
                console.error(error);
                setError(t('hero.waitListError'));
            } finally {
                setIsLoading(false);
            }
        } else {
            setError(t('hero.emailError'));
            setIsLoading(false);
        }
    };

    if (localStorage.getItem('formSubmitted')) {
        return <span className="text-secondary-700 text-center inline-block w-full mt-5">{t('hero.waitListSuccess')}</span>;
    }

    return (
        <div className="flex flex-col gap-1 text-center items-center text-gray-500 mt-10 text-balance">
            <span className="text-sm md:text-base">{t('hero.waitListQuestion')}</span>
            <span className="text-sm md:text-base">{t('hero.waitListMessage')}</span>
            <form
                noValidate
                className="flex flex-col sm:flex-row gap-4 items-center mt-5 text-sm sm:text-base w-full"
                onSubmit={handleSubmit}
            >
                <div className="relative w-full">
                    <input
                        name="email"
                        type="email"
                        disabled={isLoading}
                        className="border border-fuscous-gray-200 p-2 rounded-md mx-auto w-full disabled:bg-fuscous-gray-300 disabled:animate-pulse disabled:placeholder:text-fuscous-gray-500"
                        placeholder={t('hero.waitListPlaceholder')}
                    />
                    {Boolean(error) && <span className="text-red-400 text-xs absolute left-0 top-[calc(100%+0.5rem)]">{error}</span>}
                </div>
                <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full sm:w-auto flex items-center justify-center bg-tertiary-500 text-white rounded-md px-4 py-2 gap-2 disabled:bg-fuscous-gray-300 disabled:animate-pulse disabled:text-fuscous-gray-500"
                >
                    <span>{t('hero.waitListButton')}</span>
                    <SendIcon
                        width={20}
                        height={20}
                    />
                </button>
            </form>
        </div>
    );
};
