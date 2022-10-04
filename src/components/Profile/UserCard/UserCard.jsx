import PropTypes from "prop-types";
import { Wrapper, Avatar, UserName, Tag, Location } from "./UserCard.styled";

export function UserCard({ avatar, username, tag, location }) {
    return (

    <Wrapper>
    <Avatar
      src={avatar}
      alt="User avatar"
    />
    <UserName>{username}</UserName>
    <Tag>@{tag}</Tag>
    <Location>{location}</Location>
  </Wrapper>
    )
}

UserCard.propTypes = {
    avatar: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired
};
