import styled from 'styled-components';

export const TransactionTable = styled.table`
    margin: 30px auto;
    width: 550px;
    text-align: center;
    border-spacing: 1px 0px;
    box-shadow: 0px 1px 4px rgba(126, 147, 255, 0.2);
    border-radius: 6px;
    font-size: 12px;
    line-height: 14px;
    letter-spacing: 0.03em;
    overflow: hidden;
`;

export const TableHeadList = styled.thead`
    height: 30px;
    background-color: ${p => p.theme.bgColors.blue};
    font-weight: 600;
    text-transform: uppercase;
    color: ${p => p.theme.colors.light};
`;

export const TransactionItem = styled.tr`
    height: 30px;
    &:nth-child(even){
        background-color: ${p => p.theme.bgColors.secondary};
    }
    &:nth-child(odd){
        background-color: ${p => p.theme.bgColors.primary};
    }

    color: ${p => p.theme.colors.primary};
`;