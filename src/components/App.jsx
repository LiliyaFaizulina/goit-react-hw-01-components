import { user, data, friends, transactions } from '../data';
import { Profile } from "./Profile/Profile";
import { Statistics } from "./Statistics/Statistics";
import { FriendList } from "./FriendList/FriendList";
import { TransactionTable } from './TransactionHistory/TransactionHistory';

export const App = () => {
  return (
    <>
      <Profile user={user} />
      <Statistics
        title="Upload stats"
        stats = {data}
      />
      <FriendList friends={friends} />
      <TransactionTable transactions={transactions} />
    </>
  );
};
