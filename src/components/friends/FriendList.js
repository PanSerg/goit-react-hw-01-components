import PropTypes from 'prop-types';
import FriendListItem from './friendListItem';


const FriendList = ({ items }) => {
    return (
        <div>
            <FriendList>
                {items.map(friend => (
                    <FriendListItem items={friend} key={friend.id} />
                ))}
            </FriendList>
        </div>
    );
};

FriendList.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
    })),
};

export default FriendList;