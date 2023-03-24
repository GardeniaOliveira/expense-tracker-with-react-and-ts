import { useState, useEffect } from "react";
import * as C from "./App.styles";
import { Item } from "./types/Item";
import { Category } from "./types/Category";
import { categories } from "./data/categories";
import { items } from "./data/items";
import * as Fun from "./helpers/dateFilter";

const App = () => {
  // general list of all months
  const [list, setList] = useState(items);

  // list filtered for each months
  const [filteredList, setFilteredList] = useState<Item[]>([]);
  const [currentMonth, setCurrentMont] = useState(Fun.getCurrentMonth());

  //monitors when changes the month and execute the function
  useEffect(() => {
    setFilteredList(Fun.filterListByMonth(list, currentMonth));
  }, [list, currentMonth]);
  return (
    <C.Container>
      <C.Header>
        <C.HeaderText>Expense Tracker</C.HeaderText>
      </C.Header>
      <C.Body>
        {/* Info area*/}

        {/* insertion area*/}

        {/* List items */}
      </C.Body>
    </C.Container>
  );
};

export default App;
