import UserList from './Profile/UserList';
import user from '../components/data/user.json';

import Statistics from './Stats/statistics';
import data from '../components/data/data.json';

import FriendList from './Friends/FriendList';
import friends from './data/friends.json';

import TransactionHistory from './TransactionHistory/TransactionHistory';
import transactions from './data/transactions.json';

import { Container } from './App/App.styled';
import { ProfileStyle } from './Profile/UserList.Styled';

export const App = () => {
  return (
    <Container>
      <ProfileStyle>
        <UserList items={user} />
      </ProfileStyle>
      <Statistics items={data} />
      <FriendList items={friends} />
      <TransactionHistory items={transactions} />
    </Container>
  );
};
