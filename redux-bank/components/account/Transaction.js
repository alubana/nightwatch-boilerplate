import React from 'react';

export default (props) => {
  const { type, date, amount } = props.transaction;

  var dt = new Date(date);
  const dateString = (dt.getMonth() + 1) + "/" + dt.getDate() + "/" + dt.getFullYear();
  var prefix = "$";
  var style;

  if (type === "Withdrawal") {
    prefix = "-" + prefix;
    style = { color: 'red' };
  }
  return (
    <tr>
      <td>{type}</td>
      <td>{dateString}</td>
      <td style={style}>{prefix + amount}</td>
    </tr>
  );
};
