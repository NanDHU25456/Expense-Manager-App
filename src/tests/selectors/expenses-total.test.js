import getExpensesTotal from "../../selectors/expenses-total";
import expenses from "../fixtures/expenses";

test("should return 0 for empty array", () => {
  const res = getExpensesTotal([]);
  expect(res).toBe(0);
});

test("should return sum value for single element", () => {
  const res = getExpensesTotal([expenses[0]]);
  expect(res).toBe(195);
});

test("should return sum value for multi values", () => {
  const res1 = getExpensesTotal(expenses);
  expect(res1).toBe(114195);
});
