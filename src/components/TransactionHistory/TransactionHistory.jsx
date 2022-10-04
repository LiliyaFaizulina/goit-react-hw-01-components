import PropTypes from 'prop-types';
import { Transaction } from './Transaction';

export function TransactionTable({transactions}) {
    return (
<table className="transaction-history">
  <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>

    <tbody>
        {transactions.map(({id, type, amount, currency}) => 
        <tr key={id}>
                <Transaction
                    type={type}
                    amount={amount}
                    currency={currency}
                />
        </tr>
        )}
  </tbody>
</table>
    );
}

TransactionTable.propTypes = {
    transactions: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired
    })).isRequired
}