export interface LandingPageData {
    meta: Meta;
    links: Link[];
    logo: string;
    heroData: HeroData;
    featuresData: FeaturesData;
    motivationData: MotivationData;
    advantagesData: AdvantagesData;
    brandsData: BrandsData;
    pricingData: PricingData;
}
export interface HeroData {
    title: string;
    subTitle: string;
    waitListQuestion: string;
    waitListMessage: string;
    waitListPlaceholder: string;
    highlightedTitle: string;
}

export interface FeaturesData {
    title: string;
    features: Feature[];
}

export interface Feature {
    title: string;
    icon: string;
    description: string;
}

export interface AdvantagesData {
    title: string;
    advantages: Advantage[];
}

export interface Advantage {
    title: string;
    description: string;
    img: string;
    imageAlt: string;
    checks: string[];
}

export interface MotivationData {
    title: string;
    description: string;
    ptoFeature: {
        title: string;
        items: { title: string; description: string }[];
    };
    teamCultureFeature: {
        title: string;
        paragraph1: string;
        paragraph2: string;
        paragraph3: string;
        paragraph4: string;
    };
    finalParagraph: string;
}

export interface Link {
    label: string;
    href: string;
}

export interface Social {
    icon: string;
    href: string;
}

export interface BrandsData {
    title: string;
    description: string;
    brands: Brand[];
}

export interface Brand {
    label: string;
    icon: string;
    href: string;
}

export interface PricingData {
    title: string;
    tiers: Tier[];
}

export interface Tier {
    title: string;
    description: string;
    price: Price;
    features: string[];
    cta: string;
}

export interface Price {
    amount: string;
    period?: string;
}

export interface Meta {
    title: string;
    description: string;
    lang: string;
    charset: string;
    ldJson: LdJson;
}

export interface LdJson {
    '@context': string;
    '@type': string;
    name: string;
    description: string;
    url: string;
    logo: string;
    contactPoint: {
        '@type': string;
        email: string;
        contactType: string;
    };
    sameAs: string[];
}

export type Icon = 'DevIcon' | 'FileIcon' | 'PlanetIcon' | 'ConfigIcon' | 'CheckIcon' | 'InstagramIcon' | 'GithubIcon' | 'TwitterIcon' | 'FacebookIcon' | 'ReactIcon' | 'SvelteIcon' | 'SolidIcon' | 'VueIcon' | 'VercelIcon' | 'NetlifyIcon';
