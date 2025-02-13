import type { PropsWithChildren } from 'react';

interface Props extends PropsWithChildren {
    bgClasses: string;
    title: string;
    isActive: boolean;
    onClick: VoidFunction;
}

export const FeatureButton = ({ bgClasses, title, children, isActive, onClick }: Props) => (
    <>
        <button
            data-active={isActive ? 'true' : 'false'}
            className={`p-5 rounded-2xl peer transition ${bgClasses} hover:text-white data-[active=true]:text-white data-[active=true]:scale-150`}
            onClick={onClick}
        >
            {children}
        </button>
        <span
            data-active={isActive ? 'true' : 'false'}
            className="capitalize text-fuscous-gray-500 text-sm peer-hover:text-black transition peer-hover:font-semibold data-[active=true]:text-black data-[active=true]:font-semibold relative data-[active=true]:top-8"
        >
            {title}
        </span>
    </>
);
