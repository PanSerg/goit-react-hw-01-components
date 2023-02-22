import PropTypes from 'prop-types';
import { Active } from './FriendListItem.styled';

const FriendListItem = ({ items: { avatar, name, isOnline } }) => {
    return (
      <li>
        <span className="status">
          <img className="avatar" src={avatar} alt={name} width="48" />
          <span status={isOnline ? 'Online' : 'offline'}>0</span>
        </span>
      </li>
    );
};

FriendListItem.propTypes = {
    items: PropTypes.shape({
        isOnline: PropTypes.bool.isRequired,
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
    })
};

export default FriendListItem;