const getExpensesTotal = values => {
  let sum = 0,
    sumValues = 0;
  if (values.length == 0) {
    return sumValues;
  } else {
    values.forEach(value => {
      sum += value.amount;
    });
    return sum;
  }
};

export default getExpensesTotal;
