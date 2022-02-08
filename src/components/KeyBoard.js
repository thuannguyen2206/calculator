import React from "react";
import Button from "./Button";
import { typeCal } from "../services/calculator";

function KeyBoard({ onClickKeyBoard }) {
  return (
    <ul className="keyboard">
      <li>
        <ul className="line">
          <Button
            text="AC"
            classes="control"
            onClickBtn={() => onClickKeyBoard("AC", typeCal.control)}
          />
          <Button
            text="&#10006;"
            classes="control"
            onClickBtn={() => onClickKeyBoard("X", typeCal.control)}
          />
          <Button
            text="%"
            classes="control"
            onClickBtn={() => onClickKeyBoard("%", typeCal.operator)}
          />
          <Button
            text="/"
            classes="control"
            onClickBtn={() => onClickKeyBoard("/", typeCal.operator)}
          />
        </ul>
      </li>
      <li>
        <ul className="line">
          <Button
            text="7"
            onClickBtn={() => onClickKeyBoard("7", typeCal.numAndChar)}
          />
          <Button
            text="8"
            onClickBtn={() => onClickKeyBoard("8", typeCal.numAndChar)}
          />
          <Button
            text="9"
            onClickBtn={() => onClickKeyBoard("9", typeCal.numAndChar)}
          />
          <Button
            text="*"
            classes="control"
            onClickBtn={() => onClickKeyBoard("*", typeCal.operator)}
          />
        </ul>
      </li>
      <li>
        <ul className="line">
          <Button
            text="4"
            onClickBtn={() => onClickKeyBoard("4", typeCal.numAndChar)}
          />
          <Button
            text="5"
            onClickBtn={() => onClickKeyBoard("5", typeCal.numAndChar)}
          />
          <Button
            text="6"
            onClickBtn={() => onClickKeyBoard("6", typeCal.numAndChar)}
          />
          <Button
            text="-"
            classes="control"
            onClickBtn={() => onClickKeyBoard("-", typeCal.operator)}
          />
        </ul>
      </li>
      <li>
        <ul className="line">
          <Button
            text="1"
            onClickBtn={() => onClickKeyBoard("1", typeCal.numAndChar)}
          />
          <Button
            text="2"
            onClickBtn={() => onClickKeyBoard("2", typeCal.numAndChar)}
          />
          <Button
            text="3"
            onClickBtn={() => onClickKeyBoard("3", typeCal.numAndChar)}
          />
          <Button
            text="+"
            classes="control"
            onClickBtn={() => onClickKeyBoard("+", typeCal.operator)}
          />
        </ul>
      </li>
      <li>
        <ul className="line">
          <Button
            text="0"
            classes="b2"
            onClickBtn={() => onClickKeyBoard("0", typeCal.numAndChar)}
          />
          <Button
            text="."
            onClickBtn={() => onClickKeyBoard(".", typeCal.numAndChar)}
          />
          <Button
            text="="
            classes="control"
            onClickBtn={() => onClickKeyBoard("=", typeCal.control)}
          />
        </ul>
      </li>
    </ul>
  );
}

export default KeyBoard;
