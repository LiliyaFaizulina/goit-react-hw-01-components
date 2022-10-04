import styled from 'styled-components';

export const FriendCardList = styled.ul`
    margin: 30px auto;
    padding: 10px;
    width: 280px;
    background-color: ${p => p.theme.bgColors.secondary};
    box-shadow: 0px 1px 4px rgba(126, 147, 255, 0.2);
    border-radius: 6px;
    overflow: hidden;
`;

export const FriendCardItem = styled.li`
    &:not(:last-child) {
        margin-bottom: 10px;
    }
    padding: 10px;
    display: flex;
    align-items: center;
    gap: 10px;
    background-color: ${p => p.theme.bgColors.primary};
    box-shadow: 0px 1px 4px rgba(126, 147, 255, 0.2);
    border-radius: 6px;
`;

export const FriendStatus = styled.span`
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background-color: ${({status, theme})=>status? theme.bgColors.green : theme.bgColors.red};
`;

export const FriendAvatar = styled.img`
    width: 56px;
    height: 56px;
    border-radius: 6px;
    box-shadow: 0px 1px 4px rgba(126, 147, 255, 0.2);
`;

export const FriendName = styled.p`
    font-weight: 600;
    font-size: 18px;
    line-height: 21px;
    letter-spacing: 0.01em;
    color: ${p => p.theme.colors.heading};
`;