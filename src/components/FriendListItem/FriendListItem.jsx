import css from './FriendListItem.module.css';
import clsx from 'clsx';

export default function FriendListItem({ name, avatar, isOnline }) {
  const statusClsx = clsx(isOnline ? css.online : css.offline);

  return (
    <div className={css.friendListItem}>
      <img src={avatar} alt="User avatar" width="48" />
      <p>{name}</p>
      <p className={statusClsx}>{isOnline ? 'Online' : 'Offline'}</p>
    </div>
  );
}
