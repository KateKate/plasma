import React from 'react';

import { ReactComponent as Replay } from '../Icon.assets/replay.svg';
import { IconRoot } from '../IconRoot';

interface IconProps {
    size?: 's' | 'm' | 'l';
    color?: string;
    className?: string;
}

export const IconReplay: React.FC<IconProps> = ({ size, className }) => {
    return <IconRoot className={className} size={size} icon={Replay} />;
};