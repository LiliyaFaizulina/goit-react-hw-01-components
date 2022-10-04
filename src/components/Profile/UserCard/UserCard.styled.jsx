import styled from 'styled-components';

export const Wrapper = styled.div`
    padding: 25px;
    background-color: ${p => p.theme.bgColors.primary};
    text-align: center;
`;

export const Avatar = styled.img`
    margin-bottom: 27px;
    display: inline-block;
    width: 100px;
    height: 100px;
    border-radius: 50%;
`;

export const UserName = styled.p`
    margin-bottom: 10px;
    font-weight: 600;
    font-size: 18px;
    line-height: 21px;
    letter-spacing: 0.01em;
    color: ${p => p.theme.colors.heading};
`;

export const Tag = styled.p`
    margin-bottom: 10px;
    font-size: 14px;
    line-height: 16px;
    color: ${p => p.theme.colors.primary};
`;

export const Location = styled.p`
    font-size: 14px;
    line-height: 16px;
    color: ${p => p.theme.colors.primary};
`;