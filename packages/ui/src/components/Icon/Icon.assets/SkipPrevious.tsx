import React from 'react';

import { IconAsset } from '../IconRoot';

export const SkipPrevious: React.FC<IconAsset> = (props) => (
    <svg viewBox="0 0 20 20" fill="none" {...props}>
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M3.012 12.153l6.501 4.774a2.61 2.61 0 004.154-2.103V5.276a2.61 2.61 0 00-4.154-2.103L3.012 7.947a2.61 2.61 0 000 4.206zm9.231 2.671a1.186 1.186 0 01-1.887.956l-6.502-4.774a1.186 1.186 0 010-1.912l6.502-4.774a1.186 1.186 0 011.887.956v9.548z"
            fill="currentColor"
        />
        <rect width={1.66} height={14.232} rx={0.83} transform="matrix(-1 0 0 1 1.994 2.98)" fill="currentColor" />
    </svg>
);
