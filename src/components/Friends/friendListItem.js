import PropTypes from 'prop-types';
import { Active } from './FriendListItem.styled';

const FriendListItem = ({ items: { avatar, name, isOnline } }) => {
    return (
      <li>
        <span>{name}</span>
        <img src={avatar} alt={name} width="48" />
        <Active className="status">{isOnline}</Active>
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