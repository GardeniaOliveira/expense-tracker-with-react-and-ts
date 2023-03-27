import { Item } from "../types/Item";

export const getCurrentMonth = () => {
  let now = new Date();
  return `${now.getFullYear()} - ${now.getMonth() + 1}`;
};

//filter the old list and create a new list with new dates
export const filterListByMonth = (list: Item[], date: string): Item[] => {
  let newList: Item[] = [];

  //separate the - between month and year (2023-3)
  let [year, month] = date.split("-");

  //compare if the year and month requested are the same from the list
  for (let i in list) {
    if (
      list[i].date.getFullYear() === parseInt(year) &&
      list[i].date.getMonth() + 1 === parseInt(month)
    ) {
      // if the year and month requested are the same from the list, so push to the new list
      newList.push(list[i]);
    }
  }
  // return a list with items only the same month and year
  return newList;
};

export const formateDate = (date: Date): string => {
  let year = date.getFullYear();
  let month = date.getMonth() + 1;
  let day = date.getDate();

  return `${addZeroToDate(day)}/${addZeroToDate(month)}/${year}`;
};

const addZeroToDate = (n: number): string => {
  if (n < 10) {
    return `0${n}`;
  } else {
    return `${n}`;
  }
};

export const formateCurrentMonth = (currentMonth: string): string => {
  let [year, month] = currentMonth.split("-");
  let months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  return `${months[parseInt(month) - 1]}/${year}`;
};
