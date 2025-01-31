import landingData from '@/data/landing.json';
import type { LandingPageData } from '@/models/landing.interface';

export const getLandingData = () => landingData as LandingPageData;
