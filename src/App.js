import { useState } from "react";
import "./App.css";
import KeyBoard from "./components/KeyBoard";
import calculator, {
  validCharacters,
  operators,
  controls,
  typeCal,
} from "./services/calculator";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [firstNum, setFirstNum] = useState(0);
  const [secondNum, setSecondNum] = useState(0);
  const [operator, setOperator] = useState(null);
  const [result, setResult] = useState(null);

  // xử lý thay đổi input value
  const setOnChangeInputValue = (value) => {
    if (validCharacters.includes(value)) {
      setInputValue((pre) => pre + value);
      operator
        ? setSecondNum(Number(inputValue + value))
        : setFirstNum(Number(inputValue + value));
    }
  };

  // xử lý khi nhấn vào các nút control
  const handleClickControl = (value) => {
    switch (value) {
      case controls.AC:
        setInputValue("");
        setFirstNum(0);
        setSecondNum(0);
        setOperator(null);
        setResult(null);
        break;
      case controls.Remove:
        let inputVal = inputValue?.slice(0, -1);
        setInputValue(inputVal);
        if (operator) {
          setSecondNum(Number(inputVal));
        }
        break;
      case controls.Equal:
        let result;
        switch (operator) {
          case operators.plus:
            result = calculator.sum(Number(firstNum), Number(secondNum));
            setResult(result);
            break;
          case operators.subtract:
            result = calculator.subtract(Number(firstNum), Number(secondNum));
            setResult(result);
            break;
          case operators.multiple:
            result = calculator.multiple(Number(firstNum), Number(secondNum));
            setResult(result);
            break;
          case operators.division:
            result = calculator.division(Number(firstNum), Number(secondNum));
            setResult(result);
            break;
          default:
            break;
        }
        setInputValue("");
        setFirstNum(result);
        setSecondNum(0);
        break;
      default:
        break;
    }
  };

  // xử lý cho trường hợp click vào operator
  const handleClickOperator = (value) => {
    // nếu clicked operator là % thì tính tại input và cập nhật
    if (value === operators.percent) {
      let percentVal = calculator.percent(Number(inputValue));
      setInputValue(percentVal);
      operator ? setSecondNum(percentVal) : setFirstNum(percentVal);
      return;
    }

    // nếu operator trong state khác null => set input là số thứ hai
    // ngược lại set input là số thứ nhất và hiện input ở ô kết quả
    if (operator) {
      setSecondNum(Number(inputValue));
    } else {
      setFirstNum(Number(inputValue));
      setResult(inputValue);
    }
    setOperator(value);
    setInputValue("");
  };

  // xử lý khi nhấn nút
  const handleClickKeyBoard = (value, type) => {
    switch (type) {
      case typeCal.numAndChar:
        setOnChangeInputValue(value);
        break;
      case typeCal.operator:
        handleClickOperator(value);
        break;
      case typeCal.control:
        handleClickControl(value);
        break;
      default:
        break;
    }
  };

  return (
    <div>
      <div className="wrapper">
        <div className="input_screen">
          <input readOnly type="text" placeholder="0" value={inputValue} />
          <span className="type_cal">{operator}</span>
          <div className="result">{result}</div>
        </div>
        <KeyBoard onClickKeyBoard={handleClickKeyBoard} />
      </div>
    </div>
  );
}

export default App;
