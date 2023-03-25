import styled from "styled-components";

export const Table = styled.table`
  width: 100%;
  padding: 20px;
  background-color: #1e293b;
  color: white;
  text-transform: uppercase;
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  margin-top: 20px;
`;

//the question? means that the props is optional because in the category the width is auto
export const TableHeadColumn = styled.th<{ width?: number }>`
  //if has props props put the width defined by props, otherwise put auto
  width: ${(props) => (props.width ? `${props.width}px` : "auto")};
  padding: 10px 0;
  text-align: left;
`;
