import React from 'react';

import { ReactComponent as SkipPrevious } from '../Icon.assets/skip-previous.svg';
import { IconRoot, IconProps } from '../IconRoot';

export const IconSkipPrevious: React.FC<IconProps> = ({ size, className }) => {
    return <IconRoot className={className} size={size} icon={SkipPrevious} />;
};
