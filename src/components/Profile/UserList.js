import PropTypes from 'prop-types';

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
      <div>
        <div>
          <img src={avatar} alt="User avatar" />
          <p>{username}</p>
          <p>{tag}</p>
          <p>{location}</p>
        </div>

        <ul>
          <li>
            <span className="label">Followers: </span>
            <span className="quantity">{followers}</span>
          </li>
          <li>
            <span className="label">Views: </span>
            <span className="quantity">{views}</span>
          </li>
          <li>
            <span className="label">Likes: </span>
            <span className="quantity">{likes}</span>
          </li>
        </ul>
      </div>
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