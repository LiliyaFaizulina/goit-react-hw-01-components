import PropTypes from 'prop-types';
import { Transaction } from './Transaction';
import { TransactionTable, TableHeadList, TransactionItem } from './TransactionHistory.styled';

export function TransactionHistory({transactions}) {
    return (
<TransactionTable>
  <TableHeadList>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </TableHeadList>

    <tbody>
        {transactions.map(({id, type, amount, currency}) => 
        <TransactionItem key={id}>
                <Transaction
                    type={type}
                    amount={amount}
                    currency={currency}
                />
        </TransactionItem>
        )}
  </tbody>
</TransactionTable>
    );
}

TransactionHistory.propTypes = {
    transactions: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired
    })).isRequired
}