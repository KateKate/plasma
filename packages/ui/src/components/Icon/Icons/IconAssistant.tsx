import React from 'react';

import { ReactComponent as Assistant } from '../Icon.assets/assistant.svg';
import { IconRoot } from '../IconRoot';

interface IconProps {
    size?: 's' | 'm' | 'l';
    color?: string;
    className?: string;
}

export const IconAssistant: React.FC<IconProps> = ({ size, className }) => {
    return <IconRoot className={className} size={size} icon={Assistant} />;
};