import styled from "styled-components";

export const Container = styled.div`
  padding: 20px;
  background-color: #1e293b;
  color: white;
  text-transform: uppercase;
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  margin-top: -40px;
  display: flex;
  align-items: center;
`;

export const MonthArea = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

export const MonthArrow = styled.div`
  width: 40px;
  text-align: center;
  font-size: 25px;
  cursor: pointer;
`;

export const MonthTitle = styled.div`
  flex: 1;
  text-align: center;
`;

export const ResumeArea = styled.div`
  flex: 2;
  display: flex;
`;
