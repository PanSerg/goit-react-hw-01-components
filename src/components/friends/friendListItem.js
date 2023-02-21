import PropTypes from 'prop-types';


const FriendListItem = ({ items: { avatar, name, isOnline } }) => {
    return (
        <li className="item">
            <span className="status">
                <span status={isOnline ? 'isOnline' : 'offline'}>0</span>
            </span>
            <img className="avatar" src={avatar} alt={name} width="48" />
            <p className={name}></p>
        </li>
    );
};

FriendListItem.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        isOnline: PropTypes.bool.isRequired,
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
    }))
};

export default FriendListItem;