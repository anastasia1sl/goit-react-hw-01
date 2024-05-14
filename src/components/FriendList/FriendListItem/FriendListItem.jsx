import css from "./FriendListItem.module.css";
import clsx from "clsx";

const FriendListItem = ({ avatar, name, isOnline, id }) => {
  const friendStatus = clsx(isOnline ? css.online : css.offline);

  return (
    <>
      <li className={css.friendListItem} key={id}>
        <img src={avatar} alt={name} width={100} />
        <p className={css.friendName}>{name}</p>
        <p className={clsx(css.friendStatus, friendStatus)}>
          {isOnline ? "Online" : "Offline"}
        </p>
      </li>
    </>
  );
};

export default FriendListItem;
