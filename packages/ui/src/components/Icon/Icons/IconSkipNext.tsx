import React from 'react';

import { ReactComponent as SkipNext } from '../Icon.assets/skip-next.svg';
import { IconRoot } from '../IconRoot';

interface IconProps {
    size?: 's' | 'm' | 'l';
    color?: string;
    className?: string;
}

export const IconSkipNext: React.FC<IconProps> = ({ size, className }) => {
    return <IconRoot className={className} size={size} icon={SkipNext} />;
};