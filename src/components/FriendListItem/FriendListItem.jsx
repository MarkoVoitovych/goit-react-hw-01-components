import PropTypes from 'prop-types';
import css from './FriendListItem.module.css';
import { RiNotificationOffLine, RiNotificationLine } from 'react-icons/ri';

export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <li className={css.item}>
      <span className={css.status}>
        {isOnline ? (
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
      <img className={css.avatar} src={avatar} alt={name} width="96" />
      <p className={css.name}>{name}</p>
    </li>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
