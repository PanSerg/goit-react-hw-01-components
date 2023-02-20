import PropTypes from 'prop-types';
import Online from '';

const FriendListItem = ({ items: { avatar, name, isOnline } }) => {
    return (
        <li className="item">
                <span className="status">
                    <Online status={isOnline ? 'isOnline' : 'offline'}>0</Online>
                </span>
          <img className="avatar" src={avatar} alt={name} width="48" />
                <p className={name}></p>     
        </li>
    );
}

FriendListItem.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        isOnline: PropTypes.bool.isRequired,
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
    }))
};

export default FriendListItem;