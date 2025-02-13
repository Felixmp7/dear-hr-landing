import { DashboardIcon } from '@/components/react/DashboardIcon';
import { FeatureButton } from '@/components/react/FeatureButton';
import { PaidTimeOffIcon } from '@/components/react/PaidTimeOffIcon';
import { UnavailableIcon } from '@/components/react/UnavailableIcon';
import { UserSquareIcon } from '@/components/react/UserSquareIcon';
import { useFeatureContent } from '@/hooks/useFeatureContent';
import { useFeatures } from '@/hooks/useFeatures';
import { useTranslations } from '@/hooks/useTranslation';
import { getLangFromUrl } from '@/i18n/i18n.utils';

export const Features = ({ url }: { url: URL }) => {
    const lang = getLangFromUrl(url);
    const t = useTranslations(lang);
    const { featureSelected, handleSelectFeature } = useFeatures();
    const { bgClasses, imageAlt, imageSrc } = useFeatureContent(featureSelected);

    return (
        <section
            id="features"
            className="pt-52 w-4/5 mx-auto"
        >
            <h2 className="text-xl sm:text-2xl text-center md:text-5xl font-semibold mb-20">{t('nav.features')}</h2>
            <div className="grid grid-flow-col gap-32">
                <ul className="w-96 grid grid-cols-2 gap-10 place-items-center">
                    <li className="flex flex-col items-center gap-y-4">
                        <FeatureButton
                            isActive={featureSelected === 'dashboard'}
                            title={t('features.dashboard.title')}
                            bgClasses="text-primary-600 bg-primary-100 hover:bg-primary-500 data-[active=true]:bg-primary-500"
                            onClick={() => handleSelectFeature('dashboard')}
                        >
                            <DashboardIcon />
                        </FeatureButton>
                    </li>
                    <li className="flex flex-col items-center gap-y-4">
                        <FeatureButton
                            isActive={featureSelected === 'pto'}
                            title={t('features.pto.title')}
                            bgClasses="text-tertiary-600 bg-tertiary-100 hover:bg-tertiary-500 data-[active=true]:bg-tertiary-500"
                            onClick={() => handleSelectFeature('pto')}
                        >
                            <PaidTimeOffIcon />
                        </FeatureButton>
                    </li>
                    <li className="flex flex-col items-center gap-y-4">
                        <FeatureButton
                            isActive={featureSelected === 'team-members'}
                            title={t('features.team-members.title')}
                            bgClasses="text-fifthly-600 bg-fifthly-100 hover:bg-fifthly-400 data-[active=true]:bg-fifthly-400"
                            onClick={() => handleSelectFeature('team-members')}
                        >
                            <UserSquareIcon viewBox="1 0 22 22" />
                        </FeatureButton>
                    </li>
                    <li className="flex flex-col items-center gap-y-4">
                        <FeatureButton
                            isActive={featureSelected === 'absences'}
                            title={t('features.absences.title')}
                            bgClasses="text-fourthly-600 bg-fourthly-100 hover:bg-fourthly-500 data-[active=true]:bg-fourthly-500"
                            onClick={() => handleSelectFeature('absences')}
                        >
                            <UnavailableIcon />
                        </FeatureButton>
                    </li>
                </ul>
                <aside className="rounded-lg overflow-hidden border border-fuscous-gray-100">
                    <header className="h-72 overflow-auto scrollbar-thin scrollbar-thumb-fuscous-gray-300 scrollbar-track-transparent scroll-smooth">
                        <img
                            src={imageSrc}
                            alt={imageAlt}
                            className="object-cover w-full"
                        />
                    </header>
                    <main className={`h-full p-6 ${bgClasses}`}>
                        <h2 className="uppercase text-2xl font-bold">{t(`features.${featureSelected}.title`)}</h2>
                        <p>{t(`features.${featureSelected}.description`)}</p>
                    </main>
                </aside>
            </div>
        </section>
    );
};
