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
            <span class="label">Followers: </span>
            <span class="quantity">{followers}</span>
          </li>
          <li>
            <span class="label">Views: </span>
            <span class="quantity">{views}</span>
          </li>
          <li>
            <span class="label">Likes: </span>
            <span class="quantity">{likes}</span>
          </li>
        </ul>
      </div>
    );
};

Profile.propTypes = {
    items: PropTypes.string.isRequired, 
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired
};

export default Profile; 