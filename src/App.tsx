import { useState, useEffect } from "react";

import * as C from "./App.styles";
import * as Func from "./helpers/dateFilter";

import { Item } from "./types/Item";
import { items } from "./data/items";

import { Category } from "./types/Category";
import { categories } from "./data/categories";

import { TableArea } from "./components/TableArea";
import { TableItem } from "./components/TableItem";
import { InfoArea } from "./components/InfoArea";

const App = () => {
  // general list of all months
  const [list, setList] = useState(items);
  console.log(list);

  // list filtered for each months
  const [filteredList, setFilteredList] = useState<Item[]>([]);
  const [currentMonth, setCurrentMont] = useState(Func.getCurrentMonth());

  // calculate the total of incomes and expenses
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);

  //monitors when changes the month and execute the Function
  useEffect(() => {
    setFilteredList(Func.filterListByMonth(list, currentMonth));
  }, [list, currentMonth]);

  //if the list changes the value of expense and income should change too;
  useEffect(() => {
    let expense = 0;
    let income = 0;

    for (let i in filteredList) {
      if (categories[filteredList[i].category].expense) {
        expense += filteredList[i].value;
      } else {
        income += filteredList[i].value;
      }
    }

    setIncome(income);
    setExpense(expense);
  }, [filteredList]);

  const handleMonthChange = (newMonth: string) => {
    setCurrentMont(newMonth);
  };
  return (
    <C.Container>
      <C.Header>
        <C.HeaderText>Expense Tracker</C.HeaderText>
      </C.Header>

      <C.Body>
        {/* Info area*/}
        <InfoArea
          currentMonth={currentMonth}
          onMonthChange={handleMonthChange}
          income={income}
          expense={expense}
        />

        {/* insertion area*/}

        {/* List items */}
        <TableArea list={filteredList} />
      </C.Body>
    </C.Container>
  );
};

export default App;
