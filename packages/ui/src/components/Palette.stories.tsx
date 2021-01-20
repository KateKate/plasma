import React from 'react';
import styled from 'styled-components';

import { Palette } from '../helpers/Palette';

const darkThemes = ['darkEva', 'darkJoy', 'darkSber'];
const lightThemes = ['lightEva', 'lightJoy', 'lightSber'];

const StyledContainer = styled.div`
    display: flex;
`;

const StyledBackground = styled.div<{ background: string }>`
    width: 50%;
    padding: 1rem;
    background: ${({ background }) => background};
`;

export default {
    title: 'Palette',
    component: Palette,
    decorators: [
        (Story) => (
            <div style={{ margin: '-16px' }}>
                <Story />
            </div>
        ),
    ],
};

export const Default = () => {
    return (
        <StyledContainer>
            <StyledBackground background="#292929">
                {darkThemes.map((theme, i) => (
                    <>
                        <Palette
                            key={`item:${i}`}
                            theme={theme}
                            title={i === 0 ? '🌚 Dark Theme Colors' : ''}
                            heading={theme}
                        />
                    </>
                ))}
            </StyledBackground>
            <StyledBackground background="#FAFAFA">
                {lightThemes.map((theme, i) => (
                    <>
                        <Palette
                            key={`item:${i}`}
                            theme={theme}
                            title={i === 0 ? '🌝 Light Theme Colors' : ''}
                            heading={theme}
                        />
                    </>
                ))}
            </StyledBackground>
        </StyledContainer>
    );
};