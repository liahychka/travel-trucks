import FriendListItem from "./FriendListItem/FriendListItem";

function FriendList({ friends }) {
    return (
        <div>
            {friends.map((friend) => {
                return (
                    <FriendListItem
                        avatar={friend.avatar}
                        name={friend.name}
                        isOnline={friend.isOnline}
                        key={friend.id}
                    />
                );
            })}
        </div>
    );
}

export default FriendList;