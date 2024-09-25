import React from 'react';
import './Bookings.css';

const billingData = [
  { date: '2024-09-01', type: 'Basic', amount: '$50', invoice: '#34598', status: 'Confirmed' },
  { date: '2024-09-02', type: 'Basic', amount: '$75', invoice: '#34599', status: 'Not Confirmed' },
  { date: '2024-09-03', type: 'Basic', amount: '$100', invoice: '#34600', status: 'Pending' },
  { date: '2024-09-04', type: 'Basic', amount: '$125', invoice: '#34601', status: 'Confirmed' },
  { date: '2024-09-05', type: 'Basic', amount: '$150', invoice: '#34602', status: 'Not Confirmed' },
  { date: '2024-09-06', type: 'Basic', amount: '$175', invoice: '#34603', status: 'Pending' },
  { date: '2024-09-07', type: 'Basic', amount: '$200', invoice: '#34604', status: 'Confirmed' },
  { date: '2024-09-08', type: 'Basic', amount: '$225', invoice: '#34605', status: 'Not Confirmed' },
  { date: '2024-09-09', type: 'Basic', amount: '$250', invoice: '#34606', status: 'Pending' },
  { date: '2024-09-10', type: 'Basic', amount: '$275', invoice: '#34607', status: 'Confirmed' },
];

const Bookings = () => {
  return (
    <div className="bookings-container">
      <h2 className="bookings-heading">Billing History</h2>
      <table className="billing-table">
        <thead>
          <tr>
            <th>Date</th>
            <th>Type</th>
            <th>Amount</th>
            <th>Invoice #</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {billingData.map((item, index) => (
            <tr key={index}>
              <td>{item.date}</td>
              <td>{item.type}</td>
              <td>{item.amount}</td>
              <td className="invoice-number">{item.invoice}</td>
              <td className={`status ${item.status.toLowerCase().replace(' ', '-')}`}>{item.status}</td>
              <td>
                <button className="view-button">View</button>
                <button className="action-button">Export PDF</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Bookings;
