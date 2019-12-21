import React, {
  useCallback,
  useState,
  useEffect,
  FunctionComponent
} from "react";
import { useDispatch } from "react-redux";
import TextField from "@material-ui/core/TextField";

import { useText, setText } from "src/store";
import { Columns } from "src/store/types";

type TextAreaProps = {
  column: Columns;
};

const TextArea: FunctionComponent<TextAreaProps> = ({ column = 0 }) => {
  const dispatch = useDispatch();
  const textArr = useText();
  const text = textArr[column] || "";
  const [textValue, textValueChange] = useState(text);

  useEffect(() => {
    textValueChange(text);
  }, [text]);

  const handleChange = useCallback(({ target }) => {
    textValueChange(target.value);
  }, []);

  const handleBlur = useCallback(() => {
    dispatch(setText({ text: textValue, columns: column }));
  }, [column, dispatch, textValue]);

  return (
    <TextField
      label="Enter text"
      rows="12"
      multiline
      fullWidth
      value={textValue}
      onBlur={handleBlur}
      onChange={handleChange}
    />
  );
};

export default TextArea;
