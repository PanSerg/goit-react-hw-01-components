import UserList from '../Profile/UserList';
import user from '../components/data/user.json';

import Statistics from '../Stats/statistics';
import data from '../components/data/data.json';

import FriendList from '../Friends/FriendList';
import friends from './data/friends.json';

import TransactionHistory from '../TransactionHistory/TransactionHistory';
import transactions from './data/transactions.json';

export const App = () => {
  return (
    <div>
      <UserList items={user} />
      <Statistics items={data} />
      <FriendList items={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
};
