import clsx from "clsx";
import css from "../FriendList/FriendList"

const FriendListItem = ({ avatar, name, isOnline = false }) => {
  return (
<>
  <div className={css.boxItem}>
    <img src={avatar} alt="Avatar" width="48" />
    <p>{name}</p>
        <p className={clsx(css.status, {
          [css.online]: isOnline === "Online",
          [css.offline]: isOnline === "Offline"
        })}>
      {isOnline === true ? "Online" : "Offline"}</p>          
</div>

</>

);
}

export default FriendListItem;