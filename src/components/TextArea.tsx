import React, { useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import TextField from "@material-ui/core/TextField";

import { useText, setText } from "src/store/text-layout";

export default function TextArea() {
  const dispatch = useDispatch();
  const text = useText();
  const [textValue, textValueChange] = useState(text);

  const handleChange = useCallback(({ target }) => {
    textValueChange(target.value);
  }, []);

  const handleBlur = useCallback(() => {
    dispatch(setText(textValue));
  }, [dispatch, textValue]);

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
}
