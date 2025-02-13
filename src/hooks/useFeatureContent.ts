import type { Feature, FeatureContent } from '@/models/features.types';

const FEATURE_CONTENT: Record<Feature, FeatureContent> = {
    dashboard: {
        imageSrc: 'assets/images/dashboard.webp',
        imageAlt: 'dashboard screenshot',
        bgClasses: 'bg-primary-50',
    },
    pto: {
        imageSrc: 'assets/images/pto-table.webp',
        imageAlt: 'pto screenshot',
        bgClasses: 'bg-tertiary-50',
    },
    'team-members': {
        imageSrc: 'assets/images/team-members.webp',
        imageAlt: 'team-members screenshot',
        bgClasses: 'bg-fifthly-50',
    },
    absences: {
        imageSrc: 'assets/images/absences.webp',
        imageAlt: 'absences screenshot',
        bgClasses: 'bg-fourthly-50',
    },
};

export const useFeatureContent = (feature: Feature) => {
    return FEATURE_CONTENT[feature];
};
