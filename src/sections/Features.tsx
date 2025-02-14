import { DashboardIcon } from '@/components/react/DashboardIcon';
import { FeatureButton } from '@/components/react/FeatureButton';
import { FeatureListItem } from '@/components/react/FeatureListItem';
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
            className="pt-52 w-full 2xl:w-4/5 mx-auto"
        >
            <h2 className="text-xl sm:text-2xl text-center md:text-5xl font-semibold mb-10 sm:mb-20">{t('nav.features')}</h2>
            <div className="flex flex-col-reverse items-center gap-10 md:gap-20 lg:grid lg:grid-flow-col lg:gap-32">
                <ul className="lg:w-96 flex lg:grid lg:grid-cols-2 gap-5 sm:gap-10 lg:place-items-center">
                    <FeatureListItem>
                        <FeatureButton
                            isActive={featureSelected === 'dashboard'}
                            title={t('features.dashboard.title')}
                            bgClasses="text-primary-600 bg-primary-100 hover:bg-primary-500 data-[active=true]:bg-primary-500"
                            onClick={() => handleSelectFeature('dashboard')}
                        >
                            <DashboardIcon className="w-3 h-3 sm:w-5 sm:h-5 md:w-auto md:h-auto" />
                        </FeatureButton>
                    </FeatureListItem>
                    <FeatureListItem>
                        <FeatureButton
                            isActive={featureSelected === 'pto'}
                            title={t('features.pto.title')}
                            bgClasses="text-tertiary-600 bg-tertiary-100 hover:bg-tertiary-500 data-[active=true]:bg-tertiary-500"
                            onClick={() => handleSelectFeature('pto')}
                        >
                            <PaidTimeOffIcon className="w-3 h-3 sm:w-5 sm:h-5 md:w-auto md:h-auto" />
                        </FeatureButton>
                    </FeatureListItem>
                    <FeatureListItem>
                        <FeatureButton
                            isActive={featureSelected === 'team-members'}
                            title={t('features.team-members.title')}
                            bgClasses="text-fifthly-600 bg-fifthly-100 hover:bg-fifthly-400 data-[active=true]:bg-fifthly-400"
                            onClick={() => handleSelectFeature('team-members')}
                        >
                            <UserSquareIcon
                                viewBox="1 0 22 22"
                                className="w-3 h-3 sm:w-5 sm:h-5 md:w-auto md:h-auto"
                            />
                        </FeatureButton>
                    </FeatureListItem>
                    <FeatureListItem>
                        <FeatureButton
                            isActive={featureSelected === 'absences'}
                            title={t('features.absences.title')}
                            bgClasses="text-fourthly-600 bg-fourthly-100 hover:bg-fourthly-500 data-[active=true]:bg-fourthly-500"
                            onClick={() => handleSelectFeature('absences')}
                        >
                            <UnavailableIcon className="w-3 h-3 sm:w-5 sm:h-5 md:w-auto md:h-auto" />
                        </FeatureButton>
                    </FeatureListItem>
                </ul>
                <aside className="rounded-lg overflow-hidden border border-fuscous-gray-100">
                    <header className="h-40 sm:h-60 md:h-72 overflow-auto scrollbar-thin scrollbar-thumb-fuscous-gray-300 scrollbar-track-transparent scroll-smooth">
                        <img
                            src={imageSrc}
                            alt={imageAlt}
                            className="object-cover w-full"
                        />
                    </header>
                    <main className={`h-full p-6 ${bgClasses}`}>
                        <h3 className="text-base sm:text-xl uppercase md:text-2xl font-bold">{t(`features.${featureSelected}.title`)}</h3>
                        <p className="text-xs sm:text-sm md:text-base">{t(`features.${featureSelected}.description`)}</p>
                    </main>
                </aside>
            </div>
        </section>
    );
};
