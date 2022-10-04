import PropTypes from 'prop-types';
import { FriendCard } from './FriendListItem';
import { FriendCardList, FriendCardItem } from './FriendList.styled';

export function FriendList({ friends }) {
    return (
        <FriendCardList>
            {friends.map(({ id, avatar, name, isOnline }) =>
                <FriendCardItem key={id}>
                <FriendCard
                    avatar={avatar}
                    name={name}
                    isOnline={isOnline}
                />
                </FriendCardItem>)}
        </FriendCardList>
    )
}

FriendList.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired
    }))
}