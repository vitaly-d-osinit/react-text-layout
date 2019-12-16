import React, { useCallback, useState, FunctionComponent } from "react";
import { useDispatch } from "react-redux";
import TextField from "@material-ui/core/TextField";

import { useText, setTextAction } from "src/store";
import { Columns } from "src/store/types";

type TextAreaProps = {
  column: Columns;
};

const TextArea: FunctionComponent<TextAreaProps> = ({ column = 0 }) => {
  const dispatch = useDispatch();
  const text = useText();
  const [textValue, textValueChange] = useState(text[column]);

  const handleChange = useCallback(({ target }) => {
    textValueChange(target.value);
  }, []);

  const handleBlur = useCallback(() => {
    dispatch(setTextAction(textValue, column));
  }, [column, dispatch, textValue]);

  const handleKeyDown = useCallback(({ key, target }) => {
    if (key === "Enter") {
      target.blur();
    }
  }, []);

  return (
    <TextField
      label="Enter text"
      rows="12"
      multiline
      fullWidth
      value={textValue}
      onBlur={handleBlur}
      onKeyDown={handleKeyDown}
      onChange={handleChange}
    />
  );
};

export default TextArea;
