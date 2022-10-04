import styled from 'styled-components';

const setBgColor = ({children, theme})=> {
    switch (children[0].props.children) {
        case ".docx":
            return theme.bgColors.blue;
        case ".pdf":
            return theme.bgColors.violet;
        case ".mp3":
            return theme.bgColors.red;
        case ".psd":
            return theme.bgColors.azure;
    }
}

export const Section = styled.section`
    margin: 30px auto;
    padding-top: 30px;
    width: 280px;
    text-align: center;
    box-shadow: 0px 1px 4px rgba(126, 147, 255, 0.2);
    border-radius: 6px;
    overflow: hidden;
    background-color: ${p => p.theme.bgColors.primary};
`;

export const Heading = styled.h2`
    margin-bottom: 30px;
    font-weight: 600;
    font-size: 18px;
    line-height: 21px;
    letter-spacing: 0.03em;
    text-transform: uppercase;
    color: ${p => p.theme.colors.primary};
`;

export const StatList = styled.ul`
    display: flex;
`;

export const StatItem = styled.li`
    display: flex;
    padding-top: 8px;
    padding-bottom: 8px;
    gap:  6px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex-grow: 1;
    font-size: 12px;
    line-height: 14px;
    color: ${p => p.theme.colors.light};
    background-color: ${p => setBgColor};
`;

export const StatPercentage = styled.span`
    font-weight: 600;
`
