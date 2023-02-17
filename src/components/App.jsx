import { UserList } from './UserList';
import user from './user.json';

export const App = () => {
  return (
    <div>
      <UserList items={user} /> 
    </div>
  );
};
