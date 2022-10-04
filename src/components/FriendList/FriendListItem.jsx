import PropTypes from 'prop-types';

export function FriendCard({ avatar, name, isOnline }) {
    const online = { isOnline };
    return (
<>
  <span className="status"></span>
  <img className="avatar" src={avatar} alt="User avatar" width="48" />
  <p className="name">{name}</p>
</>
    );
}

FriendCard.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
    
}