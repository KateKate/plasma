import React from 'react';
import styled from 'styled-components';

import Story from '../../helpers/Story';
import { LooneyTunes } from './LooneyTunes';

const StyledLooneyTunesContainer = styled.div`
    width: 100%;
    height: 500px;

    display: flex;
    justify-content: center;
    align-items: center;

    color: rgba(255, 255, 255, 0.7);
`;

export default {
    title: 'LooneyTunes',
};

export const Default = () => (
    <Story>
        <StyledLooneyTunesContainer>
            <LooneyTunes size={ 100 } maxSize={ 500 } circles={ 2 }>
                CONTENT
            </LooneyTunes>
        </StyledLooneyTunesContainer>
    </Story>
);
