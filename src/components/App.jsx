import css from './App.module.css';
import user from '../data/profile.json';
import data from '../data/data.json';
import friends from '../data/friends.json';
import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import { FriendListItem } from './FriendListItem/FriendListItem';

export const App = () => {
  return (
    <div className={css.container}>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendListItem friends={friends} />
    </div>
  );
};
