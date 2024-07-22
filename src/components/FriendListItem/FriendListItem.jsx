const FriendListItem = ({avatar, name, isOnline = false}) => {
  return (
<>
<div>
  <img src={avatar} alt="Avatar" width="48" />
  <p>{name}</p>
<p>{isOnline === true ? "Online" : "Offline"}</p>
</div>

</>

);
}

export default FriendListItem;