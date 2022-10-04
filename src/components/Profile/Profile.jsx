import PropTypes from 'prop-types';
import { UserCard } from './UserCard/UserCard';
import { UserStats } from './UserStats/UserStats';

export function Profile({ user:{username, tag, location, avatar, stats} }) {
    return (
    <div className="profile">
    <UserCard
        username={username}
        tag={tag}
        location={location}
        avatar={avatar}
    />
    <UserStats
        followers={stats.followers}
        views={stats.views}
        likes={stats.likes}
    />
    </div>
    );
}

Profile.propTypes = {
    user: PropTypes.shape().isRequired
};