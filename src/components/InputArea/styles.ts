import styled from "styled-components";

export const Container = styled.div`
  padding: 20px;
  background-color: #1e293b;
  color: white;
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  margin-top: 20px;
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const InputLabel = styled.label`
  flex: 1;
  margin: 10px;
`;
export const InputTitle = styled.div`
  font-weight: bold;
  margin-bottom: 5px;
`;

export const Select = styled.select`
  width: 100%;
  height: 30px;
  padding: 0 5px;
  outline: none;
  background-color: #e1e1e1;
  border: 1px solid transparent;
  border-radius: 5px;
`;
export const Input = styled.input`
  width: 100%;
  height: 30px;
  padding: 0 5px;
  outline: none;
  background-color: #e1e1e1;
  border: 1px solid transparent;
  border-radius: 5px;
`;
export const Button = styled.button`
  width: 70%;
  height: 30px;
  padding: 10px;
  background-color: #e1e1e1;
  border: 1px solid transparent;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #0f172a;
    color: white;
    font-weight: bolder;
  }
`;
