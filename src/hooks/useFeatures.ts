import { useState } from 'react';

import type { Feature } from '@/models/features.types';

export const useFeatures = () => {
    const [featureSelected, setFeatureSelected] = useState<Feature>('dashboard');

    const handleSelectFeature = (feature: Feature) => setFeatureSelected(feature);

    return { featureSelected, handleSelectFeature };
};
