import PropTypes from 'prop-types';
import { FriendStatus, FriendAvatar, FriendName } from './FriendList.styled';

export function FriendCard({ avatar, name, isOnline }) {
    return (
<>
  <FriendStatus status = {isOnline}></FriendStatus>
  <FriendAvatar src={avatar} alt="User avatar" width="48" />
  <FriendName>{name}</FriendName>
</>
    );
}

FriendCard.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
    
}