import React from "react";
import { Button, Col, Row } from "react-bootstrap";
import "./CalButtons.css";

export interface ICalButtonsProps {
  resetCalc: () => void;
  sumOfNumbers: () => void;
  calculateNumbers: (newNumber: string) => void;
}

const CalButtons = ({
  resetCalc,
  calculateNumbers,
  sumOfNumbers,
}: ICalButtonsProps) => {
  return (
    <>
      <Row md={4}>
        <Col>
          <Button className="specialButton" onClick={() => resetCalc()}>
            C
          </Button>
          <Button onClick={() => calculateNumbers("%")}>%</Button>
          <Button onClick={() => calculateNumbers("/")}>/</Button>
        </Col>
        <Col>
          <Button onClick={() => calculateNumbers("1")}>1</Button>
          <Button onClick={() => calculateNumbers("2")}>2</Button>
          <Button onClick={() => calculateNumbers("3")}>3</Button>
          <Button onClick={() => calculateNumbers("*")}>X</Button>
        </Col>
        <Col>
          <Button onClick={() => calculateNumbers("4")}>4</Button>
          <Button onClick={() => calculateNumbers("5")}>5</Button>
          <Button onClick={() => calculateNumbers("6")}>6</Button>
          <Button onClick={() => calculateNumbers("-")}>-</Button>
        </Col>
        <Col>
          <Button onClick={() => calculateNumbers("7")}>7</Button>
          <Button onClick={() => calculateNumbers("8")}>8</Button>
          <Button onClick={() => calculateNumbers("9")}>9</Button>
          <Button onClick={() => calculateNumbers("+")}>+</Button>
        </Col>
        <Col>
          <Button onClick={() => calculateNumbers("0")}>0</Button>
          <Button onClick={() => calculateNumbers(".")}>.</Button>
          <Button onClick={() => sumOfNumbers()} className="specialButton">
            =
          </Button>
        </Col>
      </Row>
    </>
  );
};

export default CalButtons;
