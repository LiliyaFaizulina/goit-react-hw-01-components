import PropTypes from 'prop-types';
import { UserCard } from './UserCard/UserCard';
import { UserStats } from './UserStats/UserStats';
import { Container } from './Profile.styled';

export function Profile({ user:{username, tag, location, avatar, stats} }) {
    return (
    <Container>
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
    </Container>
    );
}

Profile.propTypes = {
    user: PropTypes.shape().isRequired
};