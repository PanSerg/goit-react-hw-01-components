import PropTypes from 'prop-types';
import FriendListItem from './friendListItem';


const FriendList = ({ items }) => {
    return (
        <ul>
                {items.map(friend => (
                    <FriendListItem items={friend} key={friend.id} />
                ))}
        </ul>
    );
};

FriendList.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
    })),
};

export default FriendList;