import Profile from '../Profile/Profile';
import userData from '../userData.json';

import FriendList from '../FriendList/FriendList';
import friends from '../friends.json';

import transactions from '../transactions.json';
import TransactionHistory from '../TransactionHistory/TransactionHistory';

export default function App() {
  return (
    <div>
      <div className={CSS.profile}>
        <Profile
          username={userData.username}
          tag={userData.tag}
          location={userData.location}
          avatar={userData.avatar}
          stats={userData.stats}
        />
      </div>

      <div>
        <FriendList friends={friends} />
      </div>

      <div>
        <TransactionHistory items={transactions} />
      </div>
    </div>
  );
}
