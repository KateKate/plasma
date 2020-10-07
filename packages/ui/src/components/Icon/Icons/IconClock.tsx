import React from 'react';

import { ReactComponent as Clock } from '../Icon.assets/clock.svg';
import { IconRoot } from '../IconRoot';

interface IconProps {
    size?: 's' | 'm' | 'l';
    color?: string;
    className?: string;
}

export const IconClock: React.FC<IconProps> = ({ size, className }) => {
    return <IconRoot className={className} size={size} icon={Clock} />;
};