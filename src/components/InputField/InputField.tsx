import React from "react";
import { Form } from "react-bootstrap";
import "./InputField.css";

export interface IInputFieldProps {
  numberInputField: any;
}

const InputField = ({ numberInputField }: IInputFieldProps) => {
  return (
    <>
      <Form>
        <Form.Group className="mb-3">
          <Form.Control
            className="imputNumber"
            value={numberInputField}
            disabled
          />
        </Form.Group>
      </Form>
    </>
  );
};

export default InputField;
