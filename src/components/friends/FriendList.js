import PropTypes from 'prop-types';
import { FriendsList } from './Friend.styled';
import FriendListItem from './friendListItem';


const FriendList = ({ items }) => {
    return (
        <FriendsList>
            {items.map(friend => (
                <FriendListItem items={friend} key={friend.id} />
            ))}
        </FriendsList>
    );
};

FriendList.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
    })),
};

export default FriendList;