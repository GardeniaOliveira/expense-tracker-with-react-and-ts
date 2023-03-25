import { useState, useEffect } from "react";
import * as C from "./App.styles";
import { Item } from "./types/Item";
import { Category } from "./types/Category";
import { categories } from "./data/categories";
import { items } from "./data/items";
import { TableArea } from "./components/TableArea.ts";
import * as Func from "./helpers/dateFilter";

const App = () => {
  // general list of all months
  const [list, setList] = useState(items);

  // list filtered for each months
  const [filteredList, setFilteredList] = useState<Item[]>([]);
  const [currentMonth, setCurrentMont] = useState(Func.getCurrentMonth());

  //monitors when changes the month and execute the Function
  useEffect(() => {
    setFilteredList(Func.filterListByMonth(list, currentMonth));
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
        <TableArea />
      </C.Body>
    </C.Container>
  );
};

export default App;
