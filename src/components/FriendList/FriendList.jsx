import css from "./FriendList.module.css";
import FriendListItem from "./FriendListItem/FriendListItem";

const FriendList = ({ friends }) => (
  <>
    <ul className={css.listFriends}>
      {friends.map(({ avatar, name, isOnline, id }) => {
        return (
          <FriendListItem
            key={id}
            id={id}
            avatar={avatar}
            isOnline={isOnline}
            name={name}
          />
        );
      })}
    </ul>
  </>
);

export default FriendList;
