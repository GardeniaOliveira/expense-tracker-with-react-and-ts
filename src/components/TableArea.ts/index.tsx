import React from "react";
import * as C from "./styles";
import { Item } from "../../types/Item";

type Props = {
  list: Item[];
};

export const TableArea = ({ list }: Props) => {
  console.log(list);
  return (
    <C.Table>
      <thead>
        <tr>
          <C.TableHeadColumn width={100}>Date </C.TableHeadColumn>
          <C.TableHeadColumn width={130}>Category </C.TableHeadColumn>
          <C.TableHeadColumn>Title </C.TableHeadColumn>
          <C.TableHeadColumn width={150}>Value</C.TableHeadColumn>
        </tr>
      </thead>
      <tbody>
        {list.map((item, index) => (
          <tr key={index}>
            <td></td>
            <td></td>
            <td>{item.title}</td>
            <td></td>
          </tr>
        ))}
      </tbody>
    </C.Table>
  );
};
