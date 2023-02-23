import PropTypes from 'prop-types';
import {ImgStyle, ListStat, NameStyle, Stats, ProfileCard } from './UserList.Styled';

const Profile = ({
    items: {
        avatar,
        username,
        tag,
        location,
        stats: {
            followers,
            views,
            likes,
        },
    }
}) => {
    return (
      <ProfileCard>
        <ImgStyle>
          <img src={avatar} alt="User avatar" />
          <NameStyle>{username}</NameStyle>
          <p>{tag}</p>
          <p>{location}</p>
        </ImgStyle>

          <ListStat>
            <li>
              <span>Followers: </span>
              <Stats>{followers}</Stats>
            </li>
            <li>
              <span>Views: </span>
              <Stats>{views}</Stats>
            </li>
            <li>
              <span>Likes: </span>
              <Stats>{likes}</Stats>
            </li>
          </ListStat>
      </ProfileCard>
    );
};

Profile.propTypes = {
  items: PropTypes.shape({
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
  }),
};

export default Profile; 