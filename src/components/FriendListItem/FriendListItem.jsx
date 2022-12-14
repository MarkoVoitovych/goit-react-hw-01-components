import css from './FriendListItem.module.css';
import { RiNotificationOffLine, RiNotificationLine } from 'react-icons/ri';

export const FriendListItem = ({ friends }) => {
  return (
    <ul className={css.friendList}>
      {friends.map(friend => {
        return (
          <li key={friend.id} className={css.item}>
            <span className={css.status}>
              {friend.isOnline ? (
                <RiNotificationLine
                  size={24}
                  style={{
                    fill: 'rgb(0, 128, 0)',
                  }}
                />
              ) : (
                <RiNotificationOffLine
                  size={24}
                  style={{
                    fill: 'rgb(128, 0, 0)',
                  }}
                />
              )}
            </span>
            <img
              className={css.avatar}
              src={friend.avatar}
              alt={friend.name}
              width="96"
            />
            <p className={css.name}>{friend.name}</p>
          </li>
        );
      })}
    </ul>
  );
};
