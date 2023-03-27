import * as C from "./styles";
import * as Func from "../../helpers/dateFilter";

type Props = {
  currentMonth: string;
};
export const InfoArea = ({ currentMonth }: Props) => {
  return (
    <C.Container>
      <C.MonthArea>
        <C.MonthArrow>⬅️</C.MonthArrow>
        <C.MonthTitle>{Func.formateCurrentMonth(currentMonth)}</C.MonthTitle>
        <C.MonthArrow>➡️</C.MonthArrow>
      </C.MonthArea>

      <C.ResumeArea></C.ResumeArea>
    </C.Container>
  );
};
