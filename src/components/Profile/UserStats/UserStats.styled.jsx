import styled from 'styled-components';

export const StatsList = styled.ul`
    display: flex;
    background-color: ${p => p.theme.bgColors.secondary};
    border-top: 1px solid ${p => p.theme.colors.primary};
`;

export const StatsItem = styled.li`
    padding: 20px 10px;
    width: calc(100%/3);
    text-align: center;
    &:not(:last-child){
        border-right: 1px solid ${p => p.theme.colors.primary};
    }
`;

export const StatLabel = styled.span`
    display: block;
    margin-bottom: 6px;
    font-size: 12px;
    line-height: 14px;
    color: ${p => p.theme.colors.primary};
`;

export const StatQuantity = styled.span`
    font-weight: 600;
    font-size: 14px;
    line-height: 16px;
    color: ${p => p.theme.colors.heading};
`;
