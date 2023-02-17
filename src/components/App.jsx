import UserList from './Profile/UserList';
import user from '../components/data/user.json';

import Statistics from './stats/statistics';
import data from '../components/data/data.json';

export const App = () => {
  return (
    <div>
      <UserList items={user} />
      <Statistics items={data} />
    </div>
  );
};
