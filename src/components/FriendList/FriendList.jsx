import PropTypes from 'prop-types';
import { FriendCard } from './FriendListItem';

export function FriendList({ friends }) {
    return (
        <ul className="friend-list">
            {friends.map(({ id, avatar, name, isOnline }) =>
                <li className="item" key={id}>
                <FriendCard
                    avatar={avatar}
                    name={name}
                    isOnline={isOnline}
                />
                </li>)}
        </ul>
    )
}

FriendList.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired
    }))
}