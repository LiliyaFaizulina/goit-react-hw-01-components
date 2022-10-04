import PropTypes from "prop-types";
import { StatsList, StatsItem, StatLabel, StatQuantity } from "./UserStats.styled";

export function UserStats({followers, views, likes}){
    return (
        <StatsList>
            <StatsItem>
                <StatLabel>Followers</StatLabel>
                <StatQuantity>{followers}</StatQuantity>
            </StatsItem>
            <StatsItem>
                <StatLabel>Views</StatLabel>
                <StatQuantity>{views}</StatQuantity>
            </StatsItem>
            <StatsItem>
                <StatLabel>Likes</StatLabel>
                <StatQuantity>{likes}</StatQuantity>
            </StatsItem>
        </StatsList>
    );
}

UserStats.propTypes = {
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired
};
