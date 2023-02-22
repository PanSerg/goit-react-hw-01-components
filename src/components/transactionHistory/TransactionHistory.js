import PropTypes from 'prop-types';
import { Transactions, TableTrans } from './TransactionSHistory.Styled';

const TransactionHistory = ({ items }) => {
    return (
      <Transactions>
        <thead>
          <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </thead>

        <TableTrans>
          {items.map(item => (
            <tr key={item.id}>
              <td>{item.type}</td>
                    <td>{item.amount}</td>
                    <td>{item.currency}</td>
                </tr>
          ))}
        </TableTrans>
      </Transactions>
    );
};

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(PropTypes.exact({
        id: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        amount: PropTypes.string.isRequired,
        currency: PropTypes.string.isRequired,
    })),
};

export default TransactionHistory;